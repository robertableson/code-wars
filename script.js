//# Code Wars exercises
//This is an array (get it?) of exercises done on [Code Wars](https://www.codewars.com).

//Source: [Robert Ableson](https://robertableson.com/)


//## Even or Odd

//### Instructions
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//### Submitted solution

function even_or_odd(number){
    return number % 2 === 0 ? 'Even' : 'Odd';
}

//### Optimized/alternative solutions
//#### #1
function even_or_odd(number){
    return number % 2 ? 'Odd' : 'Even'
}

//#### #2
const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';


## Sum Arrays

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

### Instructions
Complete the solution so that it reverses the string passed into it.

### Submitted solution
```JavaScript
function solution(str){
    return str.split('').reverse().join('');
}
```


## Convert number to reversed array of digits

### Instructions
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

### Submitted solution
```JavaScript
function digitize(n) {
  let nToString = n.toString();
  
  // Split the string into array of individual chars, 
  // reverse and for every char, call the Number() function, 
  // which effectively type casts back to a number
  return nToString.split('').reverse().map(Number);
}
```


## Descending Order

### Instructions
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

### Submitted solution
```JavaScript
function descendingOrder(n){
  // Notes
  // n is always a positive int
  // Rearrange number in single digits from big to small
  // (Create the biggest number)
  
  //reverse() reverses the order of an array
  return parseInt(String(n).split('').sort().reverse().join('')); 
} 
```


## Square Every Digit

### Instructions
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

### Submitted solution
```JavaScript
function squareDigits(num){
  // Notes
  // In a number, square every digit and concat them
  
  let newNumInString = '';
  
  String(num).split('').map((digit) => {
    newNumInString += String(Number(digit) ** 2);
  });
  
  return Number(newNumInString);
}
```


## Convert a Boolean to a String

### Instructions
Implement a function which convert the given boolean value into its string representation.

### Submitted solution
```JavaScript
function booleanToString(b){
  return b ? 'true' : 'false';
}
```

### Alternative solution
```JavaScript
function booleanToString(b){
  return b.toString();
}
```


## You only need one - Beginner

### Instructions
You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

### Submitted solution
```JavaScript
function check(a, x) {
  return a.includes(x);
}
```


## Square(n) Sum

### Instructions
Complete the square sum function so that it squares each number passed into it and then sums the results together.

### Submitted solution
```JavaScript
function squareSum(numbers){
  const square = number => number * number;
  const reducer = (acc, cur) => acc + cur;
  
  return Array.from(numbers, square).reduce(reducer, 0)
}
```


## List Filtering

### Instructions
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

### Submitted solution
```JavaScript
function filter_list(l) {
  return l.filter(item => Number.isInteger(item));  
}
```


## Return Negative

### Instructions
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

### Submitted solution
```JavaScript
function makeNegative(num) {
  return num <= 0 ? num : num * -1;
}
```

### Alternative solution
```JavaScript
function makeNegative(num) {
  return -Math.abs(num);
}
```


## Is he gonna survive?

### Instructions
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

### Submitted solution
```JavaScript
function hero(bullets, dragons){
  return (bullets / dragons) >= 2 ? true : false;
}
```


## Reverse words

### Instructions
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

### Submitted solution
```JavaScript
function reverseWords(str) {
  // 1. Split the sentence at spaces
  // 2. Reverse every word in array
  // 3. Re-format into a sentence
  
  const sentenceToArray = str.split(' ');
  let sentenceReversed = '';
    
  sentenceToArray.map((word) => {
    const wordReversed = word.split('').reverse().join('');
    
    sentenceReversed += `${wordReversed} `;
  });
  
  
  // Remove last char (empty space)
  sentenceReversed = sentenceReversed.slice(0, -1);
  
  return sentenceReversed;  
}
```


## Jaden Casing Strings

### Instructions
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

### Submitted solution
```JavaScript
String.prototype.toJadenCase = function () {
  // Make sentence lowercase
  // Uppercase the first letter of each word
  
  const sentence = this;  
  const sentenceWordsArray = sentence.toLowerCase().split(' ');
  let formattedSentence = '';
  
  formattedSentence = sentenceWordsArray.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
  
  return formattedSentence;
};
```


## Sum of the first nth term of Series

### Instructions
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

### Submitted solution
```JavaScript
function SeriesSum(n){
  let result = 0;
  let denominatorDiff = 1;
  
  for(let i = 0; i < n; i++){
    if(i === 0){
      result = 1;
    }else{
      denominatorDiff += 3;
      result = result + (1 / denominatorDiff);
    }
  }
  
  return result.toFixed(2);
};
```


## Number of People in the Bus

### Instructions
There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.

### Submitted solution
```JavaScript
var number = function(busStops){
  let totalPeople = 0;
  
  busStops.map((arrOnOff) => {
    totalPeople = totalPeople + arrOnOff[0] - arrOnOff[1]; 
  });
  
  return totalPeople;
}
```

### Alternative solution
```JavaScript
const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
```


## Is this a triangle?

### Instructions
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).

### Submitted solution
```JavaScript
function isTriangle(a,b,c){
  // Notes
  // To know if it is a triangle, we can use the use the triangle inequality theorem,
  // which states that the sum of 2 sides should always be greater than the 3rd
  
  return a + b > c && b + c > a && a + c > b;
}
```


## You Can't Code Under Pressure #1

### Instructions
Code as fast as you can! You need to double the integer and return it.

### Submitted solution
```JavaScript
function doubleInteger(i) {
  return i * 2;
}
```


