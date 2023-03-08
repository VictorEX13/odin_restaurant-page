class Contact {
  createContact = () => {
    const section = document.createElement("section");
    section.classList.add("contact-container");

    const address = document.createElement("address");
    const phoneNumber = document.createTextNode("123-456-789");
    const lineBreak = document.createElement("br");
    const addressInfo = document.createTextNode(
      "Shinjuku, Shinjuku City, Tokyo 160-0022, Japan"
    );

    address.appendChild(phoneNumber);
    address.appendChild(lineBreak);
    address.appendChild(addressInfo);

    section.appendChild(address);

    return section;
  };
}

export default Contact;
