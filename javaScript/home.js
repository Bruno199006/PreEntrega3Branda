import { comprarProducto } from "./kart.js";


// creo variables que contengan los elementos del html para poder trabajar con ellos//
const divProductos = document.getElementById("productos");


/// traigo de mi db los productos y le aplico parse para que sea legible por javascript ya que el json es formato string
 export let productosEnStock = JSON.parse(localStorage.getItem("productos"));

//creo un evento con la funcion de creacion de cartas y le paso mis productos anteriormente creados como parametro//
document.addEventListener("DOMContentLoaded",() =>{
    creacionDeCardsProductos(productosEnStock)
})

//funcion para la creacion de cartas a cada uno de los productos de forma dinamica//
export const creacionDeCardsProductos = (productos)=>{

      productos.forEach(producto => {

        let card = document.createElement("div")
        card.className = "producto"
        card.innerHTML = `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
    <div class="card-body">
    <h5 class="card-title">Nombre: ${producto.nombre}</h5>
    <p class="card-text">Categoria: ${producto.categoria}</p>
    <p class="card-text">Precio: $${producto.precio}</p>
    <button id= "comprar${producto.id}" class="btn btn-primary">Comprar</button>
    </div>
    </div>
        `
        // aplico appendchild para aplicar las cartas a la variable que contiene los productos llamados al inicio///
        divProductos.appendChild(card);

         /// primero creo una variable boton comprar para buscar el boton por id y luego creo un evento que al hacer click me de el id de cada prodcuto///
        const botonComprar = document.getElementById(`comprar${producto.id}`);
        botonComprar.addEventListener("click",()=> comprarProducto(producto.id))
      });
    }
