import {productServices} from '../services/products-services.js';
const form = document.querySelector("[data-form]");

form.addEventListener("submit",(evento) => {
    evento.preventDefault();
    const name = document.querySelector("[data-nombre]").value
    const imageurl = document.querySelector("[data-url]").value
    const price = document.querySelector("[data-precio]").value
    const description = document.querySelector("[data-description]").value
    
    productServices.creaProducto(name,imageurl,price,description).then(() => {
        
        alert ("El producto se creó satisfactoriamente")
    })
    .catch((err) => alert(err));
   
});


