window.onload = function()
{
if(window.location.pathname == '/schiet.html'){
    var naSchiet = document.getElementById('naschietDisplay');
  	var item = document.getElementById("item");
  	var timer = "";
  	document.getElementsByTagName("ul")[0].addEventListener("click",showDetails);
  	document.getElementById("itemCancel").addEventListener("click", hideDetails);
  	document.getElementById("itemBackground").addEventListener("click", hideDetails);
    var tick = new Audio('media/clock.wav');
  var volume = document.getElementById("volume");
  volume.volume = 0.5;
}

if(window.location.pathname =='/personage.html'){
  let progress = document.getElementById("progress");
  progress.style.width = "23%";
}

else if(window.location.pathname =='/personageVerhaal2.html' || window.location.pathname =='/personageVerhaal1.html'){
  let progress = document.getElementById("progress");
  progress.style.width = "38%";
}

else if(window.location.pathname =='/moorden.html'){
  let progress = document.getElementById("progress");
  progress.style.width = "53%";
}

else if(window.location.pathname =='/schiet.html'){
  let progress = document.getElementById("progress");
  progress.style.width = "68%";
}

else if(window.location.pathname =='/help.html'){
  let progress = document.getElementById("progress");
  progress.style.width = "83%";
}

else if(window.location.pathname =='/eind.html'){
  let progress = document.getElementById("progress");
  progress.style.width = "100%";
}
};

function showDetails(event)
{
	if(event.target.dataset.id)
	{

	item.style.display="block";


	document.getElementById("itemTitle").innerText = event.target.dataset.title;
  document.getElementById("itemImage").src = "media/kaartImg" + event.target.dataset.id + ".jpg";
	document.getElementById("itemDescription").innerText = event.target.dataset.description;


	timer = setTimeout(function(){ item.className = "is-visible"; }, 20);

	}
}

function goBack() {
  window.history.back();
}

function hideDetails()
{
	item.className = "";

	timer = setTimeout(function(){ item.style.display = "none"; }, 300);

}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var newDeaths = 0;
function showSchiet() {
  var curDeaths = document.getElementById("counter_number");
  let audio = document.getElementById("audio");
  let schiet = document.getElementById('schietDisplay');
  let schietKnop = document.getElementById('schiet');
  schiet.style.display = "none";
  schietKnop.style.display = "none";
  audio.play();
  showFade();

  async function showFade(){
      let naSchiet = document.getElementById('naschietDisplay');
      schiet.style.display = "none";
      newDeaths += 1;
      curDeaths.innerHTML = newDeaths;
      await sleep(20);
      naSchiet.style.display = "block";
      naSchiet.classList.remove('hideKaart');
      naSchiet.classList.add('showKaart');

  }
}

var buttonPressed = 0;
function tellerUp1(){
  var curDeaths = document.getElementById("counter_number");
  let button = document.getElementById("button1");
  button.onclick = null;
  button.style.backgroundColor = "rgba(255, 255, 255, .4)";
  button.style.animation = "none";
  buttonPressed +=1;
  berekenDeath();
  showDoorgaanMoord();
}

function tellerUp2(){
  var curDeaths = document.getElementById("counter_number");
  let button = document.getElementById("button2");
  button.onclick = null;
  button.style.backgroundColor = "rgba(255, 255, 255, .4)";
  button.style.animation = "none";
  buttonPressed +=1;
  berekenDeath();
  showDoorgaanMoord();
}

function tellerUp3(){
  var curDeaths = document.getElementById("counter_number");
  let button = document.getElementById("button3");
  button.onclick = null;
  button.style.backgroundColor = "rgba(255, 255, 255, .4)";
  button.style.animation = "none";
  buttonPressed +=1;
  berekenDeath();
  showDoorgaanMoord();
}

function showDoorgaanMoord(){
  var curDeaths = document.getElementById("counter_number");
  if (buttonPressed == 3){
    buttonPressed +=1;
    var curDeaths = document.getElementById("counter_number");
    let moord = document.getElementById('moord');
    moord.style.display = "block";
  }
}

async function showMoord(){
  newDeaths = 1;
  for (let i = 0; i < 3; i++) {
  berekenDeath();
  }
  let naSchiet = document.getElementById('naschietDisplay');
  let moordDisplay = document.getElementById('moordDisplay');
  let counter = document.getElementById("counterMoord");
  let counterFoto = document.getElementById("counterMoord_foto");
  let counterGetal = document.getElementById("counter_number");
  let help = document.getElementById("help");
  naSchiet.style.display = "none";
  moord.style.display = "none";
  moordDisplay.style.display ="block";
  counter.classList.remove("counter");
  counter.classList.add("counterMoord");
  counterFoto.classList.remove("counter_foto");
  counterFoto.classList.add("counterMoord_foto");
  counterGetal.classList.remove("counter_number");
  counterGetal.classList.add("counterMoord_number");
  typeWrite();
  await sleep(24500);
  help.style.display ="block";
}

