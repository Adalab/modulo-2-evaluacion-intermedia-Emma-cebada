"use strict";

const numberTest = document.querySelector(".js-numberTest");
const button = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");
const tries = document.querySelector(".js-tries");

//Para que se produzca el número aleatorio.
const getRandom = function () {
  const random = parseInt(Math.random() * 100);
  return random;
};
function toClick() {
  const value = numberTest.value;
  numberTest.innerHTML = value;
  const random = getRandom();
  console.log(random);
  if (numberTest < random) {
    console.log("Demasiado bajo."); 
  } else if (numberTest > ramdom) {
    console.log("Demasiado alto.") 
  } else if (numberTest === ramdom) {
    console.log("Has ganado campeona!!!")
  } else if (numberTest > 100) {
    console.log("El número debe estar entre 1 y 100.")
  } else if (numberTest < 1) {
    console.log("El número debe estar entre 1 y 100.")
  }
}

button.addEventListener("click", toclick);
 

//Para que recoja el número que introduce la usuaria.

function manyTimes(event) {
  const times = document.querySelector(".js-numberTest");
  let input = event.currentTarget.value;
  console.log(input);
}