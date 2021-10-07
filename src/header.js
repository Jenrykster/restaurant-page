const createHeader = () => {
    let header = document.createElement('header');
    header.classList.add('header');

    let tabContainer = document.createElement('div');

    let mainTab = document.createElement('div');
    mainTab.innerHTML = "Home";
    mainTab.id = 'main-tab';

    let menuTab = document.createElement('div');
    menuTab.innerHTML = "Menu";
    menuTab.id = 'menu-tab';

    let contactTab = document.createElement('div');
    contactTab.innerHTML = "Contact";
    contactTab.id = 'contact-tab';
    
    tabContainer.id = 'tab-container';
    tabContainer.classList.add('tab-container');
    tabContainer.appendChild(mainTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(contactTab);

    let tabWrapper = document.createElement('div');
    tabWrapper.appendChild(tabContainer);
    tabWrapper.classList.add('tab-wrapper');

    let title = document.createElement('h4');
    title.innerHTML = 'REST AU RANT';

    header.appendChild(title);
    header.appendChild(tabWrapper);
    
    return header;
}

export default {
    createHeader
}