const palindromes = function () {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the cleaned string
    const reversed = cleaned.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
