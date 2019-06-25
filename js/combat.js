// This file will hold all logic for the combatArena HTML page.
//
var testHero = new Hero('test',100, 100, 'test100', 0, '');
var testMonster = new Monster('testmon', 100, 100, '');
heroSave(testHero);
monsterSave(testMonster);
//

var ourHero = heroLoad('test');
var ourMonster = monsterLoad('testmon');
//TODO: create on click function for 4 buttons
var buttonEl = document.getElementById('action1');
buttonEl.textContent = 'test1';
buttonEl.onclick = combat;
var heroHpBar = document.getElementById('heroHpMeter');
var monHpBar = document.getElementById('monHpMeter');


// TODO: complete the function to hadle combat logic.
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
  monHpBar.style.width = ourMonster.Hp + 'px';
  if (ourMonster.Hp <= 0){
    return 0;
  }
  ourHero.Hp -= monsterAttack('addLater');
  heroHpBar.style.width = ourHero.Hp + 'px';
  if (ourHero.Hp <= 0){
    return 1;
  }
  heroSave(ourHero);
  monsterSave(ourMonster);

  //DONE: add logic for Hp===0.

}


//TODO: add a function to calculate the hero damage
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

//TODO: add a function that will calculate monster attack damage.
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

// TODO: Create a function that displays hero stats.

// TODO: Create a function that displays monster stats. 