const loginForm = document.getElementById("Contacto");
const emailInput = document.getElementById("email");
const emailPassword = document.getElementById("password");
const errorMessage = document.getElementById("form-error");

const users = JSON.parse(localStorage.getItem("users")) || [];

const saveToSessionStorage = (user) => {
  sessionStorage.setItem("activeUser", JSON.stringify(user));
};

//Fun para validar que el campo no este vacio
const isEmpty = (input) => {
  return !input.value.trim().length;
};

//Fun para validar que el email existe
const isExistingEmail = (input) => {
  return users.some((user) => user.email === input.value.trim());
};

//Fun para validar que la contraseña que ingresamos es igual a
//la que se uso al registrarse
const isMatchingPass = (input) => {
  const user = users.find((user) => user.email === emailInput.value.trim());

  return user.password === input.value.trim();
};

// Fun para mostrar el error en el UNICO small del form
const showError = (message) => {
  errorMessage.textContent = message;
};

// Funcion para validar estos dos campos
/*
      -1. Chequear si el campo del email esta vacio
      -2. Chequear si el email que ingresamos existe en el array del LS
      -3. Chequear si el campo de password esta vacio
      -4. Chequear que la contrasena coincida
      Si pasa todo esto es porque esta validado
  */

const isValidAccount = () => {
  let valid = false;

  if (isEmpty(emailInput)) {
    showError("Ingresa un mail válido");
    return;
  }

  if (!isExistingEmail(emailInput)) {
    showError("Email inválido");
    return;
  }

  if (isEmpty(passInput)) {
    showError("Ingresa contraseña");
    return;
  }

  if (!isMatchingPass(passInput)) {
    showError("EMail o contraeña incorrectos");
    return;
  }

  alert("Bienvenido, estas en linea!");
  valid = true;
  errorMessage.textContent = "";
  loginForm.reset();
  return valid;
};

const login = (Event) => {
  Event.preveventDefault();
  if (isValidAccount()) {
    const user = users.find((user) => user.email === emailInput.value.trim());
    saveToSessionStorage(user);

    // window.location.href = algo
  }
};

const init = () => {
  loginForm.addEventListener("Submit", login);
};

init();
