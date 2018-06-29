

var globl = 360

const pi = 3.14159 //Math.PI

function declarations () {
    let within = 'scope confined to function'
    console.log('printing within:', within)
    console.log('printing globl:', globl)
}


function override_global () {
    let globl = 'new globl value'
    console.log('printing let globl', globl)
}
