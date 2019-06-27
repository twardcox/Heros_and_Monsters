/* eslint-disable no-unused-vars */

'use strict';

// Monster Constructor, maxArr = [MaxHp, MaxMp]
function Monster(name, maxArr, hp, mp, imgPath) {
  this.Name = name;
  this.Max = maxArr;
  this.Hp = hp;
  this.Mp = mp;
  this.imgPath = imgPath;
}

// Save monster data to local storage
function monsterSave(monsterObj) {
  var data = JSON.stringify(monsterObj);
  localStorage.setItem(monsterObj.Name, data);
}

// Load monster data from local storage
function monsterLoad(monsterName) {
  var dataStr = localStorage.getItem(monsterName);
  dataStr = JSON.parse(dataStr);
  var tempMonster = new Monster(dataStr['Name'], dataStr['Max'], dataStr['Hp'], dataStr['Mp'], dataStr['imgPath']);
  return tempMonster;
}
