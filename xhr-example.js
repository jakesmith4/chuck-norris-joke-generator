// Variables
const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const imgContainer = document.querySelector('.container');
const img = document.querySelector('img');
const URL = 'https://api.chucknorris.io/jokes/random';

// Event Listeners
btn.addEventListener('click', () => {
  getData(URL);
});

// XHR Request
function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      const { value: joke } = JSON.parse(xhr.responseText);
      content.textContent = joke;
    } else {
      console.log({
        status: xhr.status,
        text: xhr.statusText,
      });
    }
  };
}
