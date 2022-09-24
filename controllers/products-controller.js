import {productServices} from "../services/products-services.js";
const nuevoProducto = (name,imageurl,price,id,description)=>{
    const card = document.createElement("div");
    const contenido= `
    <div>
        <img class = "productos-imagen"src ="${imageurl}"></img>
        <h3 class = "productos-nombre"> ${name} </h3>
        <h2 class = "productos-precio"> ${price} </h2>
        <a class = "productos-detalle" href="../detalle.html?id=${id}" target ="blank"> Ver detalle </a>
        <div class="btn-edicion">
            <a href="../edit.html?id=${id}" class="btn-editar" target ="blank">Editar</a>
            <button class="btn-eliminar" type ="button" id="${id}">Eliminar</button>
        </div>
    </div>
    `;
    card.innerHTML = contenido;

       
            


    // Elimino un registro
    const btn = card.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        productServices.eliminarProducto(id).then((respuesta) => {
            alert("Se eliminará el producto");
        })
    .catch((error) => alert("Ocurrió un error al eliminar"));
    });
    return card;
};

const productos = document.querySelector ("[data-productos]")
    productServices.listaProductos().then((data) => {
        data.forEach(({name, imageurl, price, id, description}) => {
        const nuevaLinea = nuevoProducto (name, imageurl, price, id, description);    
        productos.appendChild (nuevaLinea);
        
    });
    
})

.catch((error) => alert("Ocurrió un error al buscar datos en la base"));




       
    

 
        
    
    
    




