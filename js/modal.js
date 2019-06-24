// https://www.w3schools.com/howto/howto_css_modals.asp

// Get the element of the modal container
var modalEl = document.getElementById('modal-container');

// OPEN THE MODAL

// Get the element of the open modal button
// For testing only
var openModalEl = document.getElementById('open-modal');

// Display the modal
openModalEl.addEventListener('click', function(){ 
  modalEl.style.display = 'block';
});



// CLOSE THE MODAL

// Get the element of the close button
var closeBtnEl = document.getElementById('modal-close');

// Exit the modal
closeBtnEl.addEventListener('click', function(){
  modalEl.style.display = 'none';
});



// CONTINUE FROM THE MODAL (RETURN TO THE WORLDHUB PAGE)

// Get the element of the continue button
var contBtnEl = document.getElementById('modal-continue');

// Exit the modal
contBtnEl.addEventListener('click', function(){
  modalEl.style.display = 'none';
  window.location.href = 'worldHub.html';
});


