import './styles.css';
import FoodImage from './img/food2.jpg';

const createMainPage = () =>{
    let main = document.createElement('main');
    let background = document.createElement('div');
    let title = document.createElement('h1');
    
    // TITLE AND BACKGROUND
    title.innerHTML = "REST AU RANT";
    title.classList.add('title-text');
    
    background.classList.add('background');
    background.appendChild(title);
    // -------------------------------

    let contentContainer = document.createElement('div');
    let textContainerElement = document.createElement('div');

    let sectionTitle = document.createElement('h2');
    sectionTitle.innerHTML = "LOREM AU RANT";

    let sectionText = document.createElement('p');
    sectionText.innerHTML = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet malesuada sapien. Proin in"'
    
    textContainerElement.appendChild(sectionTitle);
    textContainerElement.appendChild(sectionText);
    textContainerElement.classList.add('center');
    textContainerElement.classList.add('text-container');
    let foodImgElement = new Image();

    foodImgElement.src = FoodImage;
    contentContainer.appendChild(foodImgElement);

    contentContainer.appendChild(textContainerElement);
    contentContainer.classList.add('content-container');

    main.appendChild(background);
    main.appendChild(contentContainer);

    return main;
}

export default {
    createMainPage,
}