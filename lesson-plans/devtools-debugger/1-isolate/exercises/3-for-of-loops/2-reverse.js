'use strict';
/*
let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('enter something to reverse:');
}

let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
}

let transformation = toReverse + ' -> ' + backwards;

alert(transformation);
*/

/*  ===== Challenges =====
  - Put the characters back in the right order after the string was reversed.
*/

let toReverse = null;
while (toReverse === null) {
  toReverse = prompt('Enter something to reverse:');
}

let backwards = '';
for (let nextChar of toReverse) {
  backwards = nextChar + backwards;
}
let transformation = toReverse + ' -> ' + backwards;

alert(transformation);

let originalOrder = '';
for (let i = backwards.length - 1; i >= 0; i--) {
  originalOrder += backwards[i];
}

alert('Reversed back to original: ' + originalOrder);
