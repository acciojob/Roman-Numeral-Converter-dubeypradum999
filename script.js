function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let roman = '';

    // Iterate over the Roman numeral map
    for (const { value, numeral } of romanMap) {
        while (num >= value) {
            roman += numeral;  
            num -= value;      
        }
    }

    return roman; 
}
 console.log(convertToRoman(14));
console.log(convertToRoman(798));
