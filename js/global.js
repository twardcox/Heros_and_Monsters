// Variables and function to determine which page you're on

var homepage = 0;
var worldHubPage = 0; 
var combatPage = 0;

function whichPage (url){
  if (url.indexOf('worldHub') !== -1) {
    worldHubPage=1;
    console.log('WorldHub Page');
  } else if (url.indexOf('combatArena') !== -1) {
    combatPage=1;
    console.log('Combat Page');
  } else {
    homepage=1;
    console.log('HomePage');
  }
}

var testClass = ['attack', 'skill 1', 'skill 2', 'skill 3'];

whichPage(window.location.href);
