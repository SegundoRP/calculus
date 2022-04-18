const calcularMediaAritmetica = (lista) => {
  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  })
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
};
