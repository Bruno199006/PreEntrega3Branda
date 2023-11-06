import { productosEnStock } from "./home.js";

JSON.parse(sessionStorage.getItem("carrito")) === null && sessionStorage.setItem("carrito", JSON.stringify([]))

document.addEventListener("DOMContentLoaded",()=>{
    dibujarCarrito()
})

let carrito = JSON.parse(sessionStorage.getItem("carrito"))


const listaCarrito = document.getElementById("items")
const footCarrito = document.getElementById("totales")
const btnCarrito = document.getElementById("btnCarrito")
const carritoTabla = document.getElementById("carrito")


//evento que muestra la tabla del carrito cuando se le hace click
btnCarrito.addEventListener("click",()=>{
    dibujarCarrito()
    if(carritoTabla.style.display === "block"){
        carritoTabla.style.display = "none"
    }else{
        carritoTabla.style.display = "block"
    }
    
})
//funcion para crear compras de producto//
 export const comprarProducto = (idProducto) => {
    const producto = productosEnStock.find((producto) => producto.id === idProducto)
    const productoEnCarrito = carrito.find((producto) => producto.id === idProducto)
//si el carrito no tiene datos se crea uno nuevo
    if(productoEnCarrito === undefined){
        const nuevoProductoEnCarrito = {
            id:producto.id,
            nombre:producto.nombre,
            precio:producto.precio,
            imagen:producto.imagen,
            categoria:producto.categoria,
            cantidad:1
        }
        carrito.push(nuevoProductoEnCarrito)
        sessionStorage.setItem("carrito",JSON.stringify(carrito))
    }else{
        //si el carrito ya tiene datos agrega cantidades
        const indexProductoCarrito = carrito.findIndex((producto)=> producto.id === idProducto)
        carrito[indexProductoCarrito].cantidad++
        carrito[indexProductoCarrito].precio = producto.precio * carrito[indexProductoCarrito].cantidad

        sessionStorage.setItem("carrito",JSON.stringify(carrito))
    }
    carrito = JSON.parse(sessionStorage.getItem("carrito"))

    alert(`Usted compro el producto ${producto.nombre}`)
    
}
//funcion para crear items en el carrito
const dibujarCarrito = () =>{

    listaCarrito.innerHTML = ''
    carrito.forEach(producto => {
    let body = document.createElement("tr")
    body.className = "producto_carrito"
    body.innerHTML = `
      <th><img id="fotoProductoCarrito" src="${producto.imagen}" class="card-img-top" style="width:40%"; height:30%</th>
      <td>${producto.nombre}</td>   
      <td>${producto.cantidad}</td> 
      <td>$${producto.precio / producto.cantidad}</td> 
      <td>$${producto.precio}</td> 
      <td>
      <button id="+${producto.id}" class = "btn btn-success" >+</button>
      <button id="-${producto.id}" class ="btn btn-danger" >-</button>
      </td>
    `

    listaCarrito.append(body)
    //configuracion de los botones para agregar cantidades 
    const btnAgregar = document.getElementById(`+${producto.id}`)
    const btnRestar = document.getElementById(`-${producto.id}`)

    btnAgregar.addEventListener("click",() => aumentarCantidad(producto.id))
    btnRestar.addEventListener("click",() => restarCantidad(producto.id))
});

dibujarFooter()
}
//funcion para crear el footer del carrito//
const dibujarFooter = () => {
    if(carrito.length > 0){
        footCarrito.innerHTML = ""

        let footer = document.createElement("tr")
        footer.innerHTML = `
        <th><b>Totales:</b></th>
        <td></td>
        <td>${generarTotales().cantidadTotal}</td>
        <td></td>
        <td>$${generarTotales().costoTotal}</td>
        `
        footCarrito.append(footer)
    }else{
        footCarrito.innerHTML = "<h3>No hay productos en el carrito </h3>"
    }
}
//funcion para crear los totales del carrito//
const generarTotales = () => {
    const costoTotal = carrito.reduce((total,{precio}) => total + precio, 0)
    const cantidadTotal = carrito.reduce((total,{cantidad}) => total + cantidad, 0)

    return{
        costoTotal:costoTotal,
        cantidadTotal:cantidadTotal
    }
}

//funcion para agregar cantidades en el carrito desde el boton +
const aumentarCantidad = (idProducto) =>{
 const indexProductoCarrito = carrito.findIndex((producto)=>producto.id === idProducto)
 const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad

 carrito[indexProductoCarrito].cantidad++
 carrito[indexProductoCarrito].precio = precio * carrito[indexProductoCarrito].cantidad

 sessionStorage.setItem("carrito", JSON.stringify(carrito))

 dibujarCarrito()
}

//funcion para restar productos en el carrito con el boton -
const restarCantidad = (idProducto) =>{
    const indexProductoCarrito = carrito.findIndex((producto)=>producto.id === idProducto)
    const precio = carrito[indexProductoCarrito].precio / carrito[indexProductoCarrito].cantidad
   
    carrito[indexProductoCarrito].cantidad--
    carrito[indexProductoCarrito].precio = precio * carrito[indexProductoCarrito].cantidad
   
    if(carrito[indexProductoCarrito].cantidad === 0){
        carrito.splice(indexProductoCarrito,1)
    }
    sessionStorage.setItem("carrito", JSON.stringify(carrito))

    dibujarCarrito()
}