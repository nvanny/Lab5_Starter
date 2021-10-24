// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var elem = document.querySelector("select");
  elem.addEventListener('change', function() {
    var img = document.querySelector("img");
    var audio = document.querySelector("audio");
    var value = elem.options[elem.selectedIndex].value;
    img.src = `assets/images/${value}.svg`;
    audio.src = `assets/audio/${value}.mp3`;
  });

  var button = document.querySelector("button");
  button.addEventListener('click', function() {
    var audio = document.querySelector("audio");
    audio.play();
  });
}

