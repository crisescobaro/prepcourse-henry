function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let MesesEncontrados = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      MesesEncontrados.push(array[i])
    }
  }
  if(MesesEncontrados.includes("Enero") && MesesEncontrados.includes("Marzo") && MesesEncontrados.includes("Noviembre")){
   return MesesEncontrados 
  } else {
    return "No se encontraron los meses pedidos"
  }
}

module.exports = mesesDelAño;
