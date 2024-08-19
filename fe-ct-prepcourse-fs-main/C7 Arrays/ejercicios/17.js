function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let zzzz = 0;
  for(let i = 0; i < arrayOfNums.length; i++){
    zzzz += arrayOfNums[i];
  }
  return zzzz;
}

module.exports = agregarNumeros;
