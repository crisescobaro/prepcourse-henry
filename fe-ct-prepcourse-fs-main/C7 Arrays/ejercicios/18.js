function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let result = 0;
  for(let i = 0; i < resultadosTest.length; i++){
    result += resultadosTest[i]
  }
  let promedio = result / resultadosTest.length;
  return promedio;
}

module.exports = promedioResultadosTest;
