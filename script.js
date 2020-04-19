'use strict';
const $ = (a) => {return document.querySelector(a)};
const qA = (a) => {return document.querySelectorAll(a)};

let controlsList = $("aside.controls > ul");
let heatMaps = qA(".heatmaps *");
let heatMapContainer = $(".heatmaps");

heatMaps.forEach((ele, index) => { // for each heatmap
  let btn = document.createElement("button");   // Create a <button> element
  let li = document.createElement("li");   // Create a li
  btn.innerHTML = ele.dataset.mapname; // mapname of the heatmap to trigger
  btn.dataset.maps = ele.id; // elementID of the heatmap to trigger
  li.appendChild(btn);
  controlsList.appendChild(li); // append buttons in the control menu
});

let activatorButtons = qA(".controls ul li button");

activatorButtons.forEach((ele, i) => {
  ele.addEventListener('click', function(event) { //toggle button activity & heatmap visibility
        this.classList.toggle("active");
        $('#'+this.dataset.maps).classList.toggle("hide");
  });
});

let pulse_toggler=$("#pulse_toggler");
pulse_toggler.addEventListener('click', function(event) { //toggle button activity & heatmap visibility
      heatMapContainer.classList.toggle("pulse_container");
      this.classList.toggle("active");
});
