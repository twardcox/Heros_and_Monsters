// This file will handle the login HTML logic.

// TODO: Form Listener required, should read in a string for character name.
//  Either load or create new hero.
var buttonEl = document.getElementById('beginButton');
buttonEl.onclick = begin;

function begin(){
  var charName = document.getElementById('charName').value;
  localStorage.setItem('name', charName);
  if(localStorage.getItem(charName) !== null) {
  //TODO: load hero and move to worldHub.html
    
  }
  else {
    //TODO: create new hero and move it worldHub.html
    var tempHero = new Hero(charName, [100, 100], 100, 100, '', 0, '');
    heroSave(tempHero);
  }
}




// TODO: Add a function to check for existing hero in local storage by name.

