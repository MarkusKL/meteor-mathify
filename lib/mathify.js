
spawn = Npm.require('cross-spawn');
path = Npm.require('path');

check = function(str1, str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string")
        return false;
    command = spawn.sync('assets\\packages\\markuskl_mathify\\Main.exe',[],{input: "a\na\n"});
    return command.stdout[0] == 84
    /*
    command.stdout.on('data', function(data){
        console.log(data)
    })
    command.on('close', function(code){
        console.log("exit with code: "+code)
    })
    command.on('error', function(err){
        console.log("failed"+err)
    })
    command.stdin.write('a\n');
    command.stdin.write('a\n');
    */
}


/// Exported functions ///
Mathify = {};
Mathify.check = check
