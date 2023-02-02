screenWidth=0;
screenHeight=0;


apple =" ";

speakData= " ";

toNumber = " ";

x = 0;
y = 0;

drawApple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 

to_number = Number(content);

if(Number.isInteger(to_number)){
  document.getElementById("status").innerHTML="A MAÇÃ COMEÇOU A SER DESENHADA";
  drawApple="set";

}

else{
  document.getElementById("status").innerHTML="O NÚMERO NÃO FOI RECONHECIDO";

}

}

function setup() {
screenWidth = window.innerWidth;
screenHeight = window.innerHeight;

canvas=createCanvas(screenWidth,screenHeight-150);
canvas.position(0,150);
}

function draw() {
  if(drawApple == "set")
  {
    for(var i= 1;i<=to_number;i++){
      x = Math.floor(Math.random() * 700);
      y=Math.floor(Math.random() * 400);
      image(apple,x,y,50,50);
    }
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    speakData=to_number + "MAÇÃS DESENHADAS";
    speak();
    drawApple = "";
  }

}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}

function preload(){
  apple = loadImage( "apple.png");
}

