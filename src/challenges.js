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
function splitSentence(arrayDeStrings) {
  
let resultado = arrayDeStrings.split(" ", arrayDeStrings.length);
return resultado;
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
  let biggestNumber = arrayNumber[0];
  let contador = 1;
  for (let index =1; index < arrayNumber.length; index += 1){
    if (biggestNumber === arrayNumber[index]){
      contador +=1;
    }
    if (biggestNumber < arrayNumber[index]){
      biggestNumber = arrayNumber[index];
      contador = 1;
    }
}
return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    if ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))){
    return "cat1";
  }
    else if ((Math.abs(mouse - cat1)) == (Math.abs(mouse - cat2))){
    return 'os gatos trombam e o rato foge';
  }
  else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(array){
  let stringArray = [];
for (let number of array) {
  let isFizz = (number % 3) === 0;
  let isBuzz = (number % 5) === 0;
  if (isBuzz && isFizz) {
    stringArray.push('fizzBuzz');
  } else if (isFizz) {
    stringArray.push('fizz');
  } else if (isBuzz) {
    stringArray.push('buzz');
  } else {
    stringArray.push('bug!');
  }
}
return stringArray;
return array.map((number) => {
  if (number % 3 === 0 && number % 5 === 0) return 'fizzBuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';
  return 'bug!';
});
}
  
// Desafio 9
  function encode(encDec) {
    let newEnc = '';
    for (let i of encDec) {
      if (i === 'a') {
        newEnc += '1';
      } else if (i === 'e') {
        newEnc += '2';
      } else if (i === 'i') {
        newEnc += '3';
      } else if (i === 'o') {
        newEnc += '4';
      } else if (i === 'u') {
        newEnc += '5';
      } else {
        newEnc += i;
      }
    }
    return newEnc;
  }
  
  function decode(encDec) {
    let newDec = '';
    for (let i of encDec) {
      if (i === '1') {
        newDec += 'a';
      } else if (i === '2') {
        newDec += 'e';
      } else if (i === '3') {
        newDec += 'i';
      } else if (i === '4') {
        newDec += 'o';
      } else if (i === '5') {
        newDec += 'u';
      } else {
        newDec += i;
      }
    }
    return newDec;
  }

// Desafio 10
function techList(technology, name) {
    let objetos = 
    name = "Stefany"
    tech = ["React", "Jest", "HTML", "CSS", "JavaScript"]
  
  {
    if (technology.length === 0) {
      return 'Vazio!';
    
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