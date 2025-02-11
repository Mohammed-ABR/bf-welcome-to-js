'use strict';

/* Four Variables

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

// trace the program a few times with different values

let a = 'Pieter'; // [a, declare/init, 'Pieter' ]
// let a = 'Blake';
// let a = 'George';

let b = 'Rabbit'; // [b, declare/init, 'Rabbit' ]
// let b = 'Wozzeck';
// let b = 'Schoenberg';

let c = a + ' ' + b; // [a, read, 'Pieter' ] [b, read, 'Rabbit' ] [c, declare/init, 'Pieter Rabbit' ]

let d = 'hello ' + c; // [c, read, 'Pieter Rabbit' ] [d, declare/init, 'hello Pieter Rabbit' ]

console.log(d); // [d,read, 'hello Pieter Rabbit' ]

d = 'good bye ' + c; // [c, read, 'Pieter Rabbit' ] [d, assign, 'good bye Pieter Rabbit' ]

console.log(d); // [d, read, 'good bye Pieter Rabbit' ]
