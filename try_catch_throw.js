

function isPositive(a) {
    if (a > 0) {
        return "YES";
    } else if (a === 0) {
        throw new Error("Zero Error");
    } else {
        throw new Error("Negative Error");
    }
    
}


function numberType(n) {
    try {
        isPositive(n);
    }
    catch (e) {
        console.log(e);
    }

}


function add_numbers_from_strings(x, y) {
    try {
        var x = parseFloat(x);
        var y = parseFloat(y);
        return x + y;
    }
    catch (e) {
        console.log(e.message);
    }
    finally {
        console.log('Moving on regardless of try/catch result');
    }
}