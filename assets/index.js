// Contenedor de Articulos
const productsContainer = document.querySelector(".products-container");

// Fun para crear el HTML de Articulos
const createProductTemplate = (product) => {
  // Agragar el DAtaset

  const { id, name, price, category, Description, Tag, cardimg } = product;
  return `<div class="products">
           <img src="${product.cardimg}" alt="${name}" class="Instruments" />
           
           <!-- Contenedor info -->
           <div class="product.info">
             <!-- Top -->
             <div class="product-top">
                 <span>⭐</span>
                 <p>${Tag}</p>
             </div>
             <!-- Mid -->
               <div class="product-mid">
               <h3>${name}</h3>
               <ul>
                 <li class="list-desc">Bajo de 4 cuerdas. </li>
                 <li class="list-desc">Posee 22 trastes de tamaño Jumbo.</li>
                 <li class="list-desc">Tipo pasivo.</li>
                 <li class="list-desc">Ideal para niños, adultos de pequeña estatura.</li>
               </ul>
             </div>
             <!-- Botton -->
             <div class="product-bot">
               <p>Precio Actual:</p> <b>${price}$</b>
             </div>
             <button class="btn-add">Add to Chart</button>
           </div>
         </div>`;
};

// Funcion para renderizaar productos
const renderProducts = (productList) => {
  productsContainer.innerHTML = productList.map(createProductTemplate).join("");
};

// Funcion Inic.
const init = () => {
  console.log(AppState.products[0]);
  renderProducts(AppState.products[0]);
};

init();
