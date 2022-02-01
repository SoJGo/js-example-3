/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the show button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    // Modify the first test in messageView.test.js so it sets the HTML input's value to a message of your choice, before clicking on the "show" button. The content of the div#message should be equal to this message.

    const inputEl = document.querySelector('#message-input');

    // We can also set the input's value
    // (useful in tests, for example)
    inputEl.value = 'A message of our choice'

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toBe('A message of our choice'); 
  });

  it('clicks the hide button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();

    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();

    expect(document.querySelector('#message')).toBeNull();
  });
});