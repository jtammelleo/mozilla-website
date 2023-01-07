function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }

 var foxImage = document.querySelector('img');

 foxImage.onclick = sayOuch;