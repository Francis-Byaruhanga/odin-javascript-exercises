const palindromes = function (str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the cleaned string
    const reversedString = cleanedString.split('').reverse().join('');

    // Compare the cleaned string with its reverse
    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
