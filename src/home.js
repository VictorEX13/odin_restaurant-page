class Home {
  createHome = () => {
    const section = document.createElement("section");
    section.classList.add("about");

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

    section.appendChild(firstText);
    section.appendChild(heading);
    section.appendChild(secondText);

    return section;
  };
}

export default Home;
