//
// use node console to execute
// the function will calculate the prime for each argument
//
// $ node is_prime.js 71 13 497


var Prime = function ( num ) {
    //num = parseInt(number);
    var maxDivsor = Math.sqrt(num);
    if (num === 0) return '';
    if (num === 1) return 1;

    console.log('starting....');
    console.log('maximum divisor is ' + maxDivsor + '; for ' + num);

    for (divisor = 2; divisor <= maxDivsor; divisor++) {
        console.log('trying divisor: ' + divisor + '; ' + 'mod = ' + num % divisor);
        if ((num % divisor) === 0) {
            console.log('result: ' + num);
            result = divisor;
            break;
        }
    }

    if (typeof result === 'undefined')
        return num;
    else
        return result;
};

process.argv.slice(2).forEach(function (val, index, array) {
    valInt = parseInt(val, 10);
    console.log( "Value: " + val + " => " + Prime(valInt));
});