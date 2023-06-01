import cardData from './card-data.json' assert {type: 'json'};
const populateCards = () => {
    const cards = document.getElementsByClassName('card');
    const cardsArray = Array.from(cards);
    cardsArray.map((card, index) => {
        card.style.innerText = `url(${cardData[index].text})`;
        card.style.backgroundImage = `url(${cardData[index].image.attributes.url})`;
    })
}

populateCards();