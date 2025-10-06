//Q1.Sum of arrays :

function sumOfArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
// Example
let arr1 = [2, 5, 8, 10];
console.log("Sum:", sumOfArray(arr1)); // Output: 25

//Q2.Odd or Even :

function countOddEven(arr) {
    let oddCount = 0, evenCount = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    return { odd: oddCount, even: evenCount };
}

// Example
let arr2 = [1, 2, 3, 4, 5, 6];
let result = countOddEven(arr2);
console.log("Odd:", result.odd, "Even:", result.even);
// Output: Odd: 3 Even: 3

//Q3. Capitalize the first letter of each word in a string :

function capitalizeWords(str) {
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Example
let str = "hello world from javascript";
console.log(capitalizeWords(str)); 
// Output: "Hello World From Javascript"

