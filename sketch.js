const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var maxDrops=100;
var drops = [];

function preload(){
}

function setup(){
  canvas = createCanvas(700,800);
  engine = Engine.create();
  world = engine.world;

  drop = new Drop(40,75,10);
  umbrella = new Umbrella(600,500,60);
}

function draw(){
  background(0);
  
  umbrella.display();

  for(var i = 40; i <= width; i = i + 50){
    drops.push(new Drop(i,75,10));
  }
  for(var i = 15; i <= width-10; i = i + 50){
    drops.push(new Drop(i,175,10));
  }
  for(var i = -10; i <= width-20; i = i + 50){
    drops.push(new Drop(i,275,10));
  }
  for(var i = -35; i <= width-30; i = i + 50){
    drops.push(new Drop(i,375,10));
  }
  for(var i = 0;i < drops.length; i = i + 1){
    drops[i].display();
  }
  drop.velocityY = drop.velocityY + 5;
}