const salariosPais = pais.map(persona => persona.salary)

const salariosSort = salariosPais.sort((salaryA, salaryB) => salaryA - salaryB)

const esPar = (numero) => numero % 2 === 0

const calcularMediaAritmetica = (lista) => {
  const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
    return valorAcumulado + nuevoElemento;
  })
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
};

const medianaSalarios = (lista) => {
  const mitad = parseInt(lista.length / 2);

  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2])
    return mediana
  } else {
    const personaMitad = lista[mitad];
    return personaMitad
  }
}

const medianaGeneral = medianaSalarios(salariosSort);

const spliceStart = (salariosSort.length * 90) / 100;
const spliceCount = salariosSort.length - spliceStart
const salariosTop10 = salariosSort.splice(spliceStart, spliceCount)

const medianaTop10 = medianaSalarios(salariosTop10);

console.log({medianaGeneral, medianaTop10});
