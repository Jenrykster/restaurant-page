import header from "./header";
import mainPage from "./mainPage";
import menu from "./menu";
import contact from "./contact";

const page = document.querySelector('#content');

page.appendChild(header.createHeader());
page.appendChild(contact.createContact());