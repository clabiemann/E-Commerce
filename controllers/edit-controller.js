import { productServices } from "../services/products-services.js";

const formulario = document.querySelector("[data-form]");
// obtengo la informacion de la base
const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  
  const imageurl = document.querySelector("[data-url]");
  const name = document.querySelector("[data-nombre]");
  const price = document.querySelector("[data-precio]");
  const description = document.querySelector("[data-description]");

  try {
    const perfil = await productServices.detalleProducto(id);
    if (perfil.name && perfil.imageurl && perfil.price && perfil.description) {
      name.value = perfil.name;
      imageurl.value = perfil.imageurl;
      price.value = perfil.price;
      description.value = perfil.description;
    } else {
      throw new Error();
    }
  } catch (error) {
    alert("Hubo un error 2");
  }
};

obtenerInformacion();
// grabo en la base los cambios realizados
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");
  const imageurl = document.querySelector("[data-url]").value;
  const name = document.querySelector("[data-nombre]").value;
  const price = document.querySelector("[data-precio]").value;
  const description = document.querySelector("[data-description]").value;
  productServices.actualizarProducto(name, imageurl, price, id, description).then(() => {
    alert("Edición concluida");
    window.close();
  });
});
