

var    transact =  new Object();

    transact.module = 'account'
    transact.action = 'balance'
    transact.tag = 'latest'
    transact.apikey = 'AA717KVSVAY6NMYGDJ5KSQJVF8MCDKEBHZ'
    transact.address = '0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae'
    



var module = 'account'
var action = 'balance'
var  tag = 'latest'
var apikey = 'AA717KVSVAY6NMYGDJ5KSQJVF8MCDKEBHZ'
var address = '0x459bb13877ba711e849f72d3316dec87e42de32d';

console.log(transact);


var url ='https://api.etherscan.io/api?module=' + module + '&action=' + action + '&address=' + address + '&tag=' + tag  + '&apikey=' + apikey;


console.log(url);


 /*

function send_request(url) {
        return new Promise((resolve, reject) => {
            request(url, (err, res, body) => {
                if (err)
                    reject(err)
                resolve(body)
            })
        })

    }} */