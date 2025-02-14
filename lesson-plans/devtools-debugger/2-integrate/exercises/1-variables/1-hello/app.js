// these are the only functions you will need

import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
  console.log('\n--- form data changed ---');

  const firstName = readString('first-name');
  const lastName = readString('last-name');
  console.log(firstName, lastName);

  const message = `Hello ${firstName} ${lastName}!\nGoodbye ${firstName} ${lastName}!`;

  displayString('greeting-output', message);
});

/*
whenFormDataChanges('user-info', () => {
  debugger;

  console.log('\n--- form data changed ---');

  // --- read user input ---

  let name = readString('the-name');

  console.log(name);

  // --- create a message ---

  let greeting = 'Hello ' + name + '!';

  // --- display the message ---

  displayString('greeting-output', greeting);
});
*/

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
