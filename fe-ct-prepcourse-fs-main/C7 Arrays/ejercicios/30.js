function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  if(numeros.length === 0){
    return null;
  }
  let palomaVieja = new Set();
  for(let i = 0; i < numeros.length; i++){
    let numeroxd = numeros[i];
    if(palomaVieja.has(numeroxd)){
      return numeroxd;
    }
    palomaVieja.add(numeroxd);
  }
  return undefined;
}

module.exports = encontrarElementoRepetido;