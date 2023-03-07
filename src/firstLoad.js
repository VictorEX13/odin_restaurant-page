import Header from "./header.js";
import Main from "./mainContent.js";
import Footer from "./footer.js";

const content = document.querySelector("#content");

const header = new Header();
const main = new Main();
const footer = new Footer();

content.appendChild(header.createHeader());
content.appendChild(main.createMain());
content.appendChild(footer.createFooter());
