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
@param: VOID
@ret: VOID
@desc: This function fully restores the hero's HP and MP. 
  Should display a message upon completion and redraw hero stats.
*/
function heroRest() {

}

//TODO: add a function that will save hero data to local storage
/*
@func: heroSave
@param: VOID
@ret: VOID
@desc: This function will save the hero class to local storage.
*/
function heroSave(){

}

//TODO: add a function that will load hero data from local storage
/*
@func: heroLoad
@param: VOID
@ret: VOID
@desc: This function will load the hero object from local storage.
*/
function heroLoad(){

}