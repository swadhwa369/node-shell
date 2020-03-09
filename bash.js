process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
    let cmd = data.toString().trim();
    if(cmd === 'pwd'){
        const pwd = require('./pwd.js');
        pwd;
    }
    else if(cmd === 'ls'){
        const ls = require('./ls.js');
        ls;
    }
    else if(cmd === 'cat'){
        const cat = require('./cat.js');
        cat;
    }
    else if(cmd === 'curl'){
        const curl = require('./curl.js');
        curl;
    }
    else{
        process.stdout.write('You typed: ' + cmd);
        process.stdout.write('\nprompt >');
    }
})

const done = (output) =>{
    
}