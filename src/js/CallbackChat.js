/* eslint-disable prettier/prettier */
class CallbackChat {
  constructor(parent) {
    this.parent = parent;
    this.getBtn();
  }

  getBtn() {
    const btn = document.createElement('button');
    btn.className = 'chat__btn';
    this.parent.append(btn);
    const chatEl = document.createElement('div');

    btn.addEventListener('click', () => this.getChat(chatEl, btn));

    chatEl.addEventListener('click', (event) => this.removeChat(event, chatEl));
  }

  getChat(chatEl, btn) {
    chatEl.className = 'chat__container';
    chatEl.innerHTML = `
      <div class="chat__row">
        <h5 class="chat__title">Напишите нам</h5>
        <button class="chat__close">&#10006;</button>
      </div>
      <textarea class="chat__input"></textarea>
      <button class="chat__submit">Отправить</button>
    `
    this.parent.append(chatEl);
    btn.style.opacity = '0';
    setTimeout(() => btn.remove(), 200);
  }

  removeChat(event, chatEl ) {
    if (!event.target.classList.contains('chat__close')) return;
    chatEl.style.cssText = `
      transition: 200ms;
      top: 100%;
      left: 100%;
      opacity: 0;
    `;
       
    setTimeout(() => {
      chatEl.remove();
      this.getBtn();
    }, 200);
  }
}

export default CallbackChat;