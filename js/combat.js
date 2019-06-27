'use strict';
// This file will hold all logic for the combatArena HTML page.
//

// Load our charater info.
var ourName = localStorage.getItem('name');
var ourHero = heroLoad(ourName);

// Generate monster.
var genMonInx = Math.floor(Math.random()*4);
var monImgEl = document.getElementById('monster-img');
var monHp = 100 + ourHero.Max[0] * 0.10;
var testMonster = new Monster('testmon', [monHp, 100], monHp, 100, monsterImgArray[genMonInx]);
monsterSave(testMonster);
monImgEl.src = testMonster.imgPath;

var ourMonster = monsterLoad('testmon');

// Set stat meters.
setMeter('monHpMeter',ourMonster.Hp, ourMonster.Max[0]);
setMeter('heroHpMeter',ourHero.Hp, ourHero.Max[0]);
setMeter('heroMpMeter', ourHero.Mp, ourHero.Max[1]);

// Update and link 4 buttons and their functionalities.
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

/*
@func: combat
@param: heroObj - our hero, monsterObj - monster
@ret: VOID
@desc: This function will be the main call for the combat page.
  It will call hero attack, monster attack, redraw screen (life-bars, mp-bar)
  Verfiy life of both hero and monster.
*/
function combat(ability) {
  var logStr = ''; // String to hold log message.
  var h1El = document.getElementById('cbLog'); // Log HTML element.
  var damage = 0; // Holds damage calculation.
  // Mp check
  if(ourHero.Mp >= ability[2]) {
    damage = heroAttack(ability);
  }
  else { // We don't have enough mp, use regular attack.
    logStr += 'You didn\'t have enough MP to use ' + ability[0] + '. ';
    damage = heroAttack(ourHero.hClass.attack);
  }
  ourMonster.Hp -= damage;
  logStr += 'You delt ' + damage.toFixed(2) + ' damage.';
  // Update meters (Hero).
  setMeter('monHpMeter',ourMonster.Hp, ourMonster.Max[0]);
  setMeter('heroMpMeter', ourHero.Mp, ourHero.Max[1]);
  if (ourMonster.Hp <= 0){ // The hero won the fight.
    ourHero.killCount++;
    heroLevelUp(ourHero);
    battleResult(0);
  }
  damage = monsterAttack('');
  ourHero.Hp -= damage;
  logStr += ' The monster delt ' + damage.toFixed(2) + ' to you.';
  // Update meter (Monster).
  setMeter('heroHpMeter', ourHero.Hp, ourHero.Max[0]);
  if (ourHero.Hp <= 0) { // The monster won the fight.
    battleResult(1);
  }
  // Write the log message.
  h1El.textContent = logStr;
  // Update local storage.
  heroSave(ourHero);
  monsterSave(ourMonster);
  shakeImages();
}

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

/*
@func: monsterAttack
@param: ability - (string), target - hero object
@ret: damage - integer damage to be delt to the target.
@desc: This function will use the passed ability to calculate
  damage to deal to the passed target.
*/
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

  if (currentScore < 0) {
    currentScore = 0;
  }

  var currWidth = (maxWidth / maxScore) * currentScore;

  childEl.style.width = `${currWidth}px`;
}

// SHAKE EFFECT
// https://www.w3schools.com/howto/howto_css_shake_image.asp

function shakeImages() {

  // SHAKE THE HERO
  var heroToShakeEl = document.getElementById('hero-img');
  heroToShakeEl.className = 'shakeEffect';

  heroToShakeEl.addEventListener('webkitAnimationEnd', function(){
    if(heroToShakeEl.className === 'shakeEffect')
      heroToShakeEl.className = '';
  });

  // SHAKE THE MONSTER

  var monsterToShakeEl = document.getElementById('monster-img');
  monsterToShakeEl.className = 'shake2Effect';
  monsterToShakeEl.addEventListener('webkitAnimationEnd', function(){
    if(monsterToShakeEl.className === 'shake2Effect')
      monsterToShakeEl.className = '';
  });

}
