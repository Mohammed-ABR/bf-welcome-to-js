'use strict';

let a = '*'; // [a, declare/init, '*' ]
// let a = '<>';
// let a = '|-|';
// let a = '';

let b = ''; // [b, declare/init, '' ]
while (b.length < a.length * 3) {
  b = b + a; // [a, read, '*' ] [b, read, '' ] [b, write, '*' ]
}

console.log(b); // [b, read, '***' ]
