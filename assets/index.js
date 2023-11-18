// Contenedor de Articulos
const productsContainer = document.querySelector(".products-container");
//Boton Ver mas
const showMoreBtn = document.querySelector(".btn-more");

// ###################### Log para renderizar #################

// ######################## Log Ver mas #########################

// Fun para crear el HTML de Articulos #################
const createProductTemplate = (products) => {
  // Agregar el Dataset

  const { id, name, price, category, Description, Tag, cardimg } = products;
  return `<div class="products">
           <img src="${cardimg}" alt="${name}" class="Instruments" />
           
           <!-- Contenedor info -->
           <div class="product.info">
             <!-- Top -->
             <div class="product-top">
                 <p>⭐${Tag}</p>
             </div>
             <!-- Mid -->
               <div class="product-mid">
               <h4>${name}</h4>
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
             <button class="btn-add">Agregar</button>
           </div>
         </div>`;
};
// Funcion para renderizaar productos
const renderProducts = (productList) => {
  productsContainer.innerHTML += productList
    .map(createProductTemplate)
    .join("");
};

// ######################## Log. Ver mas #########################

const showMoreArticles = () => {
  AppState.currentProductsIndex += 1;

  let { products, currentProductsIndex } = AppState;

  renderProducts(products[currentProductsIndex]);
};

// Funcion Inic.
const init = () => {
  renderProducts(AppState.products[0]);
  showMoreBtn.addEventListener("click", showMoreArticles);
};

init();
