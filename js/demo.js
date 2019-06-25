var ourHero = new Hero('test', 100, 100, 'testClass', 0, '');

var ourMonster = new Monster('testmon', 50, 50, '');

// generates a percentage for modifying the width of a status bar.
var setMeter = function(elId, currentScore, maxScore) {
  var childEl = document.getElementById(elId);
  var parentEl = document.getElementById(elId).parentElement;
  var maxWidth = parentEl.style.width;
  var currWidth = (maxScore / maxWidth) * currentScore;
  childEl.style.width = currWidth;
};
