var Web3 = require('web3');
var web3 = require('web3');
const stream = require('stream');
const crypto = require('crypto-browserify');
const browserify = require('https-browserify');
const browserify2 =  require('os-browserify');
var Web3 = require('web3');
var web3 = require('web3-eth');
const crypto = require('crypto-browserify');

const stream = require('stream');
const browserify = require('https-browserify');
const browserify2 =  require('os-browserify');
const browserify3 =  require('https-browserify');


window.addEventListener('load', function () {
            if (typeof web3 !== 'undefined') {
                console.log('Web3 Detected!! ' + web3.currentProvider.constructor.name)
                window.web3 = new Web3(web3.currentProvider);
            } else {
                console.log('No Web3 Detected... using HTTP Provider')
                window.web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/<APIKEY>"));
            }
})

function getBalance() {
            var address, wei, balance
            address = document.getElementById("address").value
            try {
                web3.eth.getBalance(address, function (error, wei) {
                    if (!error) {
                        var balance = web3.fromWei(wei, 'ether');
                        document.getElementById("output").innerHTML = balance + " ETH";
                    }
                });
            } catch (err) {
                document.getElementById("output").innerHTML = err;
            }
}

function getMyContract() {
  //var contractAddress
  //contractAddress = document.getElementById("contractAddress").value

var abi = [
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    }
  ];


//var MyContract = web3.eth.contract(abi);

// initiate contract for an address
//var myContractInstance = MyContract .at('0x8E132c9025aF25c85CbBf867988769AF3AB4b759');

var contractAddress = '0x8E132c9025aF25c85CbBf867988769AF3AB4b759'

var MyNewContract = web3.eth.contract(abi).at(contractAddress)  
  
// call constant function (synchronous way)
//var owner = myContractInstance .owner.call();

//  myContractInstance.methods.owner().call().then(console.log);
//console.log("owner="+owner);  
//console.log(myContractInstance)                                        
document.getElementById("contractOutput").innerHTML = "hi " //+ owner
//console.log(MyNewContract)
}