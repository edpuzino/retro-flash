'use strict';

function addUserName(event) {
  var userName = document.getElementById('username').value;
  localStorage.setItem('userName', userName);
  console.log(userName);
  var remove = document.getElementById('login');
  remove.style.display = 'none';
  event.preventDefault();
}



var submit = document.getElementById('submit');
submit.addEventListener('click', addUserName);
