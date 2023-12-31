// constants Ids
const adviceNumber = document.getElementById('advice-num');
const advice = document.getElementById('advice');

// button
const button = document.getElementById('dice');


// api url
const apiUrl = "https://api.adviceslip.com/advice";

async function generateAdvice(){
    const response = await fetch(apiUrl);
    const data = await response.json();

    const id = data.slip.id;
    const adviceText = data.slip.advice;

    adviceNumber.innerHTML = `Advice #${id}`;
    advice.innerHTML = adviceText;

}

function runOnPageLoad() {
    generateAdvice();
}

document.addEventListener('DOMContentLoaded', runOnPageLoad);

button.addEventListener("click", generateAdvice);