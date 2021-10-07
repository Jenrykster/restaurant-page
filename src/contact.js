const createContact = () => {
    let contact = document.createElement('div');

    let title = document.createElement('h1');
    title.innerHTML = "CONTACT";

    contact.appendChild(title);

    return contact;
}

export default {
    createContact
}