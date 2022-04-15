const PI = Math.PI
const perimetroCuadrado = (lado) => lado * 4
const areaCuadrado = (lado) => lado * lado

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base
const areaTriangulo = (base, altura) => (base * altura) / 2

const diametroCirculo = (radio) => radio * 2
const perimetroCirculo = (radio) => {
  const diametro = diametroCirculo(radio)
  return diametro * PI;
}
const areaCirculo = (radio) => (radio * radio) * PI;
