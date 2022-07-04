// variables globales
let nombre = prompt('¿Cómo es tu nombre?')
let card = document.getElementById("card")
// obj constructor
class Producto{
    constructor(nombre, precio, categoria, id){
        this.nombre = nombre
        this.precio = precio
        this.categoria = categoria
        this.id = id
    }
}
// OBJETOS DECO
const almohadonesVarios = new Producto ("Almohadones Varios", 5600, 20, "deco", 001)
const setMesaYBancos = new Producto ("Set Mesa y Bancos", 78999, 3, "deco", 002)
// OBJETOS CUADROS
const cuadroVerde = new Producto ("Cuadro Verde", 5600, 15, "cuadros", 003)
const cuadroBlanco = new Producto ("Cuadro Blanco", 8000, 7, "cuadros", 004)
// OBJETOS VELAS
const tallRibbedTower = new Producto ("Tall Ribbed Tower", 700, 20, "velas", 005)
const shortRibbedTower = new Producto ("Short Ribbed Tower", 1000, 3, "velas", 006)
// FUNCION COMPRA
function compra(){
    let pregunta = prompt(`Hola ${nombre} ¿Qué te gustaría comprar? \n 1- Deco \n 2- Cuadros \n 3- Velas`)
    let eleccion = pregunta.toUpperCase()
    if(eleccion == 1 || eleccion == 'DECO'){
        let opciones = parseFloat(prompt(`Nuestras opciones son: \n 1. ${almohadonesVarios.nombre}: $${almohadonesVarios.precio} \n 2. ${setMesaYBancos.nombre}: $${setMesaYBancos.precio} \n`))
        switch(opciones){
            case 1:
                card.innerHTML = 
                `<img src="../img/almohadones2.jpeg" style="width: 18rem; height: 18rem;" class="card-img-top" alt="almohadones varios">
                <div class="card-body">
                  <h5 class="card-title">${almohadonesVarios.nombre}</h5>
                  <p class="card-text">$${almohadonesVarios.precio}</p>
                  <a href="#" class="btn btn-primary">Comprar</a>
                </div>`
                break
            case 2:
                card.innerHTML = 
                `<img src="../img/mesaConBancos.jpeg" style="width: 18rem; height: 18rem; class="card-img-top" alt="mesa y bancos">
                <div class="card-body">
                  <h5 class="card-title">${setMesaYBancos.nombre}</h5>
                  <p class="card-text">$${setMesaYBancos.precio}</p>
                  <a href="#" class="btn btn-primary">Comprar</a>
                </div>`
                break
            default:
                alert("Opcion no valida")
                compra()
        }
    }else if(eleccion == 2 || eleccion == 'CUADROS'){
        let opciones = parseInt(prompt(`Nuestras opciones son: \n 1. ${cuadroVerde.nombre}: $${cuadroVerde.precio} \n 2. ${cuadroBlanco.nombre}: $${cuadroBlanco.precio}`))
        switch(opciones){
            case 1:
                card.innerHTML = 
                `<img src="../img/cuadro2.jpeg" style="width: 18rem; height: 18rem; class="card-img-top" alt="cuadro verde">
                <div class="card-body">
                  <h5 class="card-title">${cuadroVerde.nombre}</h5>
                  <p class="card-text">$${cuadroVerde.precio}</p>
                  <a href="#" class="btn btn-primary">Comprar</a>
                </div>`
                break
            case 2:
                card.innerHTML = 
                `<img src="../img/comoda.jpeg" style="width: 18rem; height: 18rem; class="card-img-top" alt="cuadro blanco">
                <div class="card-body">
                  <h5 class="card-title">${
                    cuadroBlanco.nombre}</h5>
                  <p class="card-text">$${
                    cuadroBlanco.precio}</p>
                  <a href="#" class="btn btn-primary">Comprar</a>
                </div>`
                break
            default: 
                alert("Opcion no valida")
                compra()
        }
    }else if(eleccion == 3 || eleccion == 'VELAS'){
        let opciones = parseInt(prompt(`Nuestras opciones son: \n 1. ${tallRibbedTower.nombre}: $${tallRibbedTower.precio} \n 2. ${shortRibbedTower.nombre}: $${shortRibbedTower.precio}`))
        switch(opciones){
            case 1:
                card.innerHTML = 
                `<img src="../img/velas8.jpeg" style="width: 18rem; height: 18rem; class="card-img-top" alt="vela">
                <div class="card-body">
                  <h5 class="card-title">${tallRibbedTower.nombre}</h5>
                  <p class="card-text">$${tallRibbedTower.precio}</p>
                  <a href="#" class="btn btn-primary">Comprar</a>
                </div>`
                break
            case 2:
                card.innerHTML = 
                `<img src="../img/velas12.jpeg" style="width: 18rem; height: 18rem; class="card-img-top" alt="vela">
                <div class="card-body">
                  <h5 class="card-title">${shortRibbedTower.nombre}</h5>
                  <p class="card-text">$${shortRibbedTower.precio}</p>
                  <a href="#" class="btn btn-primary">Comprar</a>
                </div>`
                break
            default: 
                alert("Opcion no valida")
                compra()
        }
    }else{
            alert('Ingrese un valor válido')
            compra()
    }
}
compra()