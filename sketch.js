const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,350,1200,20);
    box1 = new Box(420,100  ,50,150);
    box2 = new Box(400,300,50,50);
    pig1 = new Pig(300,300)
}

function draw(){
    background(255);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
}