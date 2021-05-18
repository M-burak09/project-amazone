var audio = new Audio('media/typewriter.mp3');
async function typeWrite(){
function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";

	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
      audio.pause();
      if(window.location.pathname == '/personageVerhaal1.html' || window.location.pathname == '/personageVerhaal2.html'){
        document.getElementById("animatie1").style.display ="block";
        document.getElementById("displayNone1").style.display ="block";
      }
      else if (window.location.pathname == '/help.html') {
        document.getElementById("displayButton1").style.display ="block";
        document.getElementById("displayButton2").style.display ="block";
    }}
  }, speed);
}


var speed = 65;
var p = document.getElementById('displayNone');
var delay = p.innerHTML.length * speed + speed;
typeEffect(p, speed);

audio.play();


if(window.location.pathname == '/personageVerhaal1.html' || window.location.pathname == '/personageVerhaal2.html' || window.location.pathname == '/help.html'){
  document.getElementById("displayNone").style.display ="block";
  let animatie = document.getElementById('animatie');
  animatie.classList.remove('meer');
  animatie.classList.add('meerStop');
}}

function displayText(){
  let animatie = document.getElementById('animatie1');
  animatie.classList.remove('meer');
  animatie.classList.add('meerStop');
  document.getElementById("displayNone2").style.display ="block";
  document.getElementById("displayNone3").style.display ="block";
  let button = document.getElementById('displayNone4');
  button.classList.remove('displayNone');
  button.classList.add('doorgaan');
  let animatie1 = document.getElementById('displayNone2');
  animatie1.classList.add('fade');

}
