const createMenu = () => {
    let menu = document.createElement('div');

    let menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    let title = document.createElement('h1');
    title.innerHTML = "MENU";

    menu.appendChild(title);
    menuGrid.appendChild(createMenuItem('Cakiby', 999, 'https://cdn.shopify.com/s/files/1/0163/5948/9636/files/1Y6A4999_2048x2048.jpg'));
    menuGrid.appendChild(createMenuItem('Generic Cake', 20, 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg'));
    menuGrid.appendChild(createMenuItem('Slime Bun', 0, 'https://lh3.googleusercontent.com/proxy/C8xh6znRaw4RIaLXCh0bfLtDtvVdtGBKujoITwx0YR51S-qIiuWRWyv2fEHmM_0PI2-BIXzm85gJ1ZobExPEwbBlMj-gn0Dgoc8dtRCBHl8q'));
    menuGrid.appendChild(createMenuItem('Cake of lies', -50, 'https://i.redd.it/l5k6smf8qy151.png'));
    menu.appendChild(menuGrid);
    menu.classList.add('menu');
    return menu;
}
const createMenuItem = (name, price, picture) => {
    let newItem = document.createElement('div');

    let itemName = document.createElement('h3');
    itemName.innerHTML = name;

    let itemPrice = document.createElement('h4');
    itemPrice.innerHTML = `$${price}`;

    let itemPic = document.createElement('img');
    itemPic.src = picture;

    newItem.appendChild(itemName);
    newItem.appendChild(itemPic);
    newItem.appendChild(itemPrice);
    newItem.classList.add('menu-item');
    return newItem;
}

export default {
    createMenu
}