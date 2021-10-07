const createContact = () => {
    let contact = document.createElement('div');

    let title = document.createElement('a');
    title.href = 'https://github.com/Jenrykster/';
    title.innerHTML = "CONTACT";

    contact.style.display = 'flex';
    contact.style.alignItems = 'center';
    contact.style.justifyContent = 'center';
    contact.style.height = '80vh';

    contact.appendChild(title);

    return contact;
}

export default {
    createContact
}