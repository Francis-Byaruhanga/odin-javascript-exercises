const palindromes = function (str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the cleaned string
    const reversed = cleaned.split('').reverse().join('');

    // Compare the cleaned string with its reverse
    return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
