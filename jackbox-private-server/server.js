const http = require('http');
const https = require('https');
const express = require('express');
const fs = require('fs');
const ws = require('ws');

const app = express();
const rooms = {};
const ws_ids = {};
const serverUrl = "localhost"; // WITHOUT PORT!!!
const sslCerts = {cert: fs.readFileSync('localhost.crt'), key: fs.readFileSync('localhost.key')}; // Your ssl certificate and private key
const games = JSON.parse(fs.readFileSync('jackbox-private-server/games.json'));
const appIds = games.appIds;
const appTags = games.appTags;
const maxPlayers = games.maxPlayers;
const minPlayers = games.minPlayers;
const appConfigs = {TriviaDeath2:{"bannedContentIds":{"TDQuestion":["55182_es-XL"],"TDQuestionBomb":["TMP2-END-1_it-IT"],"QuiplashContent":["TMP2-QUIP-1_fr-FR","TMP2-QUIP-2_fr-FR","TMP2-QUIP-3_fr-FR","TMP2-QUIP-4_fr-FR","TMP2-QUIP-5_fr-FR","TMP2-QUIP-1_it-IT","TMP2-QUIP-2_it-IT","TMP2-QUIP-3_it-IT","TMP2-QUIP-4_it-IT","TMP2-QUIP-5_it-IT"],"TDQuestionKnife": ["TMP2-END-14_de-DE","TMP2-END-16_de-DE","TMP2-END-12_it-IT","TMP2-END-13_it-IT","TMP2-END-14_it-IT","TMP2-END-15_it-IT","TMP2-END-16_it-IT","TMP2-END-17_it-IT","TMP2-END-18_it-IT","TMP2-END-19_it-IT"],"TDQuestionMadness": ["TMP2-END-20_it-IT","TMP2-END-21_it-IT","TMP2-END-22_it-IT"]}},RoleModels:{"preventPictures":false},quiplash3:{"serverUrl":serverUrl},Everyday:{"serverUrl":serverUrl},WorldChampions:{"serverUrl":serverUrl},JackboxTalks:{"serverUrl":serverUrl},BlankyBlank:{"serverUrl":serverUrl}};

function parseUrl(url){
	var res = {url: url.split('?')[0], query: {}};
	if(url.split('?').length == 2){
		url.split('?')[1].split('&').forEach((param) => {
			if(param.split("=").length == 2){
				res.query[param.split("=")[0]] = param.split("=")[1];
			}
		});
	}
	return res;
};

function isJson(data){
	try{
		JSON.parse(data);
		return true;
	}catch(e){
		return false;
	}
};

const toJson = data => {return JSON.stringify(data)};

function checkOldMessage(data){
	if(typeof data.args !== 'undefined' && typeof data.args[0] === 'undefined'){
		if(typeof data.args !== 'object' || typeof data.name !== 'string' || typeof data.args.action !== 'string' || typeof data.args.appId !== 'string' || typeof appIds[data.args.appId] !== 'string'){
			return false;
		}else{
			return true;
		}
	}else{
		if(typeof data.args !== 'object' || typeof data.name !== 'string' || typeof data.args[0].action !== 'string' || typeof data.args[0].appId !== 'string' || typeof appIds[data.args[0].appId] !== 'string'){
			return false;
		}else{
			return true;
		}
	}
};

function checkMessage(data){
	if(typeof data.opcode !== 'string' || typeof data.params !== 'object'){
		return false;
	}else{
		return true;
	}
};

function randomId(min, max) {
	return parseInt(Math.random() * (max - min) + min);
};

