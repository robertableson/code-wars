# Code Wars exercises
This is an array (get it?) of exercises done on [Code Wars](https://www.codewars.com).

Source: [Robert Ableson](https://robertableson.com/)

## Even or Odd
Date: june 8 2022

### Instructions
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

### Solution
```JavaScript
    function even_or_odd(number) {
        return number % 2 === 0 ? 'Even' : 'Odd';
    }
```

### Optimized/alternative solutions
#### #1
```JavaScript
    function even_or_odd(number) {
        return number % 2 ? 'Odd' : 'Even'
    }
```
#### #2
```JavaScript
    const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';
```