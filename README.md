# Johnbox

A private server implementation in NodeJS for modern Jackbox Games services (Ecast / API v2).

Currently, this server only supports hosting 1 room at a time.

**This project is not related to or endorsed by Jackbox Games, Inc.**

## Supported Software

### Tested known working games:

* The Jackbox Party Pack 7
    * Quiplash 3
    * Champ'd Up
    * Blather Round
    * Talking Points
    * The Devils and the Details (requires Audience explicitly disabled)
* The Jackbox Party Pack 8
    * Job Job (requires Audience explicitly disabled)
    * Drawful Animate
* Drawful 2 International

### Tested known non-working games:

* Quiplash 2 InterLASHional
    * Quiplash 2 InterLASHional only uses API v2 for gathering server info. Rooms are still handled via blobcast.
* The Jackbox Party Pack 6
    * All games in Party Pack 6 only use API v2 for gathering server info. Rooms are still handled via blobcast.
* All games prior use Blobcast / API v1 (likely not the true names), which uses socketio for WebSockets and is currently not supported. 

## Unimplemented features

* Object security
* Multiple rooms
* Client reconnection
* Room passcodes
* Audiences
* Moderation features
* UGC (user-made episodes, etc)
* Blobcast / API v1(? what is the real name)

## Usage

1. `npm install`
2. Generate a TLS certificate for the web server to use (replace localhost.crt and localhost.key)
3. `npm run startv1`
4. Redirect the game to connect to your server. `jbg.config.jet` in each minigame folder has a `serverUrl` parameter.
