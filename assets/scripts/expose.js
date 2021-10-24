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

  var slider = document.getElementById("volume");
  slider.addEventListener('change', function(){
    var val = slider.value;
    var image = document.getElementById("volume-controls").querySelector("img");
    if(val == 0){
      image.src = "assets/icons/volume-level-0.svg";
      image.alt = "Volume level 0";
    } else if(val < 33){
      image.src = "assets/icons/volume-level-1.svg";
      image.alt = "Volume level 1";
    } else if(val < 67){
      image.src = "assets/icons/volume-level-2.svg";
      image.alt = "Volume level 2";
    } else {
      image.src = "assets/icons/volume-level-3.svg";
      image.alt = "Volume level 3";
    }
  });  

  var button = document.querySelector("button");
  button.addEventListener('click', function() {
    var audio = document.querySelector("audio");
    var volumes = slider.value;
    audio.volume = volumes/100.0; 
    audio.play();
    if(elem.value == "party-horn"){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });

}