function make(needed){
	var result = '';
	if(needed == 'room'){
		// var length = 4;
		// var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		return 'SAIL';
	}else if(needed == 'token'){
		var length = 24;
		var characters = '0123456789abcdef';
	}
	var charactersLength = characters.length;
	for(var i = 0; i < length; i++){
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

function generateRoom(isLegacy){
	var room = make('room');
	while(typeof rooms[room] !== 'undefined'){
		var room = makeId('room');
	};
	var token = make('token');
	rooms[room] = {completed: false, body: {appTag: "", appId: "", audienceEnabled: false, code: room, host: serverUrl, audienceHost: serverUrl, locked: false, full: false, maxPlayers: 0, minPlayers: 0, moderationEnabled: false, passwordRequired: false, twitchLocked: false, locale: '', keepalive: false, controllerBranch: ''}, clients: {}, entities: {}, accessToken: token, userId: '', password: null, moderatorPassword: null, audience: [], pc: 0, host: null, isLegacy: isLegacy};
	return room;
};

function checkQuery(query){
	var roles = ['host', 'player', 'moderator', 'audience'];
	if(typeof query.role === 'undefined' || typeof query.name === 'undefined' || typeof query.format === 'undefined' || roles.indexOf(query.role) == -1 || query.format != 'json'){
		return false;
	}else{
		if(query.role == 'player' || query.role == 'audience'){
			if(typeof query['user-id'] === 'undefined'){
				return false;
			}else{
				return true;
			}
		}else if(query.role == 'host'){
			if(typeof query['user-id'] === 'undefined' || typeof query['host-token'] === 'undefined'){
				return false;
			}else{
				return true;
			}
		}else{
			return true;
		}
	}
};

function userInRoom(room, user, connected){
	if(typeof rooms[room] === 'undefined'){
		return false;
	}else{
		var user_in_room = false;
		Object.keys(rooms[room].clients).forEach((client) => {
			client = rooms[room].clients[client];
			if(client.userId == user){
				if(connected){
					if(client.connected){
						user_in_room = true;
					}
				}else{
					user_in_room = true;
				}
			}
		});
		return user_in_room;
	}
};

function upgradeWs(request, socket, head){
	var req = parseUrl(request.url);
	console.log(req);
	if(req.url.startsWith('/socket.io/1/websocket/')){
		var token = req.url.split('/')[4];
		if(req.url == '/socket.io/1/websocket/'+token){
			wsOldServer.handleUpgrade(request, socket, head, socket => {
				wsOldServer.emit('connection', socket, request, req);
			});
		}else{
			socket.destroy();
		}
	}else if(req.url.startsWith('/api/v2/rooms/')){
		var room = req.url.match(/[A-Z]/g);
		if(room.length < 4){
			socket.destroy();
		}else{
			room = room[0]+room[1]+room[2]+room[3];
			if(req.url == '/api/v2/rooms/'+room+'/play'){
				if(checkQuery(req.query)){
					if(typeof rooms[room] === 'undefined' || !rooms[room].completed){
						socket.destroy();
					}else{
						if(req.query.name.length > 12){
							req.query.name = req.query.name.substring(0, 12);
						}
						if(req.query.role == 'player'){
							var reconnect = false;
							Object.keys(rooms[room].clients).forEach((client) => {
								client = rooms[room].clients[client];
								if(client.userId == req.query['user-id']){
									if(!client.connected){
										reconnect = true;
									}
								}
							});
							if((rooms[room].body.full || rooms[room].body.locked) && !reconnect){
								socket.destroy();
							}else{
								wsPlayersServer.handleUpgrade(request, socket, head, socket => {
									wsPlayersServer.emit('connection', socket, request, req);
								});
							}
						}else if(req.query.role == 'moderator'){
							socket.destroy(); // bc now server doesn't support moderators
						}else if(req.query.role == 'host'){
							socket.destroy(); // bc now server doesn't support all games from tjpp 7 and newer
						}else{
							socket.destroy();
						}
					}
				}else{
					socket.destroy();
				}
			}else{
				socket.destroy();
			}
		}
	}else if(req.url.startsWith('/api/v2/audience/')){
		var room = req.url.match(/[A-Z]/g);
		if(room.length < 4){
			socket.destroy();
		}else{
			room = room[0]+room[1]+room[2]+room[3];
			if(req.url == '/api/v2/audience/'+room+'/play'){
				if(checkQuery(req.query)){
					if(typeof rooms[room] === 'undefined'){
						socket.destroy();
					}else{
						if(req.query.name.length > 12){
							req.query.name = req.query.name.substring(0, 12);
						}
						if(req.query.role == 'audience'){
							wsAudienceServer.handleUpgrade(request, socket, head, socket => {
								wsAudienceServer.emit('connection', socket, request, req);
							});
						}else{
							socket.destroy();
						}
					}
				}else{
					socket.destroy();
				}
			}else{
				socket.destroy();
			}
		}
	}else{
		socket.destroy();
	}
};

const wsOldServer = new ws.Server({ noServer: true });
const wsPlayersServer = new ws.Server({ noServer: true });
const wsAudienceServer = new ws.Server({ noServer: true });
//const wsHostsServer = new ws.Server({ noServer: true });
wsOldServer.on('connection', (socket, request, req) => {
	socket.id = randomId(1000000, 9999999);
	console.log(socket.id+" connected");
	socket.on('error', error => {console.log(socket.id+" error: "+error)});
	socket.on('close', () => {
		console.log(socket.id+" disconnected");
		if(typeof ws_ids[socket.id] === 'object'){
			if(typeof rooms[socket.room] !== 'undefined'){
				if(socket.isHost){
					Object.keys(rooms[socket.room].clients).forEach((client) => {
						client = rooms[socket.room].clients[client];
						if((client.role == 'player' || client.role == 'moderator') && client.connected){
							if(ws_ids[client.ws.id].isLegacy){
								client.ws.send('5:::'+toJson({"name":"msg","args":[{"type":"Event","event":"RoomDestroyed","roomId":socket.room}]}));
								client.ws.send('0::');
							}else{
								client.ws.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"client/disconnected","result":{"id":rooms[socket.room].host.id, "role":"host"}}));
							}
							client.ws.close();
							client.ws.terminate();
						}
					});
					rooms[socket.room].audience.forEach((client) => {
						if(ws_ids[client].isLegacy){
							ws_ids[client].ws.send('5:::'+toJson({"name":"msg","args":[{"type":"Event","event":"RoomDestroyed","roomId":socket.room}]}));
							ws_ids[client].ws.send('0::');
						}else{
							ws_ids[client].ws.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"client/disconnected","result":{"id":rooms[socket.room].host.id, "role":"host"}}));
						}
						ws_ids[client].ws.close();
						ws_ids[client].ws.terminate();
					});
					delete rooms[socket.room];
				}else if(!socket.isHost && !socket.isAudience){
					rooms[socket.room].clients[ws_ids[socket.id].profileId].connected = false;
					if(rooms[socket.room].isLegacy){
						rooms[socket.room].host.ws.send("5:::"+toJson({"name":"msg","args":[{"type":"Event","event":"CustomerLeftRoom","roomId":socket.room,"customerUserId":""}]}));
					}else{
						rooms[socket.room].host.ws.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"client/disconnected","result":{"id":ws_ids[socket.id].profileId,"role":rooms[socket.room].clients[ws_ids[socket.id].profileId].role}}));
					}
				}else if(socket.isAudience){
					rooms[socket.room].audience.splice(rooms[socket.room].audience.indexOf(socket.id), 1);
					rooms[socket.room].entities['audience'] = {"to":"all","opcode":"audience/pn-counter","content":{"key":"audience","count":rooms[socket.room].audience.length}};
					delete ws_ids[socket.id];
				}
			}
		}
	});
	socket.on('message', message => {
		message = message.toString();
		console.log(socket.id+": "+message);
		if(message == '2::'){
			// host sended a pong
		}else if(message == '0::'){
			socket.send('0::');
			socket.terminate();
		}else if(message.startsWith('5::')){
			if(message.split('5:::').length != 2 || !isJson(message.split('5:::')[1])){
				socket.send('-1::');
			}else if(checkOldMessage(JSON.parse(message.split('5:::')[1]))){
				var data = JSON.parse(message.split('5:::')[1]);
				if(data.args.action == 'CreateRoom'){
					if(!socket.isConnected && typeof appIds[data.args.appId] !== 'undefined' && typeof data.args.userId !== 'undefined'){
						var room = generateRoom(true);
						socket.room = room;
						var profileId = Object.keys(rooms[room].clients).length+1;
						var options = data.args.options;
						var appId = data.args.appId;
						if(typeof options.maxPlayers === 'number' && options.maxPlayers >= maxPlayers[appIds[appId]]){
							rooms[socket.room].body.maxPlayers = options.maxPlayers;
						}else if(typeof options.maxPlayers === 'number' && options.maxPlayers < minPlayers[appIds[appId]]){
							rooms[socket.room].body.maxPlayers = minPlayers[appIds[appId]];
						}else{
							rooms[socket.room].body.maxPlayers = maxPlayers[appIds[appId]];
						}
						if(typeof options.password === 'string'){
							rooms[socket.room].password = options.password;
							rooms[socket.room].body.passwordRequired = true;
						}
						if(typeof options.twitchLocked === 'boolean'){
							rooms[socket.room].body.twitchLocked = options.twitchLocked;
						}
						rooms[socket.room].userId = data.args.userId;
						rooms[socket.room].body.appTag = appIds[appId];
						rooms[socket.room].body.appId = appId;
						rooms[socket.room].completed = true;
						socket.isConnected = true;
						socket.isHost = true;
						rooms[room].clients[profileId] = {ws: socket, role: 'host', name: req.query.name, userId: data.args.userId, id: profileId, connected: true};
						ws_ids[socket.id] = {room: room, id: socket.id, profileId: profileId, ws: socket, userId: data.args.userId, isLegacy: true};
						rooms[room].host = {ws: socket, id: profileId, userId: null};
						socket.send('5:::'+toJson({"name":"msg","args":[{"type":"Result","action":"CreateRoom","success":true,"roomId":socket.room}]}));
					}
				}else if(data.args.action == 'StartSession'){
					if(socket.isConnected && socket.isHost && typeof data.args.module === 'string' && typeof data.args.name === 'string'){
						if(data.args.module == 'audience'){
							rooms[socket.room].body.audienceEnabled = true;
							rooms[socket.room].entities['audience'] = {"to":"all","opcode":"audience/pn-counter","content":{"key":"audience","count":rooms[socket.room].audience.length}};
							socket.send('5:::'+toJson({"name":"msg","args":[{"type":"Result","action":"StartSession","module":"audience","name":data.args.name,"success":true,"response":{"count":rooms[socket.room].audience.length}}]}));
						}else if(data.args.module == 'vote' && typeof data.args.options === 'object' && typeof data.args.options.choices === 'object'){
							var choices = {};
							data.args.options.choices.forEach((choice) => {
								choices[choice] = 0;
							});
							rooms[socket.room].entities[data.args.name] = {"to":"audience","opcode":"audience/count-group","content":{"key":data.args.name,"choices":choices}};
							rooms[socket.room].audience.forEach((client) => {
								if(!ws_ids[client].isLegacy){
									ws_ids[client].ws.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"audience/count-group","result":{"key": data.args.name, "choices": choices}}));
								}
							});
							socket.send('5:::'+toJson({"name":"msg","args":[{"type":"Result","action":"StartSession","module":"vote","name":data.args.name,"success":true,"response":{}}]}));
						}
					}
				}else if(data.args.action == 'GetSessionStatus'){
					if(socket.isConnected && socket.isHost && typeof data.args.module === 'string' && typeof data.args.name === 'string'){
						if(data.args.module == 'audience'){
							socket.send('5:::'+toJson({"name":"msg","args":[{"type":"Result","action":"GetSessionStatus","module":"audience","name":data.args.name,"success":true,"response":{"count":rooms[socket.room].audience.length}}]}))
						}else if(data.args.module == 'vote'){
							if(typeof rooms[socket.room].entities[data.args.name] !== 'undefined'){
								var choices = rooms[socket.room].entities[data.args.name].content.choices;
								socket.send('5:::'+toJson({"name":"msg","args":[{"type":"Result","action":"GetSessionStatus","module":"vote","name":data.args.name,"success":true,"response":choices}]}));
							}
						}
					}
				}else if(data.args.action == 'SetCustomerBlob'){
					if(socket.isConnected && socket.isHost && typeof data.args.customerUserId === 'string' && typeof data.args.blob !== 'undefined'){
						var playerId = null;
						Object.keys(rooms[socket.room].clients).forEach((client) => {
							client = rooms[socket.room].clients[client];
							if(client.userId == data.args.customerUserId){
								playerId = client.id;
							}
						});
						if(playerId != null){
							var objectName = "bc:customer:"+data.args.customerUserId;
							rooms[socket.room].entities[objectName] = {"to":"player","playerId":playerId,"opcode":"object","content": {"key":objectName,"val":data.args.blob}};
							if(rooms[socket.room].clients[playerId].connected){
								if(ws_ids[rooms[socket.room].clients[playerId].ws.id].isLegacy){
									rooms[socket.room].clients[playerId].ws.send('5:::'+toJson({"name":"msg","args":[{"type":"Event","event":"CustomerBlobChanged","roomId":socket.room,"blob":data.args.blob}]}));
								}else{
									rooms[socket.room].clients[playerId].ws.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"object","result":{"key":objectName,"val":data.args.blob,"version":0,"from":rooms[socket.room].host.id}}));
								}
							}
						}
					}
				}else if(data.args.action == 'SetRoomBlob'){
					if(socket.isConnected && socket.isHost && typeof data.args.blob !== 'undefined'){
						rooms[socket.room].entities['bc:room'] = {"to":"all","opcode":"object","content": {"key":"bc:room","val":data.args.blob}};
						Object.keys(rooms[socket.room].clients).forEach((client) => {
							client = rooms[socket.room].clients[client];
							if(client.connected){
								if(ws_ids[client.ws.id].isLegacy){
									client.ws.send('5:::'+toJson({"name":"msg","args":[{"type":"Event","event":"RoomBlobChanged","roomId":socket.room,"blob":data.args.blob}]}));
								}else{
									client.ws.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"object","result":{"key":"bc:room","val":data.args.blob,"version":0,"from":rooms[socket.room].host.id}}));
								}
							}
						});
						rooms[socket.room].audience.forEach((client) => {
							if(ws_ids[client].isLegacy){
								ws_ids[client].ws.send('5:::'+toJson({"name":"msg","args":[{"type":"Event","event":"RoomBlobChanged","roomId":socket.room,"blob":data.args.blob}]}));
							}else{
								ws_ids[client].ws.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"object","result":{"key":"bc:room","val":data.args.blob,"version":0,"from":rooms[socket.room].host.id}}));
							}
						});
					}
				}else if(data.args.action == 'LockRoom'){
					if(socket.isConnected && socket.isHost){
						rooms[socket.room].body.locked = true;
						socket.send('5:::'+toJson({"name":"msg","args":[{"type":"Result","action":"LockRoom","success":true,"roomId":socket.room}]}));
					}
				}else if(data.args.action == 'StopSession'){
					if(socket.isConnected && socket.isHost && typeof data.args.module === 'string' && typeof data.args.name === 'string'){
						if(data.args.module == 'vote'){
							if(typeof rooms[socket.room].entities[data.args.name] !== 'undefined'){
								var choices = rooms[socket.room].entities[data.args.name].content.choices;
								delete rooms[socket.room].entities[data.args.name];
								socket.send('5:::'+toJson({"name":"msg","args":[{"type":"Result","action":"StopSession","module":"vote","name":data.args.name,"success":true,"response":choices}]}));
							}
						}
					}
				}else if(typeof data.args[0] !== 'undefined'){
					if(data.args[0].action == 'JoinRoom'){
						if(!socket.isConnected && typeof data.args[0].roomId !== 'undefined' && typeof data.args[0].name !== 'undefined' && typeof data.args[0].joinType !== 'undefined' && typeof data.args[0].options !== 'undefined' && typeof data.args[0].userId !== 'undefined'){
							if(data.args[0].joinType == 'player'){
								if(typeof rooms[data.args[0].roomId] === 'undefined' || userInRoom(data.args[0].roomId, data.args[0].userId, true)){
									socket.send('0::');
									socket.terminate();
								}else if((rooms[data.args[0].roomId].body.locked || rooms[data.args[0].roomId].body.full) && !userInRoom(data.args[0].roomId, data.args[0].userId, true)){
									socket.send('0::');
									socket.terminate();
								}else{
									var passwordCorrect = false;
									if(rooms[data.args[0].roomId].body.passwordRequired){
										if(typeof data.args[0].options.password !== 'undefined' && data.args[0].options.password == rooms[data.args[0].roomId].password){
											passwordCorrect = true;
										}
									}else{
										passwordCorrect = true;
									}
									if(!passwordCorrect){
										socket.send('5:::'+toJson({"name":"msg","args":[{"type":"Result","action":"JoinRoom","success":false,"initial":false,"roomId":data.args[0].roomId,"joinType":"player","userId":data.args[0].userId,"error_code":2017,"error":"password required","options":{"roomcode":"","name":data.args[0].roomId,"email":"","phone":""}}]}));
										socket.send('0::');
										socket.terminate();
									}else{
										if(userInRoom(data.args[0].roomId, data.args[0].userId, false)){
											var newSocketId = null;
											socket.room = data.args[0].roomId;
											Object.keys(rooms[socket.room].clients).forEach((client) => {
												client = rooms[socket.room].clients[client];
												if(client.userId == data.args[0].userId){
													if(!client.connected){
														newSocketId = client.ws.id;
													}
												}
											});
											console.log("Client id changed from "+socket.id+" to "+newSocketId);
											socket.id = newSocketId
											socket.isConnected = true;
											var profileId = ws_ids[socket.id].profileId;
											rooms[socket.room].clients[profileId].connected = true;
											rooms[socket.room].clients[profileId].ws = socket;
											rooms[socket.room].clients[profileId].isLegacy = false;
											ws_ids[socket.id].ws = socket;
										}else{
											socket.room = data.args[0].roomId;
											socket.isConnected = true;
											var profileId = Object.keys(rooms[data.args[0].roomId].clients).length+1;
											rooms[data.args[0].roomId].clients[profileId] = {ws: socket, role: 'player', name: data.args[0].name, userId: data.args[0].userId, id: profileId, connected: true};
											ws_ids[socket.id] = {room: data.args[0].roomId, id: socket.id, profileId: profileId, ws: socket, userId: data.args[0].userId, isLegacy: true};
										}
										rooms[socket.room].host.ws.send('5:::'+toJson({"name":"msg","args":[{"type":"Event","event":"CustomerJoinedRoom","roomId":data.args[0].roomId,"customerUserId":data.args[0].userId,"customerName":data.args[0].name,"options":{"roomcode":data.args[0].options.roomcode||"","name":data.args[0].options.name||data.args[0].name,"email":data.args[0].options.email||"","phone":data.args[0].options.phone||""}}]}));
										socket.send('5:::'+toJson({"name":"msg","args":[{"type":"Result","action":"JoinRoom","success":true,"initial":false,"roomId":data.args[0].roomId,"joinType":data.args[0].joinType,"userId":data.args[0].userId,"options":{"roomcode":"","name":data.args[0].options.name||data.args[0].name,"email":data.args[0].options.email||"","phone":data.args[0].options.phone||""},"userId":data.args[0].userId,"action":"JoinRoom"}]}));
										if(typeof rooms[socket.room].entities['bc:room'] !== 'undefined'){
											socket.send('5:::'+toJson({"name":"msg","args":[{"type":"Event","event":"RoomBlobChanged","roomId":socket.room,"blob":rooms[socket.room].entities['bc:room'].content.val}]}));
										}else{
											socket.send('5:::'+toJson({"name":"msg","args":[{"type":"Event","event":"RoomBlobChanged","roomId":socket.room,"blob":{}}]}));
										}
										if(typeof rooms[socket.room].entities['bc:customer:'+data.args[0].userId] !== 'undefined'){
											socket.send('5:::'+toJson({"name":"msg","args":[{"type":"Event","event":"CustomerBlobChanged","roomId":socket.room,"blob":rooms[socket.room].entities['bc:customer:'+data.args[0].userId].content.val}]}));
										}else{
											socket.send('5:::'+toJson({"name":"msg","args":[{"type":"Event","event":"CustomerBlobChanged","roomId":socket.room,"blob":{}}]}));
										}
									}
								}
							}else if(data.args[0].joinType == 'audience'){
								if(typeof rooms[data.args[0].roomId] === 'undefined' || !rooms[data.args[0].roomId].body.audienceEnabled){
									socket.send('0::');
									socket.terminate();
								}else{
									socket.room = data.args[0].roomId;
									socket.isAudience = true;
									socket.isConnected = true;
									var profileId = socket.id;
									ws_ids[socket.id] = {room: data.args[0].roomId, id: socket.id, profileId: profileId, ws: socket, userId: data.args[0].userId, isLegacy: true};
									rooms[socket.room].audience.push(socket.id);
									rooms[socket.room].entities['audience'] = {"to":"all","opcode":"audience/pn-counter","content":{"key":"audience","count":rooms[socket.room].audience.length}};
									socket.send('5:::'+toJson({"name":"msg","args":[{"type":"Result","action":"JoinRoom","success":true,"initial":true,"roomId":socket.room,"joinType":"audience","userId":socket.id,"generatedName":data.args[0].name,"options":{"roomcode":"","name":data.args[0].options.name||data.args[0].name,"email":data.args[0].options.email||"","phone":data.args[0].options.phone||""}}]}));
								}
							}
						}
					}else if(data.args[0].action == 'SendMessageToRoomOwner'){
						if(socket.isConnected && !socket.isHost && !socket.isAudience && typeof data.args[0].message !== 'undefined'){
							if(rooms[socket.room].isLegacy){
								rooms[socket.room].host.ws.send('5:::'+toJson({"name":"msg","args":[{"type":"Event","event":"CustomerMessage","roomId":socket.room,"userId":ws_ids[socket.id].userId,"message":data.args[0].message}]}));
							}else{
								rooms[socket.room].host.ws.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"client/send","result":{"to":rooms[socket.room].host.id,"from":ws_ids[socket.id].profileId,"body":data.args[0].message,"userID":ws_ids[socket.id].userId}}));
							}
						}
					}else if(data.args[0].action == 'SendSessionMessage'){
						if(socket.isConnected && !socket.isHost && socket.isAudience && typeof data.args[0].name !== 'undefined' && typeof data.args[0].message !== 'undefined'){
							if(typeof rooms[socket.room].entities[data.args[0].name] !== 'undefined' && data.args[0].message.vote !== 'undefined' && typeof rooms[socket.room].entities[data.args[0].name].content.choices !== 'undefined' && typeof rooms[socket.room].entities[data.args[0].name].content.choices[data.args[0].message.vote] !== 'undefined'){
								rooms[socket.room].entities[data.args[0].name].content.choices[data.args[0].message.vote]++;
								socket.send('5:::'+toJson({"name":"msg","args":[{"action":"SendSessionMessage","module":"vote","name":"","response":{},"success":true,"type":"Result"}]}));
							}
						}
					}
				}
			}
		}
	});
	socket.isConnected = false;
	socket.isHost = false;
	socket.isAudience = false;
	socket.send('1::');
	var ping = setInterval(() => {
		socket.send('2:::');
	}, 10000);
});

