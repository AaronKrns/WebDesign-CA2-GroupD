//JavaScript by Moyosore Alao for game web page

//this code is made from online sources NOT MY ORGINAL CODE!
//https://www.educative.io/blog/javascript-snake-game-tutorial ,http://zetcode.com/javascript/snake/ ,https://data-flair.training/blogs/javascript-snake-game-project/ //https://getbootstrap.com/docs/5.0/getting-started/introduction/ ,https://codepen.io/CaioPaiola/pen/GFpuK
//https://medium.com/writeabyte/snake-game-5aaeb80a261a

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const scale = 25;
const rows = canvas.height/ scale;
const columns = canvas.width / scale;

var snake;


//draw
(function setup(){
	 snake = new snake();
	 fruit = new Fruit();
	 fruit.pickLocation();
	 
	 
	 snake.draw();
	 
	 window.setInterval(() => {
		 ctx.clearRect(0,0, canvas.width, canvas.height);
		 fruit.draw();
		 snake.update();
		 snake.draw();
		 
		 if(snake.eat(fruit)){
			 fruit.pickLocation();
		 }
		
		 
		 snake.checkCollision();
		 document.querySelector('.score').innerText = snake.total;
		 
		 
	 }, 250);
}());

window.addEventListener('keydown',((evt) =>{	
	 const direction = evt.key.replace('Arrow','');
	 snake.changeDirection(direction);
}));

//snake
function snake(){
	 this.x = 0;
	 this.y =0;
	 this.xSpeed = scale * 1;
	 this.ySpeed = 0;
	 this.total = 0;
	 this.tail =[];
	 
	 this.draw = function (){
		 ctx.fillStyle = "yellow";
		 //growing adding to the tail
		for(let i = 0; i < this.tail.length; i++) {
			 ctx.fillRect(this.tail[i].x ,this.tail[i].y, scale,scale);
		}
		 
		 
		 
		 
		 ctx.fillRect(this.x, this.y, scale, scale);
	 }
	 
	 this.update =function() {
		 for(let i=0; i< this.tail.length -1;i++){
			 this.tail[i] = this.tail[i+1];
		 }
		 this.tail[this.total -1] = {x: this.x, y:this.y};
		 
		 this.x += this.xSpeed;
		 this.y += this.ySpeed;
		 
		 if(this.x > canvas.width){
			 this.x = 0;
		 }
		 
		 if(this.y > canvas.height){
			 this.y = 0;
		 }
		 
		 if(this.x < 0){
			 this.x = canvas.width;
		 }
		 
		 if(this.y < 0){
			 this.y = canvas.height;
		 }
	 }
	 //movement
	 this.changeDirection = function(direction){
		 switch(direction){
			 case 'Up':
				 this.xSpeed = 0;
				 this.ySpeed = -scale *1;
				 break; 
			case 'Down':
				 this.xSpeed = 0;
				 this.ySpeed = scale *1;
				 break;
		     case 'Left':
				 this.xSpeed = -scale * 1;
				 this.ySpeed = 0;
				 break;
			 case 'Right':
				 this.xSpeed = scale * 1;
				 this.ySpeed = 0;	
				 break;
		 }
	 }
	 //consume food
	 this.eat = function(fruit){
		 if(this.x === fruit.x && this.y === fruit.y){
			 this.total++;
			 return true;
		 }
		 return false;
	 }
	 //check if snake bites itself
	 this.checkCollision =function() {
		 for(var i=0;i< this.tail.length; i++) {
			 if(this.x === this.tail[i].x && this.y === this.tail[i].y) {
				 this.total = 0;
				 this.tail = [];
			 }
		 }
	 }
	 
}

//fruit
function Fruit() {
	 this.x;
	 this.y;
	 //random location gerarated for the fruit ever time eaten 
	 this.pickLocation = function() {
		 this.x = (Math.floor(Math.random() * rows -1) + 1)* scale;
		 this.y = (Math.floor(Math.random() * columns -1) + 1)* scale;
	 }
	 this.draw = function() {
		 ctx.fillStyle = "black";
		 ctx.fillRect(this.x, this.y, scale, scale);
	 }
}