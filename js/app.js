// variables globales
let nombre = prompt('¿Cómo es tu nombre?')
let totalCompra = document.getElementById("totalCompra")
const carrito = []
// obj constructor
class Producto{
    constructor(nombre, precio, foto, categoria, id){
        this.nombre = nombre
        this.precio = precio
        this.foto = foto
        this.categoria = categoria
        this.id = id
    }
}
// OBJETOS DECO
const almohadonesVarios = new Producto ("Almohadones Varios", 5600, "./img/almohadones2.jpeg", "deco", 1)
const setMesaYBancos = new Producto ("Set Mesa y Bancos", 78999, "./img/mesaConBancos.jpeg", "deco", 2)
// OBJETOS CUADROS
const cuadroVerde = new Producto ("Cuadro Verde", 5600, "./img/cuadro2.jpeg", "cuadros", 3)
const cuadroBlanco = new Producto ("Cuadro Blanco", 8000, "./img/comoda.jpeg", "cuadros", 4)
// OBJETOS VELAS
const tallRibbedTower = new Producto ("Tall Ribbed Tower", 700, "./img/velas8.jpeg", "velas", 5)
const shortRibbedTower = new Producto ("Short Ribbed Tower", 1000, "./img/velas12.jpeg", "velas", 6)
// LISTA PRODUCTOS
const listaProductos = [
  almohadonesVarios,
  setMesaYBancos,
  cuadroVerde,
  cuadroBlanco,
  tallRibbedTower,
  shortRibbedTower,
]
let card = document.getElementById("card")
for(const producto of listaProductos){
  let columna = document.createElement("div")
  columna.className = "col-md-2 col-sm-12 mt-5"
  columna.id = `columna-${producto.id}`
  columna.innerHTML = 
                `<div class="card">
                  <img src=${producto.foto} style="width: 10rem; height: 10rem;" class="card-img-top" alt="almohadones varios">
                  <div class="card-body">
                    <h5 class="card-title">${producto.nombre} \n Codigo producto: ${producto.id}</h5>
                    <p class="card-text">$${producto.precio}</p>
                  </div>
                </div>`
  card.append(columna)
}
// FUNCION SEGUIR COMPRANDO
function seguirComprando(){
  let repregunta = prompt('¿Desea comprar algo mas? (si/no)')
  let eleccion = repregunta.toUpperCase()
  if(eleccion == 'SI'){
      compra()
  }else if(eleccion == 'NO'){
      const total = totalCarrito()
      totalCompra.innerHTML = `<p>El total de su compra es de: <b>$${total}</b></p>`
  }else{
      alert('Ingrese una opción valida')
      seguirComprando()
  }
}
//FUNCION TOTAL CARRITO
function totalCarrito(){
  return carrito.reduce((acc, el) => acc + el, 0)
}
// FUNCION COMPRA
function compra(){
    let codigo = parseInt(prompt(`Hola ${nombre} ingrese el codigo del producto que le gustaría comprar`))
    if(codigo == 1){
      carrito.push(almohadonesVarios.precio)
      seguirComprando()
    }else if(codigo == 2){
      carrito.push(setMesaYBancos.precio)
      seguirComprando()
    }else if(codigo == 3){
      carrito.push(cuadroVerde.precio)
      seguirComprando()
    }else if(codigo == 4){
      carrito.push(cuadroBlanco.precio)
      seguirComprando()
    }else if(codigo == 5){
      carrito.push(tallRibbedTower.precio)
      seguirComprando()
    }else if(codigo == 6){
      carrito.push(shortRibbedTower.precio)
      seguirComprando()
    }
    else{
      alert('Ingrese un valor válido')
      compra()
    }
}
compra()