wsPlayersServer.on('connection', (socket, request, req) => {
	socket.id = randomId(1000000, 9999999);
	console.log(socket.id+" connected");
	socket.on('error', error => {console.log(socket.id+" error: "+error)});
	socket.on('close', () => {
		console.log(socket.id+" disconnected");
		if(typeof ws_ids[socket.id] === 'object'){
			if(typeof rooms[socket.room] !== 'undefined'){
				rooms[socket.room].clients[ws_ids[socket.id].profileId].connected = false;
				if(rooms[socket.room].isLegacy){
					rooms[socket.room].host.ws.send("5:::"+toJson({"name":"msg","args":[{"type":"Event","event":"CustomerLeftRoom","roomId":socket.room,"customerUserId":""}]}));
				}else{
					rooms[socket.room].host.ws.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"client/disconnected","result":{"id":ws_ids[socket.id].profileId,"role":rooms[socket.room].clients[ws_ids[socket.id].profileId].role}}));
				}
			}
		}
	});
	socket.on('message', message => {
		message = message.toString();
		console.log(socket.id+": "+message);
		if(!isJson(message) || !checkMessage(JSON.parse(message))){
			socket.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"error","result":{"code":1000,"msg":"parse error in ecast protocol"}}));
		}else{
			var data = JSON.parse(message);
			if(data.opcode == 'client/send'){
				if(typeof data.params.to === 'number' && typeof data.params.body !== 'undefined'){
					if(typeof rooms[socket.room].clients[data.params.to] === 'object'){
						if(rooms[socket.room].clients[data.params.to].role == 'host'){
							if(rooms[socket.room].isLegacy){
								rooms[socket.room].host.ws.send('5:::'+toJson({"name":"msg","args":[{"type":"Event","event":"CustomerMessage","roomId":socket.room,"userId":ws_ids[socket.id].userId,"message":data.params.body}]}));
								socket.send(toJson({"pc":rooms[socket.room].pc++,"re":data.seq,"opcode":"ok","result":{}}));
							}else{
								socket.send(toJson({"pc":0,"opcode":"error","result":{"code":2025,"msg":"illegal operation"}}));
							}
						}else{
							socket.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"error","result":{"code":2023,"msg":"permission denied"}}));
						}
					}else{
						socket.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"error","result":{"code":2008,"msg":"there is no connected client having id "+data.params.to}}));
					}
				}else{
					socket.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"error","result":{"code":1000,"msg":"invalid arguments"}}));
				}
			}else{
				socket.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"error","result":{"code":2002,"msg":"invalid opcode"}}));
			}
		}
	});
	var room = req.url.split('/')[4];
	var passwordCorrect = false;
	if(rooms[room].body.passwordRequired){
		if(typeof req.query.password !== 'undefined' && req.query.password == rooms[room].password){
			passwordCorrect = true;
		}
	}else{
		passwordCorrect = true;
	}
	if(!passwordCorrect){
		socket.send(toJson({"pc":rooms[room].pc++,"opcode":"error","result":{"code":2018,"msg":"invalid room password"}}));
		setTimeout(() => {
			socket.close();
			socket.terminate();
		}, 1000);
	}else{
		var duplicate = false;
		var reconnect = false;
		var newSocketId = null;
		socket.room = room;
		Object.keys(rooms[socket.room].clients).forEach((client) => {
			client = rooms[socket.room].clients[client];
			if(client.userId == req.query['user-id']){
				if(client.connected){
					duplicate = true;
				}else{
					reconnect = true;
					newSocketId = client.ws.id;
				}
			}
		});
		if(duplicate){
			socket.close();
			socket.terminate();
		}else{
			if(!reconnect){
				var profileId = Object.keys(rooms[room].clients).length+1;
				rooms[room].clients[profileId] = {ws: socket, role: req.query.role, name: req.query.name, userId: req.query['user-id'], id: profileId, connected: true};
				ws_ids[socket.id] = {room: room, id: socket.id, profileId: profileId, ws: socket, userId: req.query['user-id'], isLegacy: false};
			}else{
				console.log("Client id changed from "+socket.id+" to "+newSocketId);
				socket.id = newSocketId
				var profileId = ws_ids[socket.id].profileId;
				rooms[socket.room].clients[profileId].connected = true;
				rooms[socket.room].clients[profileId].ws = socket;
				rooms[socket.room].clients[profileId].isLegacy = false;
				ws_ids[socket.id].ws = socket;
			}
			var entities = {};
			Object.keys(rooms[socket.room].entities).forEach((entityName) => {
				var entity = rooms[socket.room].entities[entityName];
				if(entity.to == 'all' || (entity.to == 'player' && entity.playerId == profileId)){
					entities[entityName] = [entity.opcode,entity.content,{"locked":false}];
					entities[entityName][1].from = rooms[socket.room].host.id;
					entities[entityName][1].version = 0;
				}
			});
			var here = {};
			Object.keys(rooms[socket.room].clients).forEach((client) => {
				client = rooms[socket.room].clients[client];
				if(client.id != profileId){
					if(client.role == 'player'){
						here[client.id.toString()] = {"id":client.id,"roles":{"player":{"name":client.name}}};
					}else if(client.role == 'moderator'){
						here[client.id.toString()] = {"id":client.id,"roles":{"moderator":{"name":client.name}}};
					}else if(client.role == 'host'){
						here[client.id.toString()] = {"id":client.id,"roles":{"host":{}}};
					}
				}
			});
			socket.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"client/welcome","result":{"id":profileId,"name":req.query.name,"secret":"","reconnect":reconnect,"deviceId":"","entities":entities,"here":here,"profile":{"id":profileId,"roles":{"player":{"name":req.query.name}}}}}));
			if(rooms[socket.room].isLegacy){
				rooms[socket.room].host.ws.send('5:::'+toJson({"name":"msg","args":[{"type":"Event","event":"CustomerJoinedRoom","roomId":socket.room,"customerUserId":req.query['user-id'],"customerName":req.query.name,"options":{"roomcode":"","name":req.query.name,"email":"","phone":""}}]}));
			}else{
				rooms[socket.room].host.ws.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"client/connected","result":{"id":profileId,"userId":req.query['user-id'],"role":req.query.role,"reconnect":reconnect,"profile":{"id":profileId,"roles":{"player":{"name":req.query.name}}}}}));
			}
			if(Object.keys(rooms[socket.room].clients).length >= rooms[socket.room].body.maxPlayers+1){
				rooms[socket.room].body.full = true;
			}
		}
	}
});

