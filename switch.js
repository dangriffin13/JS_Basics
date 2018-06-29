function getLetter(s) {
    let letter;
    var c = s[0]
    var setA = new Set(['a','e','i','o','u'])
    var setB = new Set(['b','c','d','f','g'])
    var setC = new Set(['h','j','k','l','m'])

    switch (true) {
        case setA.has(c):
            letter = 'A';
            break;
        case setB.has(c):
            letter = 'B';
            break;
        case setC.has(c):
            letter = 'C';
            break;
        default:
            letter = 'D';
            break;
    }
    
    return letter;
}