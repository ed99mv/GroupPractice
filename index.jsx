const list = [1, 2, 3, 4];


const valor = 0;
const sum = list.reduce((accum, current) => accum + current, valor);

console.log(sum);