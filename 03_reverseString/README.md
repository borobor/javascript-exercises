# Exercise 03 - Reverse a String

Pretty simple, write a function called `reverseString` that returns its input, reversed!

```javascript
reverseString('hello there') // returns 'ereht olleh'
```

You will notice in this exercise that there are multiple tests, after making the first one pass, enable the others one by one by deleting the `.skip` in front the `test.skip()` function.

## Hints
Strings in JavaScript cannot be reversed directly so you're going to have to split it into something else first.. do the reversal and then join it back together into a string.

SOLUTION UPDATE : 
I wrote a function that reverses strings!
Function takes one string as a parameter, and then it turns it into an array with string.split('') method.
Empty quotation marks in .split method mean that the string will be split after each letter (or sign/space for that matter) into a newly declared array arr. E.g. 'hello' will turn into an array ['h', 'e', 'l', 'l', 'o'].
Next, I used the arr.reverse() method to reverse the order of items in the array.
Now we have a reversed array which we have to join back into a strong. New string has to be declared to store the result, and arr.join('') method is used to join reversed items in the array into a reversed string!

Not a difficult task when using methods!
