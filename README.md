# Web3.0 Decentralized Application Prototypes


![Alt text](https://etherscan.io/token/images/fox_32.png)

##### It is intended to be used by coders, developers technically-skilled traders, data-scientists and financial analysts for building trading algorithms 

![Alt text](https://etherscan.io/token/images/umavotingtokenv1_32.png) 

## Table of Contents

- [Background](#background)
- [Frameworks and API](#Frameworks-and-API)
- [Example](#example)
- [License](#license)
- [Team](#Team)

## Background



### What is a DAPP or Decenterlized App?

####   "web3 applications either run on blockchains, decentralized networks of many peer to peer nodes (servers), or a combination of the two that forms a cryptoeconomic protocol. These apps are often referred to as dapps (decentralized apps), and you will see that term used often in the web3 space" -Free Code Camp


## Frameworks and API
1. [Metamask](https://metamask.io/): 
A browser extension that allows you to interact with the Ethereum blockchain.
3. [Ethereum](https://ethereum.org/): 
A blockchain that allows you to interact with the Ethereum blockchain.
4. [Solidity](https://solidity.readthedocs.io/): 
A programming language that allows you to interact with the Ethereum blockchain.
5. [web3.eth.js](https://web3js.readthedocs.io/):
A JavaScript library that allows you to interact with the Ethereum blockchain.


## Example

##### The following Javascript code will invoke thhe Metamask extension and then interact with the Ethereum blockchain.

```// This function detects most providers injected at window.ethereum
import detectEthereumProvider from '@metamask/detect-provider';
const provider = await detectEthereumProvider();
if (provider) {
  startApp(provider); // initialize your app
} else {
  console.log('Please install MetaMask!');
}
```
##### Sample Solidity Contract Boilerplate Code
```// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

contract HelloWorld {
    function helloWorld() external pure returns (string memory) {
        return "Hello, World!";
    }
}
```
##### Web3-Eh.js Javascript code that allows you to interact with an Ethereum blockchain and Ethereum smart contracts
```var Eth = require('web3-eth');

// "Eth.providers.givenProvider" will be set if in an Ethereum supported browser.
var eth = new Eth(Eth.givenProvider || 'ws://some.local-or-remote.node:8546');


// or using the web3 umbrella package

var Web3 = require('web3');
var web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

// -> web3.eth
```

## License
The  [MIT License](https://choosealicense.com/licenses/mit/) governs the use of this software.
## Team
[Murtadhha Marzouq](https://github.com/MurtadhaM)

[Miguel Morel](https://github.com/mmorel1)

[Basher Mansor](https://github.com/wounded990)


