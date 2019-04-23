var Hero = function(){
  this.hp=100;
  this.mp=50;
}

Hero.prototype.greeting = function(){
  console.log('Hello!');
};

Hero.prototype.setHP = function(hp){
  this.hp = hp;
};

var john = new Hero();
john.greeting();