## The highest profit wins!

### Instructions
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

### Submitted solution
```JavaScript
function minMax(arr){
  let minMax = [Math.min(...arr), Math.max(...arr)];
  
  return minMax;
}
```


## Grasshopper - Summation

### Instructions
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

### Submitted solution
```JavaScript
var summation = function (num) {
  let total = 0;
  
  for(let i = 1; i <= num; i++){
    total += i;
  }
  
  return total;
}
```

### Alternative solution
```JavaScript
const summation = n => n * (n + 1) / 2;
```


## Printer Errors

### Instructions
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"

### Submitted solution
```JavaScript
function printerError(s) {
  // Notes
  // ascii code of a = 97, m = 109
  // 1. Loop over chars and make sure each char is between ascii numbers
  // 2. If not, count for numerator
  
  let numerator = 0;
  
  for(let i = 0; i < s.length; i++){
    s[i].charCodeAt(0) < 97 || s[i].charCodeAt(0) > 109 ? numerator++ : null;
  }
    
    return `${numerator}/${s.length}`  
}
```


## Sum without highest and lowest number

### Instructions
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

### Submitted solution
```JavaScript
function sumArray(array) {
  // Notes
  // - Return sum - min - max
  // - Validate input
  
  // Input validation: exists, is array and is array with >2 things in it
  if(!array || !Array.isArray(array) || 
     (Array.isArray(array) && array.length <= 1)){ 
    return 0;
  }
  
  let min = array[0];
  let max = min;
  let total = 0;
  
  for(let i = 0; i < array.length; i++){    
    if(array[i] < min) min = array[i];
    if(array[i] > max) max = array[i];
    
    total += array[i];
  }
  
  return total - min - max;
}
```

### Alternative solution
```JavaScript
sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0
```


## Binary Addition

### Instructions
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

### Submitted solution
```JavaScript
function addBinary(a,b) {
  return (a + b).toString(2);
}
```


## Rock Paper Scissors!

### Instructions
Let's play! You have to return which player won! In case of a draw return Draw!.

### Submitted solution
```JavaScript
const rps = (p1, p2) => {
  let msg = 'Player 1 won!';
  
  if(p1 === p2){
    msg = 'Draw!';
  } 
  else if(p2 === 'rock' && p1 === 'scissors' ||
    p2 === 'paper' && p1 === 'rock' ||
     p2 === 'scissors' && p1 === 'paper'){
    msg = 'Player 2 won!';
  }
  
  return msg;
};
```

### Alternative solution
```JavaScript
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};
```


## Remove First and Last Character

### Instructions
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

### Submitted solution
```JavaScript
function removeChar(str){
  return str.slice(1, -1);
};
```


## Basic Mathematical Operations

### Instructions
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

### Submitted solution
```JavaScript
function basicOp(operation, value1, value2) {
  let result = 0;
  
  if( operation === '+' ) {
    result = value1 + value2;
  } else if ( operation === '-' ) {
    result = value1 - value2;
  } else if ( operation === '*' ) {
    result = value1 * value2;
  } else if ( operation === '/' ) {
    result = value1 / value2;
  }
  
  return result;
}
```

### Alternative solution
```JavaScript
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 'Operation must be one of + - * /';
    }
}
```

```JavaScript
function basicOp(o, a, b) {
  return eval(a+o+b);
}
```


## Beginner - Lost Without a Map

### Instructions
Given an array of integers, return a new array with each value doubled.

### Submitted solution
```JavaScript
function maps(x){
  return x.map( num => num * 2 );
}
```


## Convert boolean values to strings 'Yes' or 'No'.

### Instructions
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

### Submitted solution
```JavaScript
function boolToWord( bool ){
  return bool ? 'Yes' : 'No';
}
```


## Detect Pangram

### Instructions
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

### Submitted solution
```JavaScript
function isPangram(string){
  const allLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const lowerCaseString = string.toLowerCase(); 

  return allLetters.every( char => lowerCaseString.includes( char ) ); 
}
```


## Your order, please

### Instructions
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

### Submitted solution
```JavaScript
function order(words) {
  const wordsArr = words.split(' ');
  let wordsInOrder = [];
  let numInWord = 0;
  
  wordsArr.forEach( ( word ) => {
    numInWord = parseInt( word.replace(/\D/g,'') ); // Removes all non-numeric chars    
    wordsInOrder[ numInWord - 1 ] = word; // Starting at 1    
  } );
    
  return wordsInOrder.join( ' ' );
}
```


## PaginationHelper
### Instructions
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

### Submitted solution
```JavaScript
// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil( this.collection.length / this.itemsPerPage );
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  return pageIndex < this.pageCount() 
    ? Math.min(this.itemsPerPage, this.collection.length - pageIndex * this.itemsPerPage)
    : -1;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  return itemIndex < this.collection.length && itemIndex >= 0
    ? Math.floor(itemIndex / this.itemsPerPage)
    : -1;
}
```


## Duplicate Encoder

### Instructions
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

### Submitted solution
```JavaScript
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
```


## Vowel Count

### Instructions
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

### Submitted solution
```JavaScript
function getCount(str) {
  const vowelsArr = 'aeiou'.split('');
  const lowerCaseString = str.toLowerCase().split(''); 
  let total = 0;
  
  lowerCaseString.forEach( char => {
    if( vowelsArr.includes( char ) ) total++;
  } );
  
  return total; 
}
```

### Alternative solution
```JavaScript
function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}
```


## Template_for_next_challenge
### Instructions

### Submitted solution
```JavaScript

```