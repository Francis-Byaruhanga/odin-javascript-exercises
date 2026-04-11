const fibonacci = function(n) {
    // Handle edge cases
    if (n <= 0) return 0;
    if (n === 1 || n === 2) return 1;

    // Start with the first two numbers
    let previousNumber = 1;
    let currentNumber = 1;

    // Iterate from position 3 to n
    for ( let i = 3; i <= n; i++) {
        let nextNumber = previousNumber + currentNumber;
        previousNumber = currentNumber;
        currentNumber = nextNumber;
    }

    return currentNumber;
};

// Do not edit below this line
module.exports = fibonacci;
