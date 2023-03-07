class Main {
  createMain = () => {
    const main = document.createElement("main");
    const section = document.createElement("section");
    section.classList.add("display");

    const article = document.createElement("article");
    article.classList.add("about");

    const firstText = document.createElement("p");
    const heading = document.createElement("h1");
    const secondText = document.createElement("p");

    firstText.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Molestias corrupti voluptatum in consectetur rerum, aliquam
        sapiente repudiandae ipsum asperiores itaque.`;

    heading.textContent = "M. Cee Donaldo";

    secondText.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam dolore
        laudantium culpa omnis adipisci quibusdam eveniet corporis modi quaerat
        incidunt.`;

    article.appendChild(firstText);
    article.appendChild(heading);
    article.appendChild(secondText);

    section.appendChild(article);
    main.appendChild(section);

    return main;
  };
}

export default Main;
