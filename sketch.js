var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var  bikes, bike1, bike2;
var bike1imge,bike2image;

function preload(){
  ground = loadImage("images/ground.jpg");
  track = loadImage("images/track.jpg")
  
  bike1image = loadImage("images/bike.jpg");
  bike2image = loadImage("images/bike1.png");

  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background(255,255,255);
  
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  drawSprites();
}
