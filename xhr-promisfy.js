// Variables
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const img = document.querySelector('img');
const category = document.querySelector('.category');
const formControls = [...document.querySelectorAll('.form-control')];

// Radio Buttons
const all = document.getElementById('all');
const dev = document.getElementById('dev');
const animal = document.getElementById('animal');
const career = document.getElementById('career');
const celebrity = document.getElementById('celebrity');
const explicit = document.getElementById('explicit');
const fashion = document.getElementById('fashion');
const food = document.getElementById('food');
const history = document.getElementById('history');
const money = document.getElementById('money');
const movie = document.getElementById('movie');
const music = document.getElementById('music');
const political = document.getElementById('political');
const religion = document.getElementById('religion');
const science = document.getElementById('science');
const sport = document.getElementById('sport');
const travel = document.getElementById('travel');

// URLS
const allURL = 'https://api.chucknorris.io/jokes/random';
const devURL = 'https://api.chucknorris.io/jokes/random?category=dev';
const animalURL = 'https://api.chucknorris.io/jokes/random?category=animal';
const careerURL = 'https://api.chucknorris.io/jokes/random?category=career';
const celebrityURL =
  'https://api.chucknorris.io/jokes/random?category=celebrity';
const explicitURL = 'https://api.chucknorris.io/jokes/random?category=explicit';
const fashionURL = 'https://api.chucknorris.io/jokes/random?category=fashion';
const foodURL = 'https://api.chucknorris.io/jokes/random?category=food';
const historyURL = 'https://api.chucknorris.io/jokes/random?category=history';
const moneyURL = 'https://api.chucknorris.io/jokes/random?category=money';
const movieURL = 'https://api.chucknorris.io/jokes/random?category=movie';
const musicURL = 'https://api.chucknorris.io/jokes/random?category=music';
const politicalURL =
  'https://api.chucknorris.io/jokes/random?category=political';
const religionURL = 'https://api.chucknorris.io/jokes/random?category=religion';
const scienceURL = 'https://api.chucknorris.io/jokes/random?category=science';
const sportURL = 'https://api.chucknorris.io/jokes/random?category=sport';
const travelURL = 'https://api.chucknorris.io/jokes/random?category=travel';

// Event Listener
document.body.addEventListener('change', () => {
  const rightCategory = formControls.find((item) => {
    if (item.firstElementChild.checked === true) {
      return item;
    }
  });
  console.log(rightCategory.textContent);
  category.textContent = rightCategory.textContent + ' Jokes';
});

// Event Listener
btn.addEventListener('click', () => {
  // getData(allURL);
  runChecked();
  content.scrollIntoView();
});

// Function runChecked
function runChecked() {
  ifChecked(all, allURL);
  ifChecked(dev, devURL);
  ifChecked(animal, animalURL);
  ifChecked(career, careerURL);
  ifChecked(celebrity, celebrityURL);
  ifChecked(explicit, explicitURL);
  ifChecked(fashion, fashionURL);
  ifChecked(food, foodURL);
  ifChecked(history, historyURL);
  ifChecked(money, moneyURL);
  ifChecked(movie, movieURL);
  ifChecked(music, musicURL);
  ifChecked(political, politicalURL);
  ifChecked(religion, religionURL);
  ifChecked(science, scienceURL);
  ifChecked(sport, sportURL);
  ifChecked(travel, travelURL);
}

// Function ifChecked
function ifChecked(category, url) {
  if (category.checked) {
    getData(url)
      .then((response) => displayData(response))
      .catch((err) => console.log(err));
  }
}

// XHR Request
const xhr = new XMLHttpRequest();
function getData(url) {
  return new Promise((resolve, reject) => {
    xhr.open('GET', url);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject({
          status: xhr.status,
          text: xhr.statusText,
        });
      }
    };
  });
}

function displayData(data) {
  const { value: joke } = JSON.parse(data);
  content.textContent = joke;
  img.classList.add('shake-img');
  const random = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove('shake-img');
  }, random);
}
