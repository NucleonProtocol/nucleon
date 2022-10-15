var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = window.innerWidth, canvas.height = window.innerHeight-100;
canvas.style.background = "rgba(22, 22, 33,1)";

var ctx = canvas.getContext('2d');

const colors = ['#D9EAF9','#ffffff', '#a1a19b', '#bcbdcc'];

var Star = function (x,y,radius,size,color) {
	this.radians = Math.random() * (Math.PI *2);

	this.x = x + Math.cos(this.radians) * radius;
	this.y = y + Math.sin(this.radians) * radius;

	this.radius = radius;
	this.color = color;
	this.size = size;

	this.last = {x:x, y : y}
	this.alpha = 0, this.temp = 0;
	this.update = () => {
		const lastPos = {x:this.x, y:this.y}

		if(this.temp > 1) {
			this.alpha -= 0.005;
		} else {
			this.temp += 0.008;
			this.alpha += 0.008;
		}

		if(this.alpha <= 0) this.alpha =0

		this.radians += Math.random() * 0.01;	
		this.x = this.last.x + Math.cos(this.radians) * this.radius;
		this.y = this.last.y + Math.sin(this.radians) * this.radius;

		this.draw(lastPos);
	}

	this.draw = (lastPos) => {
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle = this.color;
		ctx.lineWidth = this.size;
		ctx.moveTo(lastPos.x, lastPos.y);
		ctx.lineTo(this.x, this.y );
		ctx.globalAlpha = this.alpha
		ctx.stroke();
		ctx.fill();
		ctx.closePath();
		ctx.restore();
	}
}

function Group (x, y, num) {
	this.stars = [];
	var moreRand = minMax(100, canvas.width);
	for(var i = 0; i < num; i++) {
		this.stars.push(new Star(x,y,Math.random() * moreRand,Math.random() *5,getRandomColor()));
	}
	this.update = function () {
		this.stars.forEach((star) =>{
			star.update();
		});
	}
}

function getRandomColor() {
	var x = parseInt(Math.random() * (colors.length));
	return colors[x]
}

function minMax (min, max) {
	return Math.floor( Math.random () * (max - min + 1)) + min;
}

var g = [];
var added = [];
function init() {
	let i = 0;
	g.push(new Group(canvas.width/2, canvas.height/2, 100));	
	var ee = setInterval(function () {
		// var posX = Math.random() * canvas.width;
		// var posY = Math.random() * canvas.height;
		g.push(new Group(canvas.width/2, canvas.height/2, 100));		
		if(g.length > 8) {
			g.splice(0,1);
		}
	},2600)
}

function animate() {
	requestAnimationFrame(animate);
	ctx.globalAlpha = 1;
	ctx.fillStyle = 'rgba(22, 22, 33,0.05)'
	ctx.fillRect(0,0,canvas.width, canvas.height);
	g.forEach(function(s) {
		s.update();	
	})
	added.forEach(function(s) {
		s.update();	
	})
}

init();
animate();

// addEventListener('mousedown', function (e) {
// 	var posX = Math.random() * canvas.width;
// 	var posY = Math.random() * canvas.height;
// 	added.push(new Group(e.clientX, e.clientY, 100));
// });
addEventListener('resize', function () {
	g.forEach(function (s) {
		s.stars = [];
	})
	g = [];
	added = [];
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	init();
})