'use strict';

/*
  test cases:
    '' -> '|'
    'a' -> 'a|a'
    'hello' -> 'olleh|hello'
    ':)' -> '):|:)'


  experiment 1
    line:
    why:
    trying:

*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be mirrored');
}

let reserved = ' ';
for (const character of text) {
  reserved = character + reserved;
}

let mirrored = reserved + '|' + text;

alert(mirrored);
