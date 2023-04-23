console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted')
}

let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);


const handleMouse = () => {

	alert('u so pretty');

}

let image = document.querySelector('.catpic');
image.addEventListener('mouseover', handleMouse)