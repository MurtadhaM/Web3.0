



𝘀𝘁𝗿𝗶𝗻𝗴   module action , tag , boolean, apikey
𝘀𝘁𝗿𝗿𝗶𝗻𝗴 url ="'https://api.etherscan.io/api?module=' + module + '&action=' + action + '&address=' + address + '&tag=' +  + '&apikey=' + apikey"




𝗰𝗼𝗻𝘀𝘁 𝘀𝗲𝗻𝗱_𝗺𝗼𝗻𝗲𝘁𝘆 = (address, module  )      =>  ({
 
            𝘀𝗲𝗻𝗱_𝗺𝗼𝗻𝗲𝘁𝘆   
     
     
}



const send_request = (url) => {
    return new Promise((resolve, reject) => {
        request(url, (err, res, body) => {
            if (err) reject(err);
            resolve(body);
        });
    });

}}