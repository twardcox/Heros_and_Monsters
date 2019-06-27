/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

'use strict';

// https://www.w3schools.com/howto/howto_css_modals.asp

// Get the element of the modal container
var modalEl = document.getElementById('modal-container');

// location of hero DATA
var charName = localStorage.getItem('name');


// OPEN THE MODAL

// Get the element of the open modal button
var openModalEl = document.getElementById('open-modal');

// Display the modal
openModalEl.addEventListener('click', function() {
  modalEl.style.display = 'block';

  var modalMsgEl = document.getElementById('modal-message');

  if (window.location.href.indexOf('worldHub') !== -1) {
    modalMsgEl.innerHTML = 'Refuled and ready to go';
    var tempHero = heroLoad(charName);
    heroRest(tempHero);
    console.log(tempHero);
    heroSave(tempHero);
    setMeter('heroHpMeter', 100, 100);
    setMeter('heroMpMeter', 100, 100);
  }
});

function battleResult(whoWon){
  modalEl.style.display = 'block';
  var modalMsgEl = document.getElementById('modal-message');
  var winnerImgEl = document.getElementById('winnerImg');
  if(whoWon === 0) { // Hero Victory
    modalMsgEl.innerHTML = 'You defeated the monster.';
    winnerImgEl.setAttribute('src', ourHero.imgPath);

  }
  else { // Monster Victory
    modalMsgEl.innerHTML = 'You have been defeated.';
    winnerImgEl.setAttribute('src', ourMonster.imgPath);
  }
}

// CLOSE THE MODAL

// Get the element of the close button
var closeBtnEl = document.getElementById('modal-close');

// Exit the modal
closeBtnEl.addEventListener('click', function() {
  modalEl.style.display = 'none';
});

// CONTINUE FROM THE MODAL (RETURN TO THE WORLDHUB PAGE)

// Get the element of the continue button
var contBtnEl = document.getElementById('modal-continue');

// Exit the modal
contBtnEl.addEventListener('click', function() {
  modalEl.style.display = 'none';
  window.location.href = 'worldHub.html';
});
