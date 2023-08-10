const numberList = [34, 56, 67, 89, 55, 18, 21];

const sumaTotal = (accumulator, currentV) => {
  return accumulator + currentV;
};

let suma = numberList.reduce(sumaTotal, 0);
console.log(`Lista [${numberList}] el total es: ${suma}`);
