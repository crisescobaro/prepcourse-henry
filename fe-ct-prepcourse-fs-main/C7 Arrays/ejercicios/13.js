function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let num = [];
  for(let i = 0; i < array.length; i++){
    if(typeof array[i] === "number" && array[i] % 2 === 0){
      num.push(array[i]);
    }
  }
  return num;
}

module.exports = filtrarNumerosPares;
