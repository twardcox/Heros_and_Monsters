'use strict';
var testClass = ['attack', 'skill 1', 'skill 2', 'skill 3'];

var heroImgArray = ['../img/hero1.jpg', '../img/hero2.jpeg'];
var monsterImgArray = ['../img/monster.jpg', '../img/monster2.jpeg',
  '../img/monster3.jpg', '../img/monster4.jpeg', '../img/monster5.jpeg'];

// Hero Character Class List skill: [name, dmg, mp cost]
var warrior = {
  attack: ['basic attack', 17, 0],
  skill1: ['heavy strike', 25, 10],
  skill2: ['even more heavy strike', 45, 25],
  skill3: ['shield bash', 19, 4],
};

var mage = {
  attack: ['basic attack', 10, 0],
  skill1: ['fire bolt', 25, 10],
  skill2: ['ice bolt', 45, 25],
  skill3: ['thunder clap', 19, 4],
};

var ranger = {
  attack: ['basic attack', 13, 0],
  skill1: ['fire arrow', 22, 10],
  skill2: ['ice arrow', 22, 10],
  skill3: ['toxic shot', 19, 12],
};
