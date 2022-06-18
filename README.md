# Code Wars exercises
This is an array (get it?) of exercises done on [Code Wars](https://www.codewars.com).

Source: [Robert Ableson](https://robertableson.com/)

## Even or Odd
Date: june 8 2022

### Instructions
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

### Submitted solution
```JavaScript
function even_or_odd(number){
    return number % 2 === 0 ? 'Even' : 'Odd';
}
```

### Optimized/alternative solutions
#### #1
```JavaScript
function even_or_odd(number){
    return number % 2 ? 'Odd' : 'Even'
}
```
#### #2
```JavaScript
const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';
```


## Sum Arrays
Date: june 8 2022 

### Instructions
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

### Submitted solution
```JavaScript
function sum(numbers){
    "use strict";
    // Notes
    // - return sum of all numbers (int or float) in an array
    // - if array has no numbers, return 0

    let sum = 0;

    numbers.forEach(num => {
    if(typeof num === 'number')
        sum = sum + num;
    });

    return typeof sum === 'number' ? sum : 0;
}
```


## Opposites Attract
Date: june 14 2022 

### Instructions
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

### Submitted solution
```JavaScript
function lovefunc(flower1, flower2){
    // Notes
    // - If given 2 numbers, f1 and f2, if one of them 
    //   is odd AND one of them is even, return true
    // - If not, return false
    // - Assuming only numbers will be passed as params

    return flower1 % 2 !== flower2 % 2;
}
```


## Fake Binary
Date: june 14 2022 

### Instructions
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

### Submitted solution
```JavaScript
function fakeBin(x){
    // Notes
    // - In a string of digits, if digit < 5, change it for a 0
    // - If digit >= 5, change for 1
    // - Return resulting string
    // - Assuming string is never empty and only contains positive digits

    for(let i = 0; i < x.length; i++){
        const newChar = Number(x[i]) < 5 ? '0' : '1';

        x = x.substring(0, i) + newChar + x.substring(i + 1);
    }

    return x;
}
```

### Optimized/alternative solutions
#### #1
```JavaScript
function fakeBin(x){
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
```


## Sum Mixed Array
Date: june 15 2022 

### Instructions
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

### Submitted solution
```JavaScript
function sumMix(x){
    // Notes 
    // Given array of ints and chars
    // Add them up and return 
    
    var total = 0;
    
    for(let i = 0; i < x.length; i++) {
        total += Number(x[i]);
    }
    return total;
}
```


## Are You Playing Banjo?
Date: june 16 2022 

### Instructions
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

### Submitted solution
```JavaScript
function areYouPlayingBanjo(name){
    // Notes
    // If "name" param starts with any case "R" or "r", return 'name + " plays banjo"'
    // If "name" param starts with any other letter than "r/R", return 'name + " does not play banjo"'

    return name[0].toLowerCase() === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;
}
```


## Sentence Smash
Date: june 16 2022 

### Instructions
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

### Submitted solution
```JavaScript
function smash(words){
    // Notes
    // Take "words" array of words and create a string by concatenating them all
    // Add spaces in between each word, no punctuation or anything

    let sentence = '';

    words.map(word => {
        sentence += word + ' ';
    });  

    return sentence.slice(0, -1);
};
```

### Optimized/alternative solutions
#### #1
```JavaScript
const smash = words => words.join(' ');
```


## Returning Strings
Date: june 17 2022 

### Instructions
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

### Submitted solution
```JavaScript
function greet(name){
    return `Hello, ${name} how are you doing today?`;
}
```


## Grasshopper - Grade book
Date: june 17 2022 

### Instructions
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

### Submitted solution
```JavaScript
function getGrade(s1, s2, s3){
    // Notes
    // Get average of s1, s2 and s3
    // If average between 90 and 100 inclusively, return 'A'
    // If average between 80 incl. and 90 excl., return 'B'
    // If average between 70 incl. and 80 excl., return 'C'
    // If average between 60 incl. and 70 excl., return 'D'
    // If average below 60 excl., return 'F'
    // Assuming all params are positive numbers

    const average = (s1 + s2 + s3) / 3;
    let grade = 'F';

    if(average >= 90) grade = 'A';
    else if(average >= 80) grade = 'B';
    else if(average >= 70) grade = 'C';
    else if(average >= 60) grade = 'D';

    return grade;
}
```


## Reversed Strings
Date: june 17 2022 

### Instructions
Complete the solution so that it reverses the string passed into it.

### Submitted solution
```JavaScript
function solution(str){
    return str.split('').reverse().join('');
}
```