'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

let a = 'y'; // declare and initialize `a` to 'y'
let b = 'x'; // declare and initialize `b` to 'x'
let t = ''; // declare and initialize `t` to an empty string

console.log(a, b, t); // log the initial values of `a`, `b`, and `t`

t = a; // assign the value of `a` to `t`
a = b; // assign the value of `b` to `a`
b = t; // assign the value of `t` back to `b`

console.log(a, b, t); // log the final values of `a`, `b`, and `t`

// what did you do in this program?
// what are the final values of `a` and `b`?
// how are they changed from the initial values

// is it possible to swap a and b without using t?
