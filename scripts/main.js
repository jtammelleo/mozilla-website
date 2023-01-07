function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }

 var foxImage = document.querySelector('img');

 foxImage.onclick = () => {
 	const mySrc = myImage.getAttribute("src");
 	if (mySrc === "../mozilla_logo.png") {
 		myImage.setAttribute("src", "../cow.jpeg");
 	} else {
 		myImage.setAttribute("src", "../mozilla_logo.png")
 	}
 };