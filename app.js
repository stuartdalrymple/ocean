// import React from "react";
// import { createRoot } from "react-dom/client";

// const container = document.getElementById("app");
// const root = createRoot(app);

const animals = {
  dolphin: {
    image: '/images/dolphin.jpg',
    facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
  },
  lobster: {
    image: '/images/lobster.jpg',
    facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
  },
  starfish: {
    image: '/images/starfish.jpg',
    facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
  }
}

// get a fact for an animal
function getFact(animal) {
  const randomIndex = Math.floor(Math.random() * animals[animal].facts.length);
  const funFact = animals[animal].facts[randomIndex];
  return funFact
}

// // on click of an animal, display the fact in a paragraph
// const dolphin = document.querySelector(".dolphin");
// dolphin.addEventListener("click", () => console.log(getFact('dolphin')));

for (let animalImg in animals) {
  const animal = document.querySelector(`.${animalImg}`);
  animal.addEventListener("click", () => displayFact(getFact(animalImg)));
}

function displayFact(fact) {
  let findDiv = document.querySelector('.newDiv')

  if (!findDiv) {
    let targetDiv = document.querySelector('.background');
    let newDiv = document.createElement('div');
    newDiv.classList.add('newDiv');
    targetDiv.appendChild(newDiv)
    console.log(newDiv)
  }
  
  let gotDiv = document.querySelector('.newDiv');

  gotDiv.innerHTML = `
    <p>${fact}</p> 
    <style> 
      .newDiv {
        position: absolute;
        top: 20%;
        background-color: white;
        border-radius: 5px;
        padding: 2px 10px;
        font-size: 1.5rem;
      } 
    </style>`
}