# Avalanche Block Explorer
The Avalanche Block Explorer is built on Vue.js 3 and is compatible with Node.js 16.

The Block Explorer uses <a href="snowtrace.io">Snowtrace`s Web API</a> for taking data from Avalanche blockchain.

## To start the desktop app use:
```
bash start-desktop-app.sh
```
## To start the web version of the explorer use:
```
bash start-web-app.sh
```

## To build the desktop application use:
```
npm run electron:build
```
The created app file will be at `./dist_electron`

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
