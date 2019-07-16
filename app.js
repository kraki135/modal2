var editValueButton = document.querySelector('.btn-edit');
var modal;
var backdrop;
var btn_cancel;
var btn_confirm;
var demo_container = document.querySelector('.demo-container');
var outputParagraf = document.querySelector('#quote');

var quote = 'To jest test modal. Zmień w nim tekst i dodaj coś od siebie.';
var editedQuote = '';

function updateParagraph() {
  outputParagraf.textContent = quote;
}

function closeModal() {
  if(backdrop) {
    document.body.removeChild(backdrop);
    document.body.removeChild(modal);
  }
  
}

updateParagraph();

editValueButton.addEventListener('click', function() {
    backdrop = document.createElement('div');
    backdrop.classList.add('backdrop');
    document.body.insertBefore(backdrop,demo_container);
    backdrop.addEventListener('click', closeModal);

    modal = document.createElement('div');
    modal.classList.add('modal');
    document.body.insertBefore(modal,demo_container);

    var hModal = document.createElement('h1');
    hModal.textContent = 'Edit your Statment';
    modal.appendChild(hModal);

    var modal_input = document.createElement('div');
    modal_input.classList.add('modal-input');
    modal.appendChild(modal_input);

    var modal_inputArea = document.createElement('textarea');
    modal_inputArea.rows = '3';
    modal_inputArea.addEventListener('input', function () {
      editedQuote = this.value;
    });

    modal_input.appendChild(modal_inputArea);

    var modal_actions = document.createElement('div');
    modal_actions.classList.add('modal-actions');
    modal.appendChild(modal_actions);

    btn_cancel = document.createElement('button');
    btn_cancel.classList.add('btn-cancel');
    btn_cancel.textContent = 'Cancel';
    modal_actions.appendChild(btn_cancel);

    btn_confirm = document.createElement('button');
    btn_confirm.classList.add('btn-confirm');
    btn_confirm.textContent = 'Confirm';
    modal_actions.appendChild(btn_confirm);
    
    editedQuote = quote;
    modal_inputArea.value = quote; 

    btn_cancel.addEventListener('click', closeModal);

    btn_confirm.addEventListener('click', function() {
      closeModal();
      if(editedQuote.trim().length > 0) {
       quote = editedQuote;
       updateParagraph();
      }
 });
});