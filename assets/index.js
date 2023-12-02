// Contenedor de Articulos
const productsContainer = document.querySelector(".products-container");
//Boton Ver mas
const showMoreBtn = document.querySelector(".btn-more");
// Contenedor Categorias
const categoriesContainer = document.querySelector(".categories");
// El HTML Collection de todas las categorias
const categoriesList = document.querySelectorAll(".category");
// Cart
const cartBtn = document.querySelector(".cart-label");
// Boton para abrir/cerra menu
const menuBTN = document.querySelector(".menu-label");
// Carrito Div
const cartMenu = document.querySelector(".cart");
// Menu Hamburguer
const barsMenu = document.querySelector(".navbar-list");
// Overlay
const overlay = document.querySelector(".overlay");
//Bubble
const cartBubble = document.querySelector(".bubble");
// Total COmpra Carrito
const total = document.querySelector(".total");
//Boton Comprar
const buyBTN = document.querySelector(".btn-buy");
// Boton borrar
const deleteBTN = document.querySelector(".btn-delete");
// Cart Container
const productsCart = document.querySelector(".cart-container");
// Chart de success
const successModal = document.querySelector(".modal-chart");
//Conf el carrito
let cart = JSON.parse(localStorage.getItem("cart")) || [];

//Fun para guardar en el LS
const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

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
              <button class="btn-add"
              data-id='${id}'
              data-name='${name}'
              data-price='${price}'
              data-img='${cardimg}'
              >Agregar</button>
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

//Fun para ocultar boton cargar mas
//cuando este una categoria seleccionada
const setShowMoreArticlesSeen = () => {
  if (AppState.activeFilter) {
    showMoreBtn.classList.remove("hidden");
  }

  showMoreBtn.classList.add("hidden");
};

// ############# Log Filtros ################
//Fun cambiar estado de los botones Categorias
const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  // console.log(AppState);
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

// Fun para cambiar estado de filtros activo
const changeFilterState = (btn) => {
  AppState.activeFilter = btn.dataset.category;
  changeBtnActiveState(AppState.activeFilter);
  setShowMoreArticlesSeen(AppState.activeFilter);
};

// Fun filtrar productos
const renderFilteredProducts = () => {
  const filteredProducts = instrumentData.filter(
    (products) => products.category === AppState.activeFilter
  );
  // console.log(filteredProducts);
  renderProducts(filteredProducts);
};

// Fun para aplicar filtros
const applyFilter = ({ target }) => {
  if (!isInactiveFilterBtn(target)) return;
  changeFilterState(target);
  productsContainer.innerHTML = "";
  if (AppState.activeFilter) {
    renderFilteredProducts();
    AppState.currentProductsIndex = 0;
    return;
  }
  renderProducts(AppState.products[0]);
};

//Fun para saber si el elemento presionado es un
//boton de categoria y no esta activo
const isInactiveFilterBtn = (Element) => {
  return (
    Element.classList.contains("category") &&
    !Element.classList.contains("active")
  );
};

// ############# Log Menu/ Carrito Modal ################
const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    return;
  }

  overlay.classList.toggle("show-overlay");
};

const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }

  overlay.classList.toggle("show-overlay");
};

//Fun para cerrar el menu cuando se clickea fuera
const closeWhenclickOut = () => {
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

//fun cerrar menues, cuando scrolling
const closeWhenScrolling = () => {
  if (
    barsMenu.classList.contains("open-menu") &&
    cartMenu.classList.contains("open-cart")
  ) {
    return;
  }

  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};
//---------------------------------------------
// ############# Log Carrito ################
//------------------------------------------------
//Fun para crear e template dentro del cart
const createCartProductTemplate = (cartProduct) => {
  const { price, id, img, name, quantity } = cartProduct;

  return `
    <div class="cart-item"> 
    <img src="${img}"
      class="cart-img"
      alt="${name}"
    />
    <div class="item-info">
      <h3 class="item-title">${name}</h3>
      <p class="item-bid">Sub-total:</p>
      <span class="item-price">${price}$</span>
    </div>
  <!-- Botones -->
  <div class="item-handler">
      <span class="quantity-handler down" data-id=${id}>-</span>
      <span class="item-quantity">${quantity}</span>
      <span class="quantity-handler up" data-id=${id}>+</span>
    </div>
  </div>
  `;
};

//Render Carrito
const renderArticle = () => {
  if (!cart.length) {
    productsCart.innerHTML =
      '<p class="empty-msg"> Sin articulos agregados</p>';
    return;
  }

  productsCart.innerHTML = cart.map(createCartProductTemplate).join("");
};

// Fun para obtener total de compra
const getCartTotal = () => {
  return cart.reduce((acc, cur) => acc + Number(cur.price) * cur.quantity, 0);
};

//Fun para obtener el total del carrito
const showCartTotal = () => {
  total.innerHTML = `${getCartTotal().toFixed(2)} USD`;
};

//Fun para actualizar la burbuja segun la cantidad de items agregados

const renderCartBubble = () => {
  cartBubble.textContent = cart.reduce((acc, cur) => acc + cur.quantity, 0);
};

//Fun para habilitar/ Deshabilitar botones
const disableBTN = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
  } else {
    btn.classList.remove("disabled");
  }
};

