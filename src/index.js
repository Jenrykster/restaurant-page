import header from "./header";
import mainPage from "./mainPage";
import menu from "./menu";
import contact from "./contact";

const page = document.querySelector('#content');

page.appendChild(header.createHeader());
page.appendChild(mainPage.createMainPage());

let selected = 'main-tab';

startPage();

function startPage(){
    const tabSelector = document.querySelectorAll('#tab-container div');

    for(let element of tabSelector){
        element.onclick = selectTab;
        element.classList.remove('selected');
    }

    document.querySelector(`#${selected}`).classList.add('selected');
}

function changePage(selection){
    page.innerHTML = '';
    page.appendChild(header.createHeader());
    startPage();
    switch (selection) {
        case 'main-tab':
            page.appendChild(mainPage.createMainPage());
            break;
        case 'menu-tab':
            page.appendChild(menu.createMenu());
            break
        case 'contact-tab':
            page.appendChild(contact.createContact());
            break
        default:
            break;
    }
}
function selectTab(e){
    selected = e.target.id;
    changePage(selected);
}