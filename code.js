// Create the functions
// const kb = (mb) =>{
//     mb = prompt("Enter mb")
//     console.log(mb*1024)}

// // Export the module 
// module.exports = mb

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