//Fun oara ejecutar funciones necesarias para el edo del cart
const updateCartState = () => {
  saveCart();
  renderArticle();
  showCartTotal();
  renderCartBubble();
  disableBTN(buyBTN);
  disableBTN(deleteBTN);
};

const addProduct = (Event) => {
  if (!Event.target.classList.contains("btn-add")) return;
  const products = Event.target.dataset;
  //Crear if para verificar que el producto a
  //Agregar no este en el carrito
  if (isExistingCartProduct(products)) {
    addUnitToProduct(products);
    successChartadd("Se agrego una unidad del articulo");
  } else {
    createCartProduct(products);
    successChartadd("Articulo agregado exitosamente");
  }

  updateCartState();
  console.log(cart);
};

//Fun para agregar una unidad al producto
const addUnitToProduct = (products) => {
  cart = cart.map((cartProduct) =>
    cartProduct.id === products.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct
  );
};

//Fun para saber si un producto ya existe en el Cart
const isExistingCartProduct = (products) => {
  return cart.find((item) => item.id === products.id);
};

//Fun crear objeto con la info del producto que se quiere agregar al carrito
const createCartProduct = (products) => {
  cart = [...cart, { ...products, quantity: 1 }];
};

//Fun para mostrar el cartel modal
const successChartadd = (msg) => {
  successModal.classList.add("active-chart");
  successModal.textContent = msg;

  setTimeout(() => {
    successModal.classList.remove("active-chart");
  }, 1300);
};

// Fun para manejar el evento click de + en el
// producto del cart
const handlePlusBtnEvent = (id) => {
  const existingCartArticle = cart.find((item) => item.id === id);
  addUnitToProduct(existingCartArticle);
};

// Fun para manejar el evento click de - en el
// producto del cart
const handleMinusBtnEvent = (id) => {
  const existingCartArticle = cart.find((item) => item.id === id);

  if (existingCartArticle.quantity === 1) {
    if (window.confirm("confirma que quieres eliminar el articulo")) {
      removeProductFromCart(existingCartArticle);
    }
    return;
  }

  substractArticleUnit(existingCartArticle);
};

const substractArticleUnit = (existingCartArticle) => {
  cart = cart.map((products) => {
    return products.id === existingCartArticle.id
      ? { ...products, quantity: Number(products.quantity) - 1 }
      : products;
  });
};

const removeProductFromCart = (existingCartArticle) => {
  cart = cart.filter((products) => products.id !== existingCartArticle.id);
  updateCartState();
};

const handleQuantity = (Event) => {
  if (Event.target.classList.contains("up")) {
    handlePlusBtnEvent(Event.target.dataset.id);
  } else if (Event.target.classList.contains("down")) {
    handleMinusBtnEvent(Event.target.dataset.id);
  }

  //Para todos los casos
  updateCartState();
};

const resetCartItems = () => {
  cart = [];
  updateCartState();
};

const completeCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};

const completeBuy = () => {
  completeCartAction("Deseas finalizar la compra", "Gracias por tu compra!");
};

const deleteCart = () => {
  completeCartAction(
    "Desea borrar todo el carrito?",
    "Sin productos en el carrito"
  );
};

// Funcion Inic.
const init = () => {
  renderProducts(AppState.products[0]);
  showMoreBtn.addEventListener("click", showMoreArticles);
  categoriesContainer.addEventListener("click", applyFilter);

  cartBtn.addEventListener("click", toggleCart);
  menuBTN.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeWhenclickOut);
  window.addEventListener("scroll", closeWhenScrolling);

  productsContainer.addEventListener("click", addProduct);
  productsCart.addEventListener("click", handleQuantity);
  document.addEventListener("DOMContentLoaded", renderArticle);

  buyBTN.addEventListener("click", completeBuy);
  deleteBTN.addEventListener("click", deleteCart);
  disableBTN(buyBTN);
  disableBTN(deleteBTN);
  renderCartBubble(cart);
};

init();
