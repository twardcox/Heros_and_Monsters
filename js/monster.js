// Monster Constructor
function Monster(name, hp, mp, imgPath){
  this.Name = name;
  this.Hp = hp;
  this.Mp = mp;
  this.imgPath = imgPath;
}

// DONE: Add a function to save monster data to local storage
function monsterSave(monsterObj) {
var data = JSON.stringify(monsterObj);
localStorage.setItem(monsterObj.name,data);
}

// TODO: Add a function to load monster data from local storage.
function monsterLoad(monsterName) {

}



