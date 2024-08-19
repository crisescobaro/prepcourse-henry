function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   let nuevoarr1 = [];
   for(let i = 0; i < arrayOfStrings.length; i++){
      if(arrayOfStrings[i].startsWith("a")){
        nuevoarr1.push(arrayOfStrings[i]);
      }
   }
   return nuevoarr1;
}

module.exports = filter;
