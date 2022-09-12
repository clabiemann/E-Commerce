import {productServices} from "../services/products-services.js";
const nuevoProducto = (name,imageurl,price)=>{
    const card = document.createElement("div");
    const contenido= `
    <div>
        <img class = "productos-imagen"src ="${imageurl}"></img>
        <h3 class = "productos-nombre"> ${name} </h3>
        <h2 class = "productos-precio"> ${price} </h2>
        <a class = "productos-descripcion" href=""> ver producto</a>
        <div class="btn-edicion">
            <button class="btn-editar">Editar</button>
            <button class="btn-eliminar">Eliminar</button>
        </div>
    </div>

        
    
    `;
    card.innerHTML = contenido;
    card.classList.add ("productos");
    return card;
};

const productos = document.querySelector ("[data-productos]")
const render = async() => {
try{
    const listaProductos = await productServices.listaProductos()
    listaProductos.forEach(elemento => {
        productos.appendChild (nuevoProducto(elemento.name, elemento.imageurl, elemento.price, elemento.description));
        
    });
}
catch(erro){

}
}
render() 

       
    

 
        
    
    
    




