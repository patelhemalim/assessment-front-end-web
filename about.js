console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("Form has submitted successfully!")
	//console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



function image(evt){
	alert("You are special!");
}

let img=document.querySelector('#cat');
img.addEventListener('mouseover',image);