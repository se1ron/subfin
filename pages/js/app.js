
let acc = document.getElementsByClassName('menu-button');
for (var i = 0; i < acc.length; i++) {
	acc[i].onclick = function () {
	this.classList.toggle('click');
	this.nextElementSibling.classList.toggle('show');
}
}







let btn = document.querySelector('.menu-toggle');
let menu = document.querySelector('.sidebar');
let line = document.querySelector('.toggle');


 btn.addEventListener('click', ()=>{
 	btn.classList.toggle('clicked')
 	menu.classList.toggle('active');
 })



let links = document.querySelectorAll('.nav-link');

for( anchor of links){
	if(anchor){
		anchor.addEventListener('click', function(event) {
			event.preventDefault();
			anchorID = this.getAttribute('href');
			document.querySelector(anchorID).scrollIntoView( {behavior: 'smooth', block:'start'})
		})
	}
}