wsAudienceServer.on('connection', (socket, request, req) => {
	socket.id = randomId(1000000, 9999999);
	console.log(socket.id+" connected");
	socket.on('error', error => {console.log(socket.id+" error: "+error)});
	socket.on('close', () => {
		console.log(socket.id+" disconnected");
		if(typeof ws_ids[socket.id] === 'object'){
			if(typeof rooms[socket.room] !== 'undefined'){
				rooms[socket.room].audience.splice(rooms[socket.room].audience.indexOf(socket.id), 1);
				rooms[socket.room].entities['audience'] = {"to":"all","opcode":"audience/pn-counter","content":{"key":"audience","count":rooms[socket.room].audience.length}};
				delete ws_ids[socket.id];
			}
		}
	});
	socket.on('message', message => {
		message = message.toString();
		console.log(socket.id+": "+message);
		if(!isJson(message) || !checkMessage(JSON.parse(message))){
			socket.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"error","result":{"code":1000,"msg":"parse error in ecast protocol"}}));
		}else{
			var data = JSON.parse(message);
			if(data.opcode == 'audience/count-group/increment'){
				if(typeof data.params.name === 'string' && typeof data.params.vote !== 'undefined' && typeof data.params.times === 'number'){
					if(typeof rooms[socket.room].entities[data.params.name] !== 'undefined'){
						if(typeof rooms[socket.room].entities[data.params.name].content.choices !== 'undefined' && typeof rooms[socket.room].entities[data.params.name].content.choices[data.params.vote] !== 'undefined'){
							rooms[socket.room].entities[data.params.name].content.choices[data.params.vote]++;
							socket.send(toJson({"pc":rooms[socket.room].pc++,"re":data.seq,"opcode":"ok","result":{}}));
						}else{
							socket.send(toJson({"pc":rooms[socket.room].pc++,"re":data.seq,"opcode":"error","result":{"code":2023,"msg":"permission denied"}}));
						}
					}else{
						socket.send(toJson({"pc":rooms[socket.room].pc++,"re":data.seq,"opcode":"error","result":{"code":1000,"msg":"invalid arguments"}}));
					}
				}else{
					socket.send(toJson({"pc":rooms[socket.room].pc++,"re":data.seq,"opcode":"error","result":{"code":1000,"msg":"invalid arguments"}}));
				}
			}else{
				socket.send(toJson({"pc":rooms[socket.room].pc++,"re":data.seq,"opcode":"error","result":{"code":2002,"msg":"invalid opcode"}}));
			}
		}
	});
	var room = req.url.split('/')[4];
	socket.room = room;
	var profileId = socket.id;
	ws_ids[socket.id] = {room: room, id: socket.id, profileId: profileId, ws: socket, userId: req.query['user-id'], isLegacy: false};
	rooms[socket.room].audience.push(socket.id);
	rooms[socket.room].entities['audience'] = {"to":"all","opcode":"audience/pn-counter","content":{"key":"audience","count":rooms[socket.room].audience.length}};
	var entities = {};
	Object.keys(rooms[socket.room].entities).forEach((entityName) => {
		var entity = rooms[socket.room].entities[entityName];
		if(entity.to == 'all' || entity.to == 'audience'){
			entities[entityName] = [entity.opcode,entity.content,{"locked":false}];
			entities[entityName][1].from = rooms[socket.room].host.id;
			entities[entityName][1].version = 0;
		}
	});
	socket.send(toJson({"pc":rooms[socket.room].pc++,"opcode":"client/welcome","result":{"id":profileId,"name":req.query.name,"secret":"","reconnect":false,"deviceId":"","entities":entities,"here":null,"profile":null}}));
});

