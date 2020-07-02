let acc = document.getElementsByClassName('menu-button');
for (var i = 0; i < acc.length; i++) {
	acc[i].onclick = function () {
	this.classList.toggle('click');
	this.nextElementSibling.classList.toggle('show');
}
}




let slider = {
	slides:['1.jpg', '2.jpg', '3.jpg'],
	frame: 0,
// Установка фона для слайдера	
	set: function  (image) {
		document.getElementById('main').style.backgroundImage = `url(${image})`;
	},
// вывод первого слайда	
	init: function(){
		this.set(this.slides[this.frame]);
	},
	
// ВЛЕВО
	left: function(){       
		this.frame--;
		if (this.frame < 0) this.frame = this.slides.length - 1
		
		this.set(this.slides[this.frame]);
		},
	
// Вправо	
	right: function(){
	 this.frame++;
	 if (this.frame == this.slides.length) this.frame = 0; 
	this.set(this.slides[this.frame]);
	},



};

window.onload = function(){
	slider.init();
	setInterval(function(){
		slider.right();
	}, 3500);
};




let btn = document.querySelector('.menu-toggle');
let menu = document.querySelector('.sidebar');
let line = document.querySelector('.toggle');
console.log(line)

 btn.addEventListener('click', ()=>{
 	btn.classList.toggle('clicked')
 	menu.classList.toggle('active');
 })