'use strict';

/*
let input = null;
while (input === null || input.length !== 5) {
  input = prompt('enter something with 5 characters:');
}

let message = 'thank you for "' + input + '"!';

alert(message);
*/

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/

let input = null;
while (input === null || input.length !== 10) {
  input = prompt('enter something with 10 characters:');
}

let message = 'thank you for "' + input + '"!';

alert(message);

let firstPart = null;
let secondPart = null;

while (firstPart !== 'eve' || secondPart !== 'rything') {
  firstPart = prompt('Write the first part: "eve" ');
  secondPart = prompt('Now write the second part: "rything" ');
}

alert('Thank you for writing everything!');
