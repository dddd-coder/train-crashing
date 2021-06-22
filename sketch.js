const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

 


    

  ground = new Ground(600,380,1200,20);
  boggie1 = new Boggie(50,300,50,50)
  boggie2 = new Boggie(150,300,50,50)
  boggie3 = new Boggie(250,300,50,50)
  boggie4 = new Boggie(350,300,50,50)
  boggie5 = new Boggie(450,300,50,50)
  boggie6 = new Boggie(550,300,50,50)

  rock1 = new Rock(1000,100,100,100)

  chain1 = new Chain(boggie1.body,boggie2.body)
  chain2 = new Chain(boggie2.body,boggie3.body)
  chain3 = new Chain(boggie3.body,boggie4.body)
  chain4 = new Chain(boggie4.body,boggie5.body)
  chain5 = new Chain(boggie5.body,boggie6.body)
  


  }

function draw() {
  background(bg); 
  var collide= Matter .SAT.collides(boggie6.body,rock1.body)  


  if(collide.collided){
    flag= true

  }

    if(flag===true){
    textSize(30)
    fill ("blue")
    text ("crash",width/2, 100)

    crashSound.play()
    }
 
  Engine.update(myEngine);
  boggie1.show();
  boggie2.show();
  boggie3.show();
  boggie4.show();
  boggie5.show();
  boggie6.show();
  rock1.show()

  chain1.show()
  chain2.show()
  chain3.show()
  chain4.show()
  chain5.show()

  }


  function  keyPressed(){

   if(keyCode===RIGHT_ARROW){
    Matter .Body.applyForce(boggie6.body, boggie6.body.position,  {x:0.5,y:0})
   }


  }
