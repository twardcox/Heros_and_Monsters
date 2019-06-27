/* eslint-disable no-undef */
'use strict';
// This file will handle the login HTML logic.

var formEl = document.getElementById('login-form');
formEl.onsubmit = begin;

function begin() {
  event.preventDefault();
  var charName = document.getElementById('charName').value;
  localStorage.setItem('name', charName);
  if (localStorage.getItem(charName) === null) {
    var tempHero = new Hero(charName, [100, 100, 5], 100, 100, warrior, 0, 0, heroImgArray[0]);
    heroSave(tempHero);
  }
  window.location.href = './client/worldHub.html';
}
