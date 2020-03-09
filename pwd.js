function pwdCom(){
    cmd = __dirname;
    process.stdout.write(cmd);
    process.stdout.write('\nprompt >');
}   
module.exports = pwdCom();