app.use(express.json());

app.use((req, res, next) => {
	console.log(req.method, req.originalUrl);
	res.header('Access-Control-Allow-Origin', req.headers.origin||"*");
	res.header('Access-Control-Allow-Credentials', 'true');
	return next();
});

app.get("/room", (req, res) => {
	res.send({"create":true,"server":serverUrl});
});

app.get("/room/:roomId", (req, res) => {
	if(typeof rooms[req.params.roomId] === 'undefined'){
		res.status(404).send({"success":false,"error":"Invalid Room Code"});
	}else{
		if(rooms[req.params.roomId].body.full || rooms[req.params.roomId].body.locked){
			if(rooms[req.params.roomId].body.audienceEnabled){
				var joinAs = 'audience';
			}else if(typeof req.query.userId !== 'undefined' && userInRoom(req.params.roomId, req.query.userId, false)){
				var joinAs = 'player';
			}else{
				var joinAs = 'full';
			}
		}else{
			var joinAs = 'player';
		};
		res.send({"roomid":req.params.roomId,"server":serverUrl,"apptag":rooms[req.params.roomId].body.appTag,"appid":rooms[req.params.roomId].body.appId,"numAudience":rooms[req.params.roomId].audience.length,"audienceEnabled":rooms[req.params.roomId].body.audienceEnabled,"joinAs":joinAs,"requiresPassword":rooms[req.params.roomId].body.passwordRequired});
	}
});

