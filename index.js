let arrayOfLows;
let arrayOfHighs;
let arrayRandom;

// make fetch calls for all buttons
// eslint-disable-next-line no-undef
window.onload = function () {
  low();
  high();
  random();
};

//background bubbles
function initparticles() {
  bubbles();
}

// fetch a random beer
const random = () => {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then((res) => res.json())
    .then((response) => (arrayRandom = response));
};

// fetch a low abv beer
const low = () => {
  fetch("https://api.punkapi.com/v2/beers?abv_lt=5")
    .then((res) => res.json())
    .then((response) => (arrayOfLows = response));
};

// fetch a high abv beer
const high = () => {
  fetch(" https://api.punkapi.com/v2/beers?abv_gt=5")
    .then((res) => res.json())
    .then((response) => (arrayOfHighs = response));
};

// clear the list before you load new list
const clearList = () => {
  allBeer = this.document.getElementsByTagName("UL");
  // eslint-disable-next-line prettier/prettier
  for (i = 0; i < allBeer.length; i++) allBeer[i].innerHTML = null;
};

// select a random beer
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

// select a low abv beer
const lowBeers = () => {
  clearList();
  const allBeer = this.document.getElementById("all-beer");

  arrayOfLows.forEach((beer) => {
    const beerImg = beer.image_url ?? "https://images.punkapi.com/v2/23.png";
    const beerInfo = `<li class="beer-item">
    <h4 class="title">${beer.name} - <span class="beer-abv">abv ${beer.abv}%</span></h4>
    <h5 class="beer-tagline">${beer.tagline}</h5>
    <h6 class='beer-description'>${beer.description}</h6>
    <img src=${beerImg}/>
    <h4> ------------------------------------------------------------ </h4>
    </li>`;
    allBeer.insertAdjacentHTML("afterbegin", beerInfo);
  });
};

// select a high abv beer
const highBeers = () => {
  clearList();
  const allBeer = this.document.getElementById("all-beer");

  arrayOfHighs.forEach((beer) => {
    const beerImg = beer.image_url ?? "https://images.punkapi.com/v2/23.png";
    const beerInfo = `<li class="beer-item">
    <h4 class="title">${beer.name} - <span class="beer-abv">abv ${beer.abv}%</span></h4>
    <h5 class="beer-tagline">${beer.tagline}</h5>
    <h6 class='beer-description'>${beer.description}</h6>
    <img src=${beerImg}/>
    <h4> ------------------------------------------------------------ </h4>
    </li>`;
    allBeer.insertAdjacentHTML("afterbegin", beerInfo);
  });
};

// jQuery bubble background

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
