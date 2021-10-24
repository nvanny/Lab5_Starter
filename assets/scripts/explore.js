// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var synth = window.speechSynthesis;
  var voices = synth.getVoices();
  var menu = document.getElementById("voice-select");
  for(var i = 0; i < voices.length; i++){
    var opt = document.createElement("option");
    opt.value = voices[i];
    opt.innerHTML = voices[i];
    menu.appendChild(opt);
  }
}