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

// Here we interact with HTML
const calcularPerimetroCuadrado = () => {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro)
}

const calcularAreaCuadrado = () => {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area)
}

const alturaIsosceles = (lado1, lado2, base) => {
  if (lado1 === lado2 && lado1 !== base ) {
    const altura = Math.sqrt(lado1 ** 2 - (base ** 2)/4)
    alert(`This is an isosceles triangle, its height is ${altura}`)
  }
  else {
    alert("This is not an isosceles triangle")
  }
}
