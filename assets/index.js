// Contenedor de Articulos
const productsContainer = document.querySelector(".products-container");
//Boton Ver mas
const showMoreBtn = document.querySelector(".btn-more");
// Contenedor Categorias
const categoriesContainer = document.querySelector(".categories");
// El HTML Collection de todas las categorias
const categoriesList = document.querySelectorAll(".category");
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

// Fun para sabaer si es el final de array
const isLastIndexOf = () => {
  return AppState.currentProductsIndex === AppState.productsLimit - 1;
};

// Fun para renderizar al presionar ver mas

const showMoreArticles = () => {
  AppState.currentProductsIndex += 1;

  let { products, currentProductsIndex } = AppState;

  renderProducts(products[currentProductsIndex]);

  if (isLastIndexOf()) {
    showMoreBtn.classList.add("hidden");
  }
};

// ############# Log Filtros ################
//Fun cambiar estado de los botones Categorias
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  console.log(AppState);

  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

// Fiun para cambiar estado de filtros activo
const changeFilterState = (btn) => {
  AppState.activeFilter = btn.dataset.category;
  changeBtnActiveState(AppState.activeFilter);
};

// Fiun para aplicar filtros
const applyFilter = ({ target }) => {
  if (!isInactiveFilterBtn(target)) return;
  changeFilterState(target);
};

//Fun para saber si el elemento presionado es un
//boton de categoria y no esta activo
const isInactiveFilterBtn = (Element) => {
  return (
    Element.classList.contains("category") &&
    !Element.classList.contains("active")
  );
};

// Funcion Inic.
const init = () => {
  renderProducts(AppState.products[0]);
  showMoreBtn.addEventListener("click", showMoreArticles);
  categoriesContainer.addEventListener("click", applyFilter);
};

init();
