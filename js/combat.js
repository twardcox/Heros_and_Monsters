// This file will hold all logic for the combatArena HTML page.

// TODO: Form event handler required.

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
function combat(heroObj, monsterObj) {
  monsterObj.Hp -= heroAttack('addlater');
  heroObj.Hp -= monsterAttack('addLater');
  heroSave(heroObj);
  monsterSave(monsterObj);
  //TODO: add logic for Hp===0.
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