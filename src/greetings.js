const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logout = document.querySelector("#logout-delete");
const logoutImg = document.querySelector("#logout-delete img");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
let mouseClick = false;

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function onLogoutSubmit(event) {
  event.preventDefault();
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  localStorage.removeItem(USERNAME_KEY, savedUsername);
  greeting.classList.add(HIDDEN_CLASSNAME);
  logoutImg.classList.add(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
  greeting.addEventListener("click", () => {
    if (mouseClick === false) {
      logout.classList.add("xyz-in");
      logout.classList.remove("xyz-out");
      logoutImg.classList.remove(HIDDEN_CLASSNAME);
      mouseClick = true;
      logoutImg.addEventListener("click", onLogoutSubmit);
    } else {
      logout.classList.add("xyz-out");
      logout.classList.remove("xyz-in");
      mouseClick = false;
    }
  });
}
