//name Spacing 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options =
    {
        isStatic: true                             //  JSON Format - Java Script  Object Notation 
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    box1= new Box(100,100,40,40);
    box2= new Box(130,200,40,40);


    /*var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);*/

    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    box1.display();
    box2.display();

    /*ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);*/
}