var myHeading = document.querySelector('h1');
myHeading.textContent = 'Fences and Girls';
var myButton = document.querySelector('button');

document.querySelector('body').onclick = function() {
  alert('Might want to poke yourself instead.');
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Fences and Girls and ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Fences and Girls and ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}