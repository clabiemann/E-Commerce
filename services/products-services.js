const listaProductos = () => fetch("http://localhost:3000/producto").then((respuesta)=> respuesta.json());
const creaProducto = (name,imageurl,price,description)=>{
    return fetch('http://localhost:3000/producto', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({name,imageurl,price,id: uuid.v4(),description})
    })
    .then(respuesta => {
        if (respuesta.ok) {
            return respuesta.body
    }
       
    throw new Error('No fue posible crear el producto')
})
}
export const productServices={
    listaProductos,
    creaProducto
} ;