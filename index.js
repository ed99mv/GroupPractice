const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const initialValue = 0;
const sumaTotal= numeros.reduce((acumulator, currentValue)=>acumulator + currentValue, initialValue)
console.log(sumaTotal);