class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });

    this.hideButtonEl = document.querySelector('#hide-message-button');

    this.hideButtonEl.addEventListener('click', () => {
       this.hideMessage();
    });

    this.mainContainerEl = document.querySelector('#main-container');
  }

  displayMessage() {
    const div = document.createElement("div"
    );
    div.innerText = 'Thanks for clicking me!';
    div.id = 'message';
    this.mainContainerEl.append(div);
  }

  hideMessage() {
    document.querySelector('#message').remove();
  }
}

module.exports = MessageView;