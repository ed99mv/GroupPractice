const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const initialValue = 0;
const sumaTotal= numeros.reduce((acumulator, currentValue)=>acumulator + currentValue, initialValue)
console.log(sumaTotal);

const numbers = [54, 64, 75, 89, 90, 23, 45];

const reduceTotal = (accumulator, currentV) => {
  return accumulator + currentV;
};

let suma = numbers.reduce(sumaTotal, 0);
console.log(`Lista [${numbers}] el total es: ${suma}`);

