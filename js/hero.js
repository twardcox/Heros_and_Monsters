'use strict';
// Hero class test global
var testClass = ['attack', 'skill 1', 'skill 2', 'skill 3'];

// Hero Constructor
function Hero(name, maxArr, hp, mp, hClass, kc, imgPath) {
  this.Name = name;
  this.Max = maxArr;
  this.Hp = hp;
  this.Mp = mp;
  this.hClass = hClass;
  this.killCount = kc;
  this.imgPath = imgPath;
}

/*
@func: heroRest
@param: heroObj
@ret: VOID
@desc: This function fully restores the hero's HP and MP.
  Should display a message upon completion and redraw hero stats.
*/
function heroRest(heroObj) {
  heroObj.Hp = heroObj.Max[0];
  heroObj.Mp = heroObj.Max[1];
  heroSave(heroObj);
}

/*
@func: heroSave
@param: heroObj
@ret: VOID
@desc: This function will save the hero class to local storage.
*/
function heroSave(heroObj) {
  var dataStr = JSON.stringify(heroObj);
  localStorage.setItem(heroObj.Name, dataStr);
}

/*
@func: heroLoad
@param: heroName
@ret: VOID
@desc: This function will load the hero object from local storage.
*/
function heroLoad(heroName) {
  var dataStr = localStorage.getItem(heroName);
  dataStr = JSON.parse(dataStr);
  var tempHero = new Hero(dataStr['Name'], dataStr['Max'], dataStr['Hp'], dataStr['Mp'], dataStr['hClass'], dataStr['killCount'], dataStr['imgPath']);
  return tempHero;
}
