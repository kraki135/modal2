var btn_edit = document.querySelector('.btn-edit');
var btn_cancel = document.querySelector('.btn-cancel')
var btn_confirm = document.querySelector('.btn-confirm');
var modal = document.querySelector('.modal');
var backdrop = document.querySelector('.backdrop');
var outputParagraf = document.querySelector('#quote');
var textEdit = document.querySelector('.modal textarea');
var quote = 'To jest test modal. Zmień w nim tekst i dodaj coś od siebie.';
var editedQuote = '';

function updateParagraph() {
  outputParagraf.textContent = quote;
}

function closeModal() {
  modal.style.display = 'none';
    backdrop.style.display = 'none';
}

updateParagraph();
btn_edit.addEventListener('click', function() {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
    editedQuote = quote;
    textEdit.value = quote;
    

});

btn_cancel.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

btn_confirm.addEventListener('click', function() {
    
     if(editedQuote.trim().length > 0) {
      quote = editedQuote;
      updateParagraph();
     }else {

     }
     



    closeModal();
    
});
textEdit.addEventListener('input', function() {
      editedQuote = textEdit.value;
      
});