app.get("/socket.io/1", (req, res) => {
	res.send(make('token')+":60:60:websocket,flashsocket");
});

app.post("/accessToken", (req, res) => {
	var body = req.body;
	var missing = [];
	['roomId', 'appId', 'userId'].forEach((element) => {
		if(typeof body[element] === 'undefined'){
			missing.push(element);
		}
	});
	if(missing.length > 0){
		res.status(400).send({"ok":false,"error":"form body missing one or more required parameters: "+missing.join(', ')});
	}else if(typeof rooms[body.roomId] === 'undefined'){
		res.status(400).send({"ok":false,"error":"can't create access token for non-existent room"});
	}else if(body.userId != rooms[body.roomId].userId){
		res.status(401).send({"ok":false,"error":"won't serve access token to non room owner"});
	}else if(!rooms[body.roomId].completed){
		res.sendStatus(500);
	}else{
		res.send({"success":true,"accessToken":rooms[body.roomId].accessToken});
	}
});

app.get("/api/v2/app-configs/:appTag", (req, res) => {
	if(typeof appConfigs[req.params.appTag] === 'undefined'){
		res.status(404).send({"ok":false,"error":"Not Found"});
	}else{
		res.send({"ok":true,"body":{"appTag":req.params.appTag,"appVersion":0,"platform":"Win","settings":appConfigs[req.params.appTag]}});
	}
});

