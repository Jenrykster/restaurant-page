import header from "./header";
import mainPage from "./mainPage";
import menu from "./menu";

const page = document.querySelector('#content');

page.appendChild(header.createHeader());
page.appendChild(menu.createMenu());