'use strict';

/*
let text = null;
while (text === null) {
  text = prompt('enter some text, each character will be doubled:');
}

let doubled = '';
for (let nextChar of text) {
  doubled = doubled + nextChar + nextChar;
}

alert(doubled);
*/

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/

let text = null;
while (text === null) {
  text = prompt('Enter some text, each character will be doubled:');
}

let doubledWithHyphens = '';
for (let nextChar of text) {
  doubledWithHyphens = doubledWithHyphens + nextChar + nextChar + '-';
}
alert(doubledWithHyphens);

let doubledWithHyphensOnlyBetween = '';

for (let i = 0; i < text.length; i++) {
  doubledWithHyphensOnlyBetween = text[i] + text[i];
  if (i < text.length - 1) {
    doubledWithHyphensOnlyBetween += '-';
  }
}

alert(doubledWithHyphensOnlyBetween);
