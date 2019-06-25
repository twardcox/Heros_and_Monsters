'use strict';
// This file will hold all logic for the combatArena HTML page.
//
var testHero = new Hero('test', [100, 100], 100, 100, 'test100', 0, '');
var testMonster = new Monster('testmon', [100, 100], 100, 100, '');
heroSave(testHero);
monsterSave(testMonster);
//

var ourName = localStorage.getItem('name');
var ourHero = heroLoad(ourName);
var ourMonster = monsterLoad('testmon');

setMeter('monHpMeter',ourMonster.Hp, ourMonster.Max[0]);
setMeter('heroHpMeter',ourHero.Hp, ourHero.Max[0]);

//DONE: create on click function for 4 buttons
var buttonEl = document.getElementById('action1');
buttonEl.textContent = 'test1';
buttonEl.onclick = combat;

buttonEl = document.getElementById('action2');
buttonEl.textContent = 'test2';
buttonEl.onclick = combat;

buttonEl = document.getElementById('action3');
buttonEl.textContent = 'test3';
buttonEl.onclick = combat;

buttonEl = document.getElementById('action4');
buttonEl.textContent = 'test4';
buttonEl.onclick = combat;

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
function combat() {
  ourMonster.Hp -= heroAttack('addlater');

  setMeter('monHpMeter',ourMonster.Hp, ourMonster.Max[0]);
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
@param: ability - (string), target - monster object
@ret: damage - integer damage to be delt to the target.
@desc: This function will use the passed ability to calculate
  damage to deal to the passed target.
*/
function heroAttack(ability, target) {
  var damage;
  damage = Math.random() * 15;
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
