
var recursivePrime = function ( num ) {

    // var maxDivsor = Math.sqrt(num);
    if (num === 0) return '';
    if (num === 1) return 1;

    console.log('starting....');

    //recursive anonymous function
    //
    var lowestDivisor = function (number, divisor) {
        if ((number % divisor) === 0)
            return divisor;
        else
            console.log('recursive call: divisor = ' + divisor);
            return lowestDivisor(number, divisor + 1);
    };

    return lowestDivisor(num, 2);
};

process.argv.slice(2).forEach(function (val, index, array) {
    valInt = parseInt(val, 10);
    console.log( "Value: " + val + " => " + recursivePrime(valInt));
});