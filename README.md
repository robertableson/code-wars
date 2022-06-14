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


## Sum Arrays (TODO)
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