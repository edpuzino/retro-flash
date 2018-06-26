
'use strict';
function formSubmit(){
  var userName = document.getElementById('username').value;
  console.log(userName);
  addLocalStorageOfUserName(userName);
  var remove = document.getElementById('login');
  remove.parentNode.removeChild(remove);
}

function addLocalStorageOfUserName(user) {
  //var localStorageData = JSON.stringify(user);
  localStorage.setItem('userName', user);/*
  localStorage.getItem('userName', localStorageData);
  JSON.parse(localStorageData);*/
}

// move to app.js