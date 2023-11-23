import { comprarProducto } from "./kart.js";

document.addEventListener("DOMContentLoaded",() =>{
  obtenerProductos();
})
//creo la funcion asincrona para poder recibir los datos de mi json local
async function obtenerProductos() {
  try {
    const response = await fetch("./db/products.json");
    const productos = await response.json()

    console.log(productos);


    localStorage.setItem("productos",JSON.stringify(productos))
    //una vez que se reciben los datos aplico la funcion para la creacion de cartas llamando a la funcion 

    creacionDeCardsProductos();

  } catch (error) {
    console.error("Se produjo un error:", error);
  }
}


//funcion para crear las cartas de productos de forma dinamica
const creacionDeCardsProductos = () =>{
  const divProductos = document.getElementById("productos");
  const productosDeLocalStorage = localStorage.getItem("productos");
  const productos = JSON.parse(productosDeLocalStorage);

  //creo el forEach para recorrer cada elemento y aplicarle las cards 
  productos.forEach(producto => {
//se crea un elemento div,se le asigna una clase y luego se construye el html interno
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






