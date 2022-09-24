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
const eliminarProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
  });
};
const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) =>
      respuesta.json()
    );
};
  const actualizarProducto = (name, imageurl, price, id, description) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, imageurl, price, description }),
    })
      .then((respuesta) => respuesta)
      .catch((err) => alert(err));
  };
export const productServices={
    listaProductos,
    creaProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
} ;