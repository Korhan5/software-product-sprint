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
async function getDataStats() {
  /*fetch('/data').then(response => response.json()).then((stats) => {
    // stats is an object, not a string, so we have to
     //reference its fields to create HTML content
    const statsListElement = document.getElementById('data-stats-container');
    statsListElement.innerHTML = '';
    statsListElement.appendChild(createListElement(stats));
  }); */
  const response = await fetch('/data');
  const colleges = await response.text();
  const statsListElement = document.getElementById('data-stats-container');
  statsListElement.innerHTML = '';
  var breakcollege = colleges[1];
  //Breaks up each string in college to be printed as a <li> element
  for(var i = 2; i < colleges.length; i++){
      if(colleges[i] == ',' || (colleges[i] == ']')){    
      console.log(breakcollege);
      statsListElement.appendChild(createListElement(breakcollege));
      breakcollege = "";
      }else{
          breakcollege += colleges[i];
      }
  }
  //statsListElement.appendChild(createListElement(colleges));
}
/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  console.log(liElement);
  return liElement;
}
