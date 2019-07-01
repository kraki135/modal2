var btn_edit = document.querySelector('.btn-edit');
var btn_cancel = document.querySelector('.btn-cancel')
var btn_confirm = document.querySelector('.btn-confirm');
var modal;
var backdrop;
var outputParagraf = document.querySelector('#quote');
var textEdit = document.querySelector('.modal textarea');
var quote = 'To jest test modal. Zmień w nim tekst i dodaj coś od siebie.';
var editedQuote = '';

function updateParagraph() {
  outputParagraf.textContent = quote;
}

function closeModal() {
  
}

updateParagraph();
btn_edit.addEventListener('click', function() {
    backdrop = document.createElement('div');
    backdrop.classList.add('backdrop');
    backdrop.addEventListener('click', closeModal);
    editedQuote = quote;
    textEdit.value = quote; 
});
//4:43
/**
 * btn_cancel.addEventListener('click', closeModal);


btn_confirm.addEventListener('click', function() {
     closeModal();
     if(editedQuote.trim().length > 0) {
      quote = editedQuote;
      updateParagraph();
     }
});
 */
textEdit.addEventListener('input', function() {
      editedQuote = textEdit.value;
      
});
