const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var thunder1,thunder2,thunder3,thunder4;
var engine,world;
var drops = [];
var rand,umbrella;
var maxDrops = 100;
var thunderCreatedFrame = 0;
var thunderGroup;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
   engine = Engine.create();
   world = engine.world;

   createCanvas(displayWidth,700);
   rand = 0;
   thunderGroup = new Group();
   umbrella = new Umbrella(displayWidth/2,500);
     
   
   if(frameCount % 150 === 0){
       for(var i=0; i<maxDrops; i++){
           drops.push(new createDrop(random(0,displayWidth), random(0,displayWidth)));
       }
   }
}

function draw(){
    Engine.update(engine);
    background(0);
    drawSprites();
    rand=Math.round(random(1,4));
   if(frameCount%20===0){
    thunderCreatedFrame=frameCount;
    thunder = createSprite(random(10,displayWidth-30), random(10,30), 10, 10);
    switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2: thunder.addImage(thunder2);
        break; 
        case 3: thunder.addImage(thunder3);
        break;
        case 4: thunder.addImage(thunder4);
        break;
        default: break;
    }
    //console.log(thunderCreatedFrame);
    console.log(thunder);
    thunderGroup.add(thunder);
    thunder.scale = random(0.3,0.6)
   
}
if(thunderCreatedFrame + 10 ===frameCount && thunderGroup){
    thunderGroup.destroyEach();
}

     

    umbrella.display();

    for(var i=0; i<maxDrops; i++){
         drops[i].showDrop();
         drops[i].updateY();
    }


}   

