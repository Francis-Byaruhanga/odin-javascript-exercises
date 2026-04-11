const fibonacci = function(n) {

    // Convert input to a number if its a string
    const num = Number(n);

    // Handle negative numbers
    if (num < 0) {
        return "OOPS"
    }

    // Handle edge cases
    if (num <= 0) return 0;
    if (num === 1 || num === 2) return 1;

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
