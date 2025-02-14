import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  debugger;

  console.log('--- form data changed ---');

  // --- read the user's input ---

  let userText = readString('to-mirror').trim();
  let separator = readString('separator').trim();

  // --- mirror the text ---

  let mirroredText = userText.split('').reverse().join('');
  let result =
    userText.toLowerCase() + ' ' + separator + ' ' + mirroredText.toUpperCase();
  // --- display the result ---

  displayString('output', result);
});

/*  ===== Challenges =====

  - make the mirror image upper case
  - make the non-mirror image lower case
  - let the user decide which character goes in the middle
      for example, any of these should be possible:
        asdf * fdsa
        asdf & fdsa
        asdf - fdsa
        asdf o fdsa
        ...
      you will need to add an input to the HTML file

*/
