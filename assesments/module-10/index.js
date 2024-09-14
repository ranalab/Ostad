// 1. Diff between a, b
const calculateDifference = (a, b) => a - b;
    
console.log(
    calculateDifference(20, 5)
);


// 2. Odd or even detector
const isOdd = (x) => (x % 2 != 0) ? `${x} is Odd` : `${x} is even`;

console.log(
    isOdd(9)
);

// 3. smallest item of an array
const findMin = (...numbers) => Math.min(...numbers);

console.log(
    findMin(3,5,1,9,2)
);

//4. Return array of even numbers from an array
const filterEvenNumbers = (numbers) =>  numbers.filter(num => num % 2 == 0);

console.log(
    filterEvenNumbers([1, 2, 3, 4, 5, 6])
)


// 5. Sorting descending order of an Array
const sortArrayDescending = (numbers) => [...numbers].sort((a, b) => b -a);

console.log(
    sortArrayDescending([5, 3, 9, 1, 6])
)

// 6. Lowercase first letter of a string
const lowercaseFirstLetter = (str) => str.charAt(0).toLowerCase() + str.slice(1);

console.log(
    lowercaseFirstLetter("Hello World")
)


// 7. Filter vowels from the string
const countVowels = (str) => {
    const vowelRegex = /[aeiouAEIOU]/g;

    const matches = str.match(vowelRegex);

    return matches ? matches.length : 0;
}

console.log(
    countVowels("Godi tumi kar?")
)


// 8. Average of numbers of an array
const findAverage = (numbers) => {
    const sum = numbers.reduce((acc,num) => acc + num, 0);

    return numbers.length > 0 ? sum / numbers.length : 0;
}

console.log(
    findAverage([4,8,15,20,23,42])
);