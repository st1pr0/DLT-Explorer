# Avalanche Block Explorer
The Avalanche Block Explorer is built on Vue.js 3 and is compatible with Node.js 16.

The Block Explorer uses <a href="snowtrace.io">Snowtrace`s Web API</a> for taking data from Avalanche blockchain.

This a tool that lets everyone explore the Avalanche C-chain by entering in a search field either the transaction hash, the block hash or the wallet. The information on the page is dynamically changed according to what is entered in the search field.

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
The created app file will be at `./dist_electron` and it's extenstention will be .exe

### Lints and fixes files
```
npm run lint
```

## How does it work?
It works by fetching the Snowtrace Web API with the correct request and API key. The architecture is built with Vue components, which are the header, the footer and the transaction. 

The header consists of a text field "DLT Explorer" and "By Quanterall".

The footer has information about the copyright and the current year.

Both the footer and the header are static pages that don't change depending on the input, unlike the transaction component. The transaction component is dynamically changed according to what is written in it's search field. There is a dynamically generated table where everything that is returned from the API gets added to the table. The DLT Explorer supports: 
1. The Transaction: 
    - When in the search field is entered the transaction hash, we get information about the status of the transaction, the block number, from whom it's send to who and the value sent. There is some more extra information.
2. The Client:
    - When the wallet hash is entered in the search field, the program returns how much money the client has in their wallet.
3. The Block:
    - If the block number is written in the search field, we get information about the block, which consists of information about the block timestamp, the block miner and the block reward.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
