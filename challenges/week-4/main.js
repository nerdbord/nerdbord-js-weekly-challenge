import cardData from './card-data.json' assert {type: 'json'};
const populateCards = () => {
    const cards = document.getElementsByClassName('card');
    const cardTextDivs = document.getElementsByClassName('card-text');
    const cardsArray = Array.from(cards);
    const cardTextDivsArray = Array.from(cardTextDivs);
    cardsArray.map((card, index) => {
        cardTextDivsArray[index].innerText = cardData[index].text;
        card.style.backgroundImage = `url(${cardData[index].image.attributes.url})`;
    })
}

populateCards();