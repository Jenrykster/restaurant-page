const createMainPage = () =>{
    let background = document.createElement('main');

    let title = document.createElement('h1');
    title.innerHTML = "REST AU RANT";

    background.appendChild(title);
}

export default {
    createMainPage,
}