app.post("/api/v2/rooms", (req, res) => {
	var body = req.body;
	if(typeof body.userId === 'undefined'){
		res.status(400).send({"ok":false,"error":"invalid parameters: missing required field userId"});
	}else if(typeof body.appTag === 'undefined'){
		res.status(400).send({"ok":false,"error":"invalid parameters: missing required field appTag"});
	}else if(typeof appTags[body.appTag] === 'undefined'){
		res.status(400).send({"ok":false,"error":"the provided appTag \""+body.appTag+"\" is not a known app tag"});
	}else{
		var room = generateRoom(false);
		rooms[room].userId = body.userId;
		rooms[room].body.appTag = body.appTag;
		rooms[room].body.appId = appTags[body.appTag];
		if(typeof body.audienceEnabled === 'boolean'){
			rooms[room].audienceEnabled = body.audienceEnabled;
			if(body.audienceEnabled){
				rooms[room].entities['audience'] = {"to":"all","opcode":"audience/pn-counter","content":{"key":"audience","count":rooms[room].audience.length}};
			}
		}
		if(typeof body.locale === 'string'){
			rooms[room].locale = body.locale;
		}
		if(typeof body.maxPlayers === 'number' && body.maxPlayers >= maxPlayers[body.appTag]){
			rooms[room].body.maxPlayers = body.maxPlayers;
		}else if(typeof body.maxPlayers === 'number' && body.maxPlayers < minPlayers[body.appTag]){
			rooms[room].body.maxPlayers = minPlayers[body.appTag];
		}else{
			rooms[room].body.maxPlayers = maxPlayers[body.appTag];
		}
		if(typeof body.moderatorPassword === 'string'){
			rooms[room].moderatorPassword = body.moderatorPassword;
			rooms[room].body.moderationEnabled = true;
		}
		if(typeof body.password === 'string'){
			rooms[room].password = body.password;
			rooms[room].body.passwordRequired = true;
		}
		if(typeof body.twitchLocked === 'boolean'){
			rooms[room].body.twitchLocked = body.twitchLocked;
		}
		res.send({"ok":true,"body":{"host":serverUrl,"code":room,"token":rooms[room].accessToken}});
	}
});

app.get("/api/v2/rooms/:roomId", (req, res) => {
	if(typeof rooms[req.params.roomId] === 'undefined'){
		res.status(404).send({"ok":false,"error":"no such room"});
	}else{
		res.send({"ok":true,"body":rooms[req.params.roomId].body});
	}
});

app.post("/artifact", (req, res) => {
	res.send({"success":true,"artifactId":"0","categoryId":req.body.categoryId,"rootId": "jbg-blobcast-artifacts"}); // it's a temporary placeholder
});

const server = https.createServer(sslCerts, app);
const server2 = https.createServer(sslCerts, app);

server.on('upgrade', (request, socket, head) => {
	upgradeWs(request, socket, head);
});
server2.on('upgrade', (request, socket, head) => {
	upgradeWs(request, socket, head);
});

// DO NOT CHANGE PORTS!!!
server.listen(443, '0.0.0.0', () => {
	console.log('Server listening at port 443');
});
server2.listen(38203, '0.0.0.0', () => {
	console.log('Server listening at port 38203');
});
