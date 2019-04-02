  var x;
  var y;

function setup() {
  createCanvas(600,600);
  x=300;
  y=300;
}

function draw() {
  background(100);
  ellipse(x,y, 80, 80);
  ellipse(x-15,y-10,8,8);
  ellipse(x+15,y-10,8,8);
  rect(x-10,y+10,20,10);

  x--;
  y--;
}

function Color(){
  var count=Math.floor(Math.random()*3);
  
  if(count==0){
    fill('rgb(255,0,0)');
  }else if(count==1){
    fill('rgb(255,255,0)');
  }else if(count==2){
    fill('rgb(255,0,255)');
  }else if(count==3){
    fill('rgb(255,255,255)');
  }
}
