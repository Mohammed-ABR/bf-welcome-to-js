'use strict';

let a = 'Ewin'; // [a, declare/init, 'Ewin' ]
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

let b = 'Hello ' + a + ', your name is '; // [a, read, 'Ewin' ] [b, declare/init, 'Hello Ewin, your name is ' ]

if (a.length > 4) {
  // [a, read, 'Ewin' ]
  b = b + 'long.'; // [b, read, 'Hello Ewin, your name is ' ] [b, write, 'Hello Ewin, your name is long.']
} else if (a.length === 4) {
  // [a, read, 'Ewin' ]
  b = b + 'perfect.'; // [b, read, 'Hello Ewin, your name is ' ] [b, write, 'Hello Ewin, your name is perfect.']
} else {
  b = b + 'short.'; // [b, read, 'Hello Ewin, your name is ' ] [b, write, 'Hello Ewin, your name is short.']
}

console.log(b); // [b, read, 'Hello Ewin, your name is short.']
