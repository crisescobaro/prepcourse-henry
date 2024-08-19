function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a > b) {
    [a, b] = [b, a];
  }
  if (a <= 0 && b >= 0) {
    return 0;
  }
  if (a === b) {
    return a;
  }
  return a * productoEntreNúmeros(a + 1, b);
}

module.exports = productoEntreNúmeros;