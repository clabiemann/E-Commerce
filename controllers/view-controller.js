import { productServices } from "../services/products-services.js";
const url = new URL(window.location);
const id = url.searchParams.get("id");
const description = document.querySelector("[data-ver]");
const perfil = await productServices.detalleProducto(id);
description.value = perfil.description;
console.log (perfil.name);


