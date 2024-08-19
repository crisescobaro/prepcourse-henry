function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let xxx = []
  for(let i = 0; i < array.length; i++){
    xxx.push(array[i] * i)
  }
  return xxx;
}

module.exports = multiplicarElementosPorIndice;
