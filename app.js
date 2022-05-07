const gyaanNum = document.querySelector(".wrapper p span");
const gyaan = document.querySelector(".wrapper h1");
const button = document.querySelector(".round");
const api = `https://api.adviceslip.com/advice`;

function changeAdvise() {
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data);
      gyaan.textContent = data.slip.advice;
      gyaanNum.textContent = data.slip.id;
    })
    .catch((err) => alert(`Sorry😢,Something went wrong!`));
}

window.addEventListener("load", changeAdvise);
button.addEventListener("click", changeAdvise);
