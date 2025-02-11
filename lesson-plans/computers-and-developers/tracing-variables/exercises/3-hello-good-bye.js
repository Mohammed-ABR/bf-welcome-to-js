'use strict';

/* Comment & Log

  Add comments and logs to help a developer understand this program

*/

let first = 'Pieter'; // [first, declare/init, 'Pieter']
let last = 'Rabbit'; // [last, declare/init, 'Rabbit']

let fullName = first + ' ' + last; // [first, read, 'Pieter'] [last, read, 'Rabbit'] [fullName, declare/init, 'Pieter Rabbit']

console.log(fullName); // [fullName, read, 'Pieter Rabbit']

let greeting = 'hello ' + fullName; // [fullName, read, 'Pieter Rabbit'] [greeting, declare/init, 'hello Pieter Rabbit']

greeting = 'good bye ' + fullName; // [fullName, read, 'Pieter Rabbit'] [greeting, assign, 'good bye Pieter Rabbit']

console.log(greeting); // [greeting, read, 'good bye Pieter Rabbit']
