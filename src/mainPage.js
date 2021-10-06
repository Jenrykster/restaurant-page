import './styles.css';

const createMainPage = () =>{
    let main = document.createElement('main');
    let title = document.createElement('h1');
    title.innerHTML = "REST AU RANT";

    main.classList.add('background');
    main.appendChild(title);

    return main;
}

export default {
    createMainPage,
}