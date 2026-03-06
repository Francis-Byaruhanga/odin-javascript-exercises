const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';

    // Determine range regardless of order
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    // Loop and accumulate
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
