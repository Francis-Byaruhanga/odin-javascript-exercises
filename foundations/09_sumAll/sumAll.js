const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';

    // Determine range regardless of order
    const min = Math.min(a, b);
    const max = Math.max(a, b);
};

// Do not edit below this line
module.exports = sumAll;
