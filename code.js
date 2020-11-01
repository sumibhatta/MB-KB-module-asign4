const kb = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

kb.question(`Enter MB: `, (mb) => {
    var kilob = mb * 1024;
    console.log(` ${mb}MB = ${kilob}KB`);
    kb.close();
})

module.exports = kb
