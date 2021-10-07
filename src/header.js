const createHeader = () => {
    let header = document.createElement('header');
    header.classList.add('header');

    let tabContainer = document.createElement('div');

    let mainTab = document.createElement('div');
    mainTab.innerHTML = "Home";

    let menuTab = document.createElement('div');
    menuTab.innerHTML = "Menu";

    let contactTab = document.createElement('div');
    contactTab.innerHTML = "Contact";

    tabContainer.classList.add('tab-container');
    tabContainer.appendChild(mainTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(contactTab);

    let title = document.createElement('h4');
    title.innerHTML = 'REST AU RANT';

    header.appendChild(title);
    header.appendChild(tabContainer);

    mainTab.classList.add('selected');
    
    return header;
}

export default {
    createHeader
}