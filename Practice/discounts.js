const calcularPrecioConDescuento = (precio, descuento) => {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100

  return precioConDescuento
}

const onClickButtonPriceDiscount = () => {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "The price with discount is $" + precioConDescuento;
}

const onClickButtonPriceDiscount2 = () => {
  const inputPrice = document.getElementById("InputPrice2");
  const priceValue = inputPrice.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value

  const coupons = [{name: "Normal", discount: 15}, {name: "Premium", discount: 20}, {name: "Vip", discount:25}]

  const userCoupon = coupons.find((coupon) => coupon.name.toLowerCase() === couponValue.toLowerCase())

  if (!userCoupon) {
    alert(`The coupon ${couponValue} is not valid`)
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento)
    const resultP = document.getElementById("ResultP2");
    resultP.innerText = "The price with discount is $" + precioConDescuento;
  }
}
