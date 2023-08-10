//  REDUCE FUNCTION
const numbers = [54, 64, 75, 89, 90, 23, 45];

const reduceTotal = (accumulator, currentV) => {
  return accumulator + currentV;
};

let suma = numbers.reduce(sumaTotal, 0);
console.log(`Lista [${numbers}] el total es: ${suma}`);
