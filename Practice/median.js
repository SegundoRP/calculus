const lista = [100, 200, 300, 400, 500, 800]

const calcularMediaAritmetica = (lista) => {
  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  })
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
};

const mitadLista = parseInt(lista.length / 2);

const esPar = (number) => {
  return number % 2 === 0
}

let mediana;

if (esPar(lista.length)) {
  const elemento1 = lista[mitadLista - 1];
  const elemento2 = lista[mitadLista];

  mediana = calcularMediaAritmetica([elemento1, elemento2]);
} else {
  mediana = lista[mitadLista];
}
