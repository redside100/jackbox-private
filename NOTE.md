# Workaround

You need to first connect to the IP through HTTPS and proceed to let Chrome trust it

# Generate certificate & key

`openssl req -new -newkey rsa:4096 -x509 -sha256 -days 365 -nodes -out localhost.crt -keyout localhost.key`

# Running

`npm run startv1`