
/*
I use debug instead of console.log because console does not exist in 
the Mac JSC engine
*/

var globl = 360;

const pi = 3.14159; //Math.PI

function declarations () {
    let within = 'scope confined to function';
    debug('printing within:');
    debug(within);
    debug('printing globl:');
    debug(globl);
};


function override_var () {
    let globl = 'new globl value';
    debug('printing let globl');
    debug(globl);
};

function override_const () {
    const pi = 2.718;
    debug(pi);
}

function loops_with_let () {
    debug('first loop (let)');
    var i = 2
    for (let i = 0; i < 10; i++){ //let increments to 9, but it is block scoped
        debug(i);
    };
    debug('second loop (var)'); //var is not block scoped
    for (i; i < 6; i++) { 
        debug(i);
    };
    debug('third loop (var)');
    for (i; i < 10; i++) {
        debug(i);
    }
};
