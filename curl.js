const request = require('request');
let newReq = request('http://google.com/', function(err, response, body){
    if(err){
        throw err;
    }else{
        process.stdout.write(body)
        process.stdout.write('\nprompt >');
    }
});

module.exports = newReq;