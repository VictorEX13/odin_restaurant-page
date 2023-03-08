import Home from "./home.js";

class Main {
  createMain = (renderHome) => {
    const main = document.createElement("main");
    const content = document.createElement("div");
    content.classList.add("display");

    if (renderHome) {
      const home = new Home();
      const pageContent = home.createHome();

      content.appendChild(pageContent);
    }

    main.appendChild(content);

    return main;
  };
}

export default Main;
