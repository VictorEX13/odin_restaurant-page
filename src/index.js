import "./style.css";
import "./firstLoad.js";

import Home from "./home.js";
import Menu from "./menu.js";
import Contact from "./contact.js";

const home = document.querySelector(".home");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");

const display = document.querySelector(".display");

home.addEventListener("click", () => {
  const home = new Home();
  const content = home.createHome();

  display.replaceChildren();
  display.appendChild(content);
});

menu.addEventListener("click", () => {
  const menu = new Menu();
  const content = menu.createMenu();

  display.replaceChildren();
  display.appendChild(content);
});

contact.addEventListener("click", () => {
  const contact = new Contact();
  const content = contact.createContact();

  display.replaceChildren();
  display.appendChild(content);
});
