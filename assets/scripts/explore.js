// explore.js

window.addEventListener('DOMContentLoaded', init);

function getSpeechVoices(){
  return new Promise(
    function(resolve){
      var synth = window.speechSynthesis;
      var id;
      id = setInterval(() => {
        var val = synth.getVoices().length;
        if(val !== 0){
          resolve(synth.getVoices());
          clearInterval(id);
        }
      }, 20);
    }
  )
}

function init() {
  var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('textarea');
var voiceSelect = document.querySelector('select');

var voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
var selector = document.querySelector("button");
selector.addEventListener('click', function(){

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(var i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);

  inputTxt.blur();
})
}