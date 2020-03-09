const fs = require('fs');
 script = fs.readFile(__filename, (err, data) => {
    if(err){
        throw err;
    } else{
        process.stdout.write(data);
        process.stdout.write('prompt >');

    }
})

module.exports = script;