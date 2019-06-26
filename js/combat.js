'use strict';
// This file will hold all logic for the combatArena HTML page.
//
var genMonInx = Math.floor(Math.random()*4);
var monImgEl = document.getElementById('monster-img');

var testMonster = new Monster('testmon', [100, 100], 100, 100, monsterImgArray[genMonInx]);

monsterSave(testMonster);
monImgEl.src = testMonster.imgPath;
//

var ourName = localStorage.getItem('name');
var ourHero = heroLoad(ourName);
var ourMonster = monsterLoad('testmon');

setMeter('monHpMeter',ourMonster.Hp, ourMonster.Max[0]);
setMeter('heroHpMeter',ourHero.Hp, ourHero.Max[0]);
setMeter('heroMpMeter', ourHero.Mp, ourHero.Max[1]);

//DONE: create on click function for 4 buttons
var buttonEl = document.getElementById('action1');
buttonEl.textContent = ourHero.hClass.attack[0];
buttonEl.onclick = function () {combat(ourHero.hClass.attack);};

buttonEl = document.getElementById('action2');
buttonEl.textContent = ourHero.hClass.skill1[0];
buttonEl.onclick = function () {combat(ourHero.hClass.skill1);};

buttonEl = document.getElementById('action3');
buttonEl.textContent = ourHero.hClass.skill2[0];
buttonEl.onclick = function () {combat(ourHero.hClass.skill2);};

buttonEl = document.getElementById('action4');
buttonEl.textContent = ourHero.hClass.skill3[0];
buttonEl.onclick = function () {combat(ourHero.hClass.skill3);};

// DONE: complete the function to hadle combat logic.

/*
@func: combat
@param: heroObj - our hero, monsterObj - monster
@ret: VOID
@desc: This function will be the main call for the combat page.
  It will call hero attack, monster attack, redraw screen (life-bars, mp-bar)
  Verfiy life of both hero and monster.
*/
//NOTE: This function might be the event listener or the function call
// for the listener(24 Jun. 2019)
function combat(ability) {
  console.log(ability[0]);
  ourMonster.Hp -= heroAttack(ability);

  setMeter('monHpMeter',ourMonster.Hp, ourMonster.Max[0]);
  setMeter('heroMpMeter', ourHero.Mp, ourHero.Max[1]);
  if (ourMonster.Hp <= 0){
    ourHero.killCount++;
    battleResult(0);
  }
  ourHero.Hp -= monsterAttack('addLater');
  setMeter('heroHpMeter',ourHero.Hp, ourHero.Max[0]);
  if (ourHero.Hp <= 0){
    battleResult(1);
  }
  heroSave(ourHero);
  monsterSave(ourMonster);
}

//TODO:INPROGRESS: add a function to calculate the hero damage

/*
@func: heroAttack
@param: ability - (Array [name, dmg, mp cost]), target - monster object
@ret: damage - integer damage to be delt to the target.
@desc: This function will use the passed ability to calculate
  damage to deal to the passed target.
*/
function heroAttack(ability, target) {
  var damage;
  damage = Math.random() * ability[1];
  ourHero.Mp -= ability[2];
  return damage;
}

//TODO:INPROGRESS add a function that will calculate monster attack damage.
/*
@func: monsterAttack
@param: ability - (string), target - hero object
@ret: damage - integer damage to be delt to the target.
@desc: This function will use the passed ability to calculate
  damage to deal to the passed target.
*/
// NOTE: ability will be NULL for MVP and unused in the function (24 Jun. 2019)
function monsterAttack(ability, target) {
  var damage;
  damage = Math.random() * 15;
  return damage;
}

// generates a percentage for modifying the width of a status bar.
function setMeter(elId, currentScore, maxScore) {
  var childEl = document.getElementById(elId);

  var parentEl = childEl.parentElement;

  var maxWidth = parentEl.offsetWidth;

  if(currentScore < 0){
    currentScore = 0;
  }

  var currWidth = (maxWidth / maxScore) * currentScore;

  childEl.style.width = `${currWidth}px`;
}
