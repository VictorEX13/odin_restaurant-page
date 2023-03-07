class Header {
  #createListItem = (text) => {
    const item = document.createElement("li");

    const itemLink = document.createElement("a");
    itemLink.textContent = text;
    itemLink.setAttribute("href", "#");

    item.appendChild(itemLink);

    return item;
  };

  createHeader = () => {
    const header = document.createElement("header");
    const div = document.createElement("div");
    const nav = document.createElement("nav");
    const list = document.createElement("ul");

    const home = this.#createListItem("Home");
    const menu = this.#createListItem("Menu");
    const contact = this.#createListItem("Contact");

    list.appendChild(home);
    list.appendChild(menu);
    list.appendChild(contact);

    nav.appendChild(list);

    const h2 = document.createElement("h2");
    h2.textContent = "M. Cee Donaldo";

    div.appendChild(h2);
    header.appendChild(div);
    header.appendChild(nav);

    return header;
  };
}

export default Header;