async function berekenDeath(){
  let tick = new Audio('media/typewriter.mp3');
  if(buttonPressed <= 3){
  tick.play();}
  tick.loop = true;
  tick.playbackRate = 3;
  var curDeaths = document.getElementById("counter_number");
  let slow = 200;
  let medium = 80;
  let fast = 40;
  let countTime = 9;

  for (let i = 0; i < 8; i++) {
    newDeaths += countTime;
    await sleep(slow);
    curDeaths.innerHTML = newDeaths;
  }
  for (let i = 0; i < 24; i++) {
    newDeaths += countTime;
    await sleep(medium);
    curDeaths.innerHTML = newDeaths;
  }
  for (let i = 0; i < 7; i++) {
    newDeaths += countTime;
    await sleep(fast);
    curDeaths.innerHTML = newDeaths;
  }
  tick.pause();

}

function showHulp(){
  let hulp = document.getElementById("hulp");
  let buttons = document.getElementById("hulpButtons");
  hulp.classList.remove("displayNone");
  buttons.style.display = "none";
}


function hulpDown1(){
  let hulpText = document.getElementById("hulpText1");
  let hulpDown = document.getElementById("hulpDown1");
  let hulpUp = document.getElementById("hulpUp1");
  let hulpKop = document.getElementById("hulpKop1");
  hulpText.classList.remove("displayNone");
  hulpDown.style.display = "none";
  hulpUp.style.display = "inline-block";
  hulpKop.style.fontWeight = "900";
}

function hulpUp1(){
  let hulpText = document.getElementById("hulpText1");
  let hulpDown = document.getElementById("hulpDown1");
  let hulpUp = document.getElementById("hulpUp1");
  let hulpKop = document.getElementById("hulpKop1");
  hulpText.classList.add("displayNone");
  hulpDown.style.display = "inline-block";
  hulpUp.style.display = "none";
  hulpKop.style.fontWeight = "500";
}

function hulpDown2(){
  let hulpText = document.getElementById("hulpText2");
  let hulpDown = document.getElementById("hulpDown2");
  let hulpUp = document.getElementById("hulpUp2");
  let hulpKop = document.getElementById("hulpKop2");
  hulpText.classList.remove("displayNone");
  hulpDown.style.display = "none";
  hulpUp.style.display = "inline-block";
  hulpKop.style.fontWeight = "900";
}

function hulpUp2(){
  let hulpText = document.getElementById("hulpText2");
  let hulpDown = document.getElementById("hulpDown2");
  let hulpUp = document.getElementById("hulpUp2");
  let hulpKop = document.getElementById("hulpKop2");
  hulpText.classList.add("displayNone");
  hulpDown.style.display = "inline-block";
  hulpUp.style.display = "none";
  hulpKop.style.fontWeight = "500";
}

function hulpDown3(){
  let hulpText = document.getElementById("hulpText3");
  let hulpDown = document.getElementById("hulpDown3");
  let hulpUp = document.getElementById("hulpUp3");
  let hulpKop = document.getElementById("hulpKop3");
  hulpText.classList.remove("displayNone");
  hulpDown.style.display = "none";
  hulpUp.style.display = "inline-block";
  hulpKop.style.fontWeight = "900";
}

function hulpUp3(){
  let hulpText = document.getElementById("hulpText3");
  let hulpDown = document.getElementById("hulpDown3");
  let hulpUp = document.getElementById("hulpUp3");
  let hulpKop = document.getElementById("hulpKop3");
  hulpText.classList.add("displayNone");
  hulpDown.style.display = "inline-block";
  hulpUp.style.display = "none";
  hulpKop.style.fontWeight = "500";
}

function hulpDown4(){
  let hulpText = document.getElementById("hulpText4");
  let hulpDown = document.getElementById("hulpDown4");
  let hulpUp = document.getElementById("hulpUp4");
  let hulpKop = document.getElementById("hulpKop4");
  hulpText.classList.remove("displayNone");
  hulpDown.style.display = "none";
  hulpUp.style.display = "inline-block";
  hulpKop.style.fontWeight = "900";
}

function hulpUp4(){
  let hulpText = document.getElementById("hulpText4");
  let hulpDown = document.getElementById("hulpDown4");
  let hulpUp = document.getElementById("hulpUp4");
  let hulpKop = document.getElementById("hulpKop4");
  hulpText.classList.add("displayNone");
  hulpDown.style.display = "inline-block";
  hulpUp.style.display = "none";
  hulpKop.style.fontWeight = "500";
}

function showEind(){
  let voetbalveld = document.getElementById("voetbalveld");
  let knop = document.getElementById("voetbalveldKnop");
  let eind = document.getElementById("eind");
  let text = document.getElementById("displayNone");
  voetbalveld.style.display = "none";
  knop.style.display = "none";
  eind.style.display = "block";
  text.style.display ="block";
  typeWrite();
}
