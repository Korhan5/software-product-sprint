// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds one of my favorite shows.
 */
function addRandomShow() {
  const shows =
      ['Naruto', 'Hunter x Hunter','How to Get Away with Murder', "Bob's Burgers", 'Chicago Pd', 'SuperStore'];

  // Pick a random greeting.
  const show = shows[Math.floor(Math.random() * shows.length)];

  // Add it to the page.
  const showContainer = document.getElementById('show-container');
  showContainer.innerText = show;
}

async function getName() {
  const response = await fetch('/data');
  const name = await response.text();
  document.getElementById('hello-container').innerText = name;
}

async function getComment() {
  const visibility = document.getElementById("hideorshow");
  const hidelogin = document.getElementById("hidelogin");
  const showlogout = document.getElementById("showlogout");
  const login = await fetch('/login');
  const loginstatus = await login.text();
  const loginName = loginstatus.split("<p");
  if(loginName[0].includes("please sign in to leave a comment.")){
      visibility.style.display = "none";
      hidelogin.style.display = "block";
      showlogout.style.display ="none";
  }else{
   showlogout.style.display= "block";
   hidelogin.style.display= "none";
   visibility.style.display = "block";
  const response = await fetch('/data');
  const comments = await response.json();
  const historyEl = document.getElementById('history');
  for(let i = 0; i < comments.length; i++){
    historyEl.appendChild(createListElement(comments[i]));
  }
  
  }  
}

async function loginIn() {
  const response = await fetch('/login');
  const user = await response.text();
  const username = user.split("<p");
  const infoEl = document.getElementById('logininfo');
  infoEl.appendChild(createListElement(username[0])); 
}


/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
