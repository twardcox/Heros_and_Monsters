
'use strict';
// This file will hold logic for the worldHub HTLM page such as
//  Event listeners, form logic, ect...

// Globals for worldHub.js
var charName = localStorage.getItem('name');
var ourHero = heroLoad(charName);

var kcEl = document.getElementById('kill-count');


// DONE(IN MODAL.JS): Create a listener for clicking on element that will rest hero.


// DONE: Create a function that displays hero data. (HTML Structure required)
setMeter('heroHpMeter', ourHero.Hp, ourHero.Max[0]);
setMeter('heroMpMeter', ourHero.Mp, ourHero.Max[1]);
kcEl.textContent = ourHero.killCount;


// BUTTON TO START BATTLE

// Get the element of the battle button
var battleBtnEl = document.getElementById('start-battle');

// Go to the combat pate
battleBtnEl.addEventListener('click', function() {
  window.location.href = 'combatArena.html';
});

// generates a percentage for modifying the width of a status bar.
function setMeter(elId, currentScore, maxScore) {
  var childEl = document.getElementById(elId);

  var parentEl = childEl.parentElement;

  var maxWidth = parentEl.offsetWidth;

  if(currentScore < 0)
    currentScore = 0;

  var currWidth = (maxWidth / maxScore) * currentScore;

  childEl.style.width = `${currWidth}px`;
}

