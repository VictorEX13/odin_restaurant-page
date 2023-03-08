class Menu {
  createMenu = () => {
    const section = document.createElement("section");
    section.classList.add("menu-container");

    const bigMc = document.createElement("article");
    const cheeseMc = document.createElement("article");
    const chickenMc = document.createElement("article");
    const fishMc = document.createElement("article");

    const bigMcTitle = document.createElement("h3");
    bigMcTitle.textContent = "Big M. Cee";
    const cheeseMcTitle = document.createElement("h3");
    cheeseMcTitle.textContent = "Cheese M. Cee";
    const chickenMcTitle = document.createElement("h3");
    chickenMcTitle.textContent = "Chicken M. Cee";
    const fishMcTitle = document.createElement("h3");
    fishMcTitle.textContent = "Fish M. Cee";

    const bigMcDesc = document.createElement("p");
    bigMcDesc.textContent =
      "Bun, beef patty, lettuce, Big M. Cee sauce, cheese, pickles, onions";
    const cheeseMcDesc = document.createElement("p");
    cheeseMcDesc.textContent =
      "Bun, beef patty, cheese, ketchup, pickles, onions, mustard";
    const chickenMcDesc = document.createElement("p");
    chickenMcDesc.textContent =
      "Bun, chicken fillet, potato roll, pickles, salted butter";
    const fishMcDesc = document.createElement("p");
    fishMcDesc.textContent = "Bun, fish fillet, tartar sauce, cheese";

    bigMc.appendChild(bigMcTitle);
    cheeseMc.appendChild(cheeseMcTitle);
    chickenMc.appendChild(chickenMcTitle);
    fishMc.appendChild(fishMcTitle);

    bigMc.appendChild(bigMcDesc);
    cheeseMc.appendChild(cheeseMcDesc);
    chickenMc.appendChild(chickenMcDesc);
    fishMc.appendChild(fishMcDesc);

    section.appendChild(bigMc);
    section.appendChild(cheeseMc);
    section.appendChild(chickenMc);
    section.appendChild(fishMc);

    return section;
  };
}

export default Menu;
