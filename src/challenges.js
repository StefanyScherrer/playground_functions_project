// Desafio 1
function compareTrue(param1, param2) {
  
  if (param1 === true && param2 === true){ 
    return true;
  }
  else if (param1 === false && param2 === false){
    return false;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let triangulo = (base * height)/2; {
  return (triangulo);
  }
}

// Desafio 3
function splitSentence() {
  
   
}

// Desafio 4

function concatName(arrayStrings) {
  
  return arrayStrings[arrayStrings.length -1] + "," + ' ' + arrayStrings[0]
}


// Desafio 5
function footballPoints(wins, ties) {
    return (wins * 3 + ties);

}  
    
// Desafio 6
function highestCount(arrayNumber) {
  let biggestNumber = arrayNumber[0]
  for (let index =0; index < arrayNumber.lenght; index += 1){
    if (array[index] > biggestNumber) {
      biggestNumber = array[index]
    }
      }
  for (let index = 0; index < arrayNumber.lenght; index +=1) {
    if (array[index] === biggestNumber);
    return biggestNumber + 1
  }
 
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};