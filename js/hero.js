'use strict';

// Hero Constructor (MaxArr = [Max HP, Max MP, kcToLevel])
function Hero(name, maxArr, hp, mp, hClass, kc, lvl, imgPath) {
  this.Name = name;
  this.Max = maxArr;
  this.Hp = hp;
  this.Mp = mp;
  this.hClass = hClass;
  this.killCount = kc;
  this.Level = lvl;
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
  var tempHero = new Hero(dataStr['Name'], dataStr['Max'], dataStr['Hp'], dataStr['Mp'], dataStr['hClass'], dataStr['killCount'], dataStr['Level'], dataStr['imgPath']);
  return tempHero;
}

/*
@func: heroLevelUp
@param: heroObj
@ret: VOID
@desc: This function check to see if the hero has enough kc to level up
  if so, increment stats and save the changes.
*/
function heroLevelUp(heroObj) {
  // Check for required kc.
  if(heroObj.killCount >= heroObj.Max[2]) {
    // Increment level, stats and required kc.
    heroObj.Max[0] += heroObj.Max[0]*0.10; // HP
    heroObj.Max[1] += heroObj.Max[1]*0.10; // MP
    heroObj.Max[2] += heroObj.Max[2]*0.10; // kcToLevel
    heroObj.Level++;
    // Recover Hp, Mp and save data.
    heroRest(heroObj);
  }
}
