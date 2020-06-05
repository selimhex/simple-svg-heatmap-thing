'use strict';
const $ = (a) => {return document.querySelector(a)};
const qA = (a) => {return document.querySelectorAll(a)};

//let controlsList = $("aside > ul.controls");
let accentControlsList = $("aside > ul.accentcontrols");
let toggleControlsList = $("aside > ul.togglecontrols");
let heatMaps = qA(".heatmaps *");
let heatMapContainer = $(".heatmaps");
let groups = qA("g[id^=Group_]"); // use this logic to get specific groups: autoPartsToAccent or Heatmaps
groups = qA("svg>g>g"); // better solution would be to name the groups to emphasize

heatMaps.forEach((ele, index) => { // for each heatmap
  let btn = document.createElement("button");   // Create a <button> element
  let li = document.createElement("li");   // Create a li
  btn.innerHTML = ele.dataset.mapname; // mapname of the heatmap to trigger
  btn.dataset.maps = ele.id; // elementID of the heatmap to trigger
  li.appendChild(btn);
  toggleControlsList.appendChild(li); // append buttons in the toggle control menu
});

groups.forEach((ele, index) => { // for each svg>g>g (all direct children groups within the 1st level groups)
  let btn = document.createElement("button");   // Create a <button> element
  let li = document.createElement("li");   // Create a li
  btn.innerHTML = ele.dataset.name; // mapname of the heatmap to trigger
  btn.dataset.maps = ele.id; // elementID of the heatmap to trigger
  li.appendChild(btn);
  accentControlsList.appendChild(li); // append buttons in the accent control menu
});


let toggleButtons = qA(".togglecontrols li button");

toggleButtons.forEach((ele, i) => {
  ele.addEventListener('click', function(event) { //toggle button activity & heatmap visibility
        this.classList.toggle("active");
        $('#'+this.dataset.maps).classList.toggle("hide");
  });
});

let accentControlButtons = qA(".accentcontrols li button");

accentControlButtons.forEach((ele, i) => {
  ele.addEventListener('click', function(event) { //toggle button activity & emphasize important auto parts
        this.classList.toggle("active");
        $('#'+this.dataset.maps).classList.toggle("accented"); // used to use this to UNHIDE
  });
});




/*let pulse_toggler=$("#pulse_toggler");
 pulse_toggler.addEventListener('click', function(event) { //toggle button activity & heatmap visibility
      heatMapContainer.classList.toggle("pulse_container");
      this.classList.toggle("active");
});
*/
