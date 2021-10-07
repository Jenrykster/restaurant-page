const createMenu = () => {
    let menu = document.createElement('div');

    let title = document.createElement('h1');
    title.innerHTML = "MENU";

    menu.appendChild(title);
    menu.appendChild(createMenuItem('Test 1', 100, 'https://cdn.shopify.com/s/files/1/0163/5948/9636/files/1Y6A4999_2048x2048.jpg'));

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