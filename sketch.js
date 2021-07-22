
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13;
var boundarywall1, boundarywall2, boundarywall3, boundarywall4, boundarywall5, boundarywall6;
var topboundarywall1, topboundarywall2, topboundarywall3, topboundarywall4, topboundarywall5, topboundarywall6;
var bottomboundarywall1, bottomboundarywall2, bottomboundarywall3, bottomboundarywall4, bottomboundarywall5, bottomboundarywall6;
var soldier, soldier2;
var balltrajectory = [];

function setup() {
  createCanvas(1450,850);

  engine = Engine.create();
  world = engine.world;

  // All the parts of the maze
  boundarywall1 = new Wall(20, 150, 30, 250);
  boundarywall2 = new Wall(20, 400, 30, 250);
  boundarywall3 = new Wall(20, 650, 30, 300);
  boundarywall4 = new Wall(1420, 150, 30, 250);
  boundarywall5 = new Wall(1420, 400, 30, 250);
  boundarywall6 = new Wall(1420, 650, 30, 300);
  // Up and down Boundaries
  topboundarywall1 = new Wall(130, 10, 250, 30);
  topboundarywall2 = new Wall(380, 10, 250, 30);
  topboundarywall3 = new Wall(630, 10, 250, 30);
  topboundarywall4 = new Wall(880, 10, 250, 30);
  topboundarywall5 = new Wall(1130, 10, 250, 30);
  topboundarywall6 = new Wall(1335, 10, 200, 30);

  bottomboundarywall1 = new Wall(130, 800, 250, 30);
  bottomboundarywall2 = new Wall(380, 800, 250, 30);
  bottomboundarywall3 = new Wall(630, 800, 250, 30);
  bottomboundarywall4 = new Wall(880, 800, 250, 30);
  bottomboundarywall5 = new Wall(1130, 800, 250, 30);
  bottomboundarywall6 = new Wall(1335, 800, 200, 30);


// The main parts of the maze

  wall1 = new Wall(250, 125, 30, 200);
  wall2 = new Wall(450, 125, 30, 200);
  wall3 = new Wall(535, 235, 200, 30);
  wall4 = new Wall(950, 125, 30, 200);
  wall5 = new Wall(250, 325, 30, 200);
  wall6 = new Wall(1035, 235, 200, 30);
  wall7 = new Wall(450, 685, 30, 200);
  wall8 = new Wall(450, 485, 30, 200);
  wall9 = new Wall(950, 685, 30, 200);
  wall10 = new Wall(950, 485, 30, 200);
  wall11 = new Wall(1035, 385, 200, 30)
  wall12 = new Wall(535, 600, 200, 30);
  wall13 = new Wall(1035, 600, 200, 30);

  soldier = new Player(150, 170, 50, 180);
  soldier2 = new Soldier(1330, 170, 50, 180);



  

}


function draw() 
{
  background("Grey"); 

  Engine.update(engine);
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();

  boundarywall1.display();
  boundarywall2.display();
  boundarywall3.display();
  boundarywall4.display();
  boundarywall5.display();
  boundarywall6.display();

  topboundarywall1.display();
  topboundarywall2.display();
  topboundarywall3.display();
  topboundarywall4.display();
  topboundarywall5.display();
  topboundarywall6.display();

  bottomboundarywall1.display();
  bottomboundarywall2.display();
  bottomboundarywall3.display();
  bottomboundarywall4.display();
  bottomboundarywall5.display();
  bottomboundarywall6.display();

  soldier.display();
  soldier2.display();

  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("Bounce Fighters", width / 2, 100);

  

  //drawSprites();
  
}



function keyPressed() {
  if (keyCode === 32) {
    var posX = soldier.body.position.x;
    var posY = soldier.body.position.y;
    var angle = soldier.body.angle;

    var bullet= new Ball(posX, posY, 100, 10, angle);

    ball.trajectory = [];
    Matter.Body.setAngle(bullet.body, angle);
    bullet.push(ball);
  }
}

function keyReleased() {
  if (keyCode === 32) {
    if (playerArrows.length) {
      var angle = soldier.body.angle;
      soldier[soldier.length - 1].shoot(angle);
    }
  }
}

function showArrows(index, bullets) {
  bullets[index].display();
 
}

function moveFront() {
  if (keyCode === "FRONT_ARROW") {
    soldier.position.x + 10;
  }
}

