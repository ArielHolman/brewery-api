// const axios = require("axios");
// require("dotenv").config()
// const apiKey = process.env.API_KEY
// const apiKey = "1edb01805b03ec766525435c8a6effd0";
// Build an app that allows a user to find breweries near them.

let arrayOfLows;
let arrayOfHighs;
let arrayRandom;

// eslint-disable-next-line no-undef
window.onload = function () {
  low();
  high();
  random();
};

function initparticles() {
  bubbles();
}

const random = () => {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then((res) => res.json())
    .then((response) => (arrayRandom = response));
};

const low = () => {
  fetch("https://api.punkapi.com/v2/beers?abv_lt=5")
    .then((res) => res.json())
    .then((response) => (arrayOfLows = response));
};

const high = () => {
  fetch(" https://api.punkapi.com/v2/beers?abv_gt=5")
    .then((res) => res.json())
    .then((response) => (arrayOfHighs = response));
};

const clearList = () => {
  allBeer = this.document.getElementsByTagName("UL");
  // eslint-disable-next-line prettier/prettier
  for (i = 0; i < allBeer.length; i++) allBeer[i].innerHTML = null;
};

const randomBeer = () => {
  clearList();
  random();
  const allBeer = this.document.getElementById("all-beer");
  arrayRandom.forEach((beer) => {
    //nullish coalescing
    //template string
    const beerImg = beer.image_url ?? "https://images.punkapi.com/v2/23.png";
    // insert adjacent ang template literals
    const beerInfo = `<li class="beer-item">
    <h4 class="title">${beer.name} - <span class="beer-abv">abv ${beer.abv}%</span></h4>
    <h5 class="beer-tagline">${beer.tagline}</h5>
    <h6 class='beer-description'>${beer.description}</h6>
    <img src=${beerImg}/>
    </li>`;
    allBeer.insertAdjacentHTML("afterbegin", beerInfo);
  });
};

const lowBeers = () => {
  clearList();
  const allBeer = this.document.getElementById("all-beer");
  arrayOfLows.forEach((beer) => {
    const beerInfo = `<li class="beer-item">
    <h4 class="title">${beer.name} - <span class="beer-abv">abv ${beer.abv}%</span></h4>
    <h5 class="beer-tagline">${beer.tagline}</h5>
    <h6 class='beer-description'>${beer.description}</h6>
    </li>`;
    allBeer.insertAdjacentHTML("afterbegin", beerInfo);
  });
};

const highBeers = () => {
  clearList();
  const allBeer = this.document.getElementById("all-beer");
  arrayOfHighs.forEach((beer) => {
    const beerInfo = `<li class="beer-item">
    <h4 class="title">${beer.name} - <span class="beer-abv">abv ${beer.abv}%</span></h4>
    <h5 class="beer-tagline">${beer.tagline}</h5>
    <h6 class='beer-description'>${beer.description}</h6>
    </li>`;
    allBeer.insertAdjacentHTML("afterbegin", beerInfo);
  });
};

// JQUERY bubble stuff

function bubbles() {
  $.each($(".particletext.bubbles"), function () {
    const bubblecount = ($(this).width() / 50) * 10;
    for (let i = 0; i <= bubblecount; i++) {
      const size = $.rnd(40, 80) / 10;
      $(this).append(
        `<span class="particle" style="top:${$.rnd(20, 80)}%; left:${$.rnd(
          0,
          95
        )}%;width:${size}px; height:${size}px;animation-delay: ${
          $.rnd(0, 30) / 10
        }s;"></span>`
      );
    }
  });
}

jQuery.rnd = function (m, n) {
  m = parseInt(m);
  n = parseInt(n);
  return Math.floor(Math.random() * (n - m + 1)) + m;
};

initparticles();
