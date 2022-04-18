const lista = [1,1,1,1,1,2,2,2,3,3,3,3,3,3,4,4,4,4]

const listaCount = {};

lista.map((elemento) => {
  if (listaCount[elemento]) {
    listaCount[elemento] += 1;
  } else {
    listaCount[elemento] = 1;
  }
});

// convierte objeto a array
const listaArray = Object.entries(listaCount).sort((elementoA, elementoB) => {
  return elementoA[1] - elementoB[1];
});

const moda = listaArray[listaArray.length - 1][0]
