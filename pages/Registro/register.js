const registerForm = document.getElementById("Contacto");
const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("mail");
const passInput = document.getElementById("password");
const phoneInput = document.getElementById("phone");

const users = JSON.parse(localStorage.getItem("users")) || [];

const saveToLocalStorage = () => {
  localStorage.setItem("users", JSON.stringify(users));
};

// ############### Funcione Auxiliares ###################
//Fun para revisar que el campo no este vacio
const isEmpty = (input) => {
  return !input.value.trim().length;
};

//Fun para validar que la long este entre un numero y otro
const isBetween = (input, min, max) => {
  return input.value.length >= min && input.value.length <= max;
};

//Regex para validar el email
const isEmailValid = (input) => {
  const re =
    /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
  //Testing
  return re.test(input.value.trim());
};

//Fun para validar si el mail esta guardado
const isExistingEmail = (input) => {
  return users.some((users) => users.email === input.value.trim());
};

//Fun para revisar la contraseña
const isPassSecure = (input) => {
  const re = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

  return re.test(input.value.trim());
};

//Fun para verificar el telefono
const isPhoneValid = (input) => {
  const re = /^\+?((54)?(9)?[1-9]{1}[0-9]{8})$/;

  return re.test(input.value.trim());
};

//Fun para mostrar el error al validar el input
const showError = (input, msg) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");
  const error = formField.querySelector("small");
  error.style.display = "block";
  error.textContent = msg;
};

//Fun para cuendo todo esta bien
const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");

  const error = formField.querySelector("small");
  error.textContent = "";
};

// ############### Funcione para validar inputs ###################

// Fun para Validar el Nombre
const checkInput = (input) => {
  //Aca va el codigo a chekear
  let valid = false;
  const MIN_CHARACTERS = 3;
  const MAX_CHARACTERS = 15;

  if (isEmpty(input)) {
    return showError(input, "Este campo es obligatorio");
  }

  if (!isBetween(input, MIN_CHARACTERS, MAX_CHARACTERS)) {
    showError(
      input,
      `EL valor debe tener entre ${MIN_CHARACTERS} y ${MAX_CHARACTERS} caracteres`
    );
    return;
  }
  showSuccess(input);
  valid = true;
  return valid;
};

//Fun para validar el email
const checkEmail = (input) => {
  let valid = false;
  if (isEmpty(input)) {
    showError(input, "El email es obligatorio");
    return;
  }
  if (!isEmailValid(input)) {
    showError(input, "El email No es válido");
    return;
  }

  if (isExistingEmail(input)) {
    showError(input, "Este mail ya se encuentra registrado");
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

//Fun para validar la Password
const checkPassword = (input) => {
  let valid = false;

  if (isEmpty(input)) {
    showError(input, "La contraseña es obligatoria");
  }

  if (!isPassSecure(input)) {
    showError(
      input,
      "La contraseña debe tener minimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 simbolo"
    );
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

//Fun para validar el telefono
const checkPhone = (input) => {
  let valid = false;

  if (isEmpty(input)) {
    showError(input, "El telefono es obligatorio");
    return;
  }

  if (!isPhoneValid(input)) {
    showError(input, "El telefono no es válido");
    return;
  }

  showSuccess(input);
  valid = true;
  return valid;
};

//Fun para validar el Form
const validateForm = (Event) => {
  Event.preventDefault();

  let isNameValid = checkInput(nameInput);
  let isLastNameValid = checkInput(lastNameInput);
  let isEmailValid = checkInput(emailInput);
  let isPasswordValid = checkInput(passInput);
  let isPhoneValid = checkInput(phoneInput);

  let isValidForm =
    isNameValid &&
    isLastNameValid &&
    isEmailValid &&
    isPasswordValid &&
    isPhoneValid;

  if (isValidForm) {
    users.push({
      name: nameInput.value,
      lastName: lastNameInput.value,
      email: emailInput.value,
      password: passInput.value,
      phone: phoneInput.value,
    });

    saveToLocalStorage(users);
    alert("Registrado con Éxito");
    window.location.href = "../pages/login.html";
  }
};

//Fun init
const init = () => {
  nameInput.addEventListener("input", () => checkInput(nameInput));
  lastNameInput.addEventListener("input", () => checkInput(lastNameInput));
  emailInput.addEventListener("input", () => checkEmail(emailInput));
  passInput.addEventListener("input", () => checkPassword(passInput));
  phoneInput.addEventListener("input", () => checkPhone(phoneInput));
  registerForm.addEventListener("submit", validateForm);
};

init();
