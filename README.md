# Johnbox

A private server implementation in NodeJS. Ripped and hacked together from various other git repos.

## Usage

1. `npm install`
2. Generate a TLS certificate for the web server to use (replace localhost.crt and localhost.key)
3. `npm run startv1`
4. Redirect the game to connect to your server. `jbg.config.jet` in each minigame folder has a `serverUrl` parameter.
5. Web client available at http://localhost:8080/, or any of the outputted internal IPs

## Workaround for SSL issues

Since the web client is served over HTTP and fetches with HTTPS, it will cause issues if you're using Chrome.

To solve this, first visit `https://localhost/` (or `https://{internal-ip}/`) and choose `proceed (unsafe)`. Then the web client will work normally.