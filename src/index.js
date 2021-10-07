import header from "./header";
import mainPage from "./mainPage";

const page = document.querySelector('#content');

page.appendChild(header.createHeader());
page.appendChild(mainPage.createMainPage());