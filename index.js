const list = [1, 2, 3, 4];

const valor = 0;
const sum = list.reduce(
  (accumu, value) => accumu + value,
  valor
);

console.log(sum);
