function intToRoman(num) {
    // Define a mapping of Roman numerals and their integer values
    const romanMap = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    // Initialize the result string
    let roman = '';

    // Iterate over the Roman numeral map
    for (const { value, numeral } of romanMap) {
        while (num >= value) {
            roman += numeral;  // Append the Roman numeral to the result
            num -= value;      // Subtract the corresponding value from the number
        }
    }

    return roman; // Return the final Roman numeral string
}

// Test cases
console.log(intToRoman(14));    // Output: XIV
console.log(intToRoman(798));   // Output: DCCXCVIII
