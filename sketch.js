const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var hero;
var box1,box2,box3,box4,box5,box6,box7,box8;
var box9,box10,box11,box12,box13,box14,box15,box16,box17,box18;
var box19,box20,box21,box22,box23,box24,box25,box26;
var fly;
var monster;
function preload() {
//preload the images here
backgroundImg=loadImage("background.png")

}

function setup() {
  createCanvas(3500, 2000);
 background("white")
  engine = Engine.create();
    world = engine.world;

  ground=new Ground(500,450,1000,20)

  hero=new Hero(300,300,500)

  box1=new Box(820,415,50,50)
  box2=new Box(820,365,50,50)
  box3=new Box(820,315,50,50)
  box4=new Box(820,265,50,50)
  box5=new Box(820,215,50,50)
  box6=new Box(820,165,50,50)
  box7=new Box(820,115,50,50)
  box8=new Box(820,65,50,50)

  box9=new Box(900,415,50,50)
  box10=new Box(900,365,50,50)
  box11=new Box(900,315,50,50)
  box12=new Box(900,265,50,50)

  box13=new Box(740,215,50,50)
  box14=new Box(740,265,50,50)
  box15=new Box(740,315,50,50)
  box16=new Box(740,415,50,50)
  box17=new Box(740,365,50,50)
  box18=new Box(740,165,50,50)
  
  box19=new Box(660,415,50,50)
  box20=new Box(660,365,50,50)
  box21=new Box(660,315,50,50)
  box22=new Box(660,265,50,50)
  box23=new Box(660,215,50,50)
  box24=new Box(660,165,50,50)
  box25=new Box(660,115,50,50)
  box26=new Box(660,65,50,50)

  fly=new Fly(hero.body,{x:500,y:50})
  monster=new Monster(1150,300,10)
  
  


  

}

function draw() {
  background(backgroundImg)
  Engine.update(engine);
ground.display()
hero.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()
box19.display()
box20.display()
box21.display()
box22.display()
box23.display()
box24.display()
box25.display()
box26.display()
fly.display()
monster.display()

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}
