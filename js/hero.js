// Hero class test global
var testClass = ['attack', 'skill 1', 'skill 2', 'skill 3'];


// Hero Constructor
function Hero(name, hp, mp, hClass,kc,imgPath){
  this.Name = name;
  this.Hp = hp;
  this.Mp = mp;
  this.hClass = hClass;
  this.killCount = kc;
  this.imgPath = imgPath;
}


//TODO: add a function that will reset hero hp,mp
/*
@func: heroRest
@param: heroObj
@ret: VOID
@desc: This function fully restores the hero's HP and MP. 
  Should display a message upon completion and redraw hero stats.
*/
function heroRest(heroObj){
  heroObj.Hp = 100;
  heroObj.Mp = 100;
  heroSave(heroObj);
}


//TODO: add a function that will save hero data to local storage
/*
@func: heroSave
@param: heroObj
@ret: VOID
@desc: This function will save the hero class to local storage.
*/
function heroSave(heroObj){
  var dataStr = JSON.stringify(heroObj);
  localStorage.setItem(heroObj.Name,dataStr);
}

//TODO: add a function that will load hero data from local storage
/*
@func: heroLoad
@param: heroName
@ret: VOID
@desc: This function will load the hero object from local storage.
*/
function heroLoad(heroName){
  var dataStr = localStorage.getItem(heroName);
  dataStr = JSON.parse(dataStr);
  var tempHero = new Hero(dataStr['Name'], dataStr['Hp'], dataStr['Mp'], dataStr['hClass'], dataStr['killCount'], dataStr['imgPath']);
  return tempHero;
}

