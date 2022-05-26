// Menu
const menuVertical = document.getElementsByClassName("btn-group-vertical")[0];
menuVertical.style.width = '50%';
menuVertical.style.display = 'flex';
menuVertical.style.flexDirection = 'row';

const buttonMenu = document.querySelectorAll(".btn, .btn-secondary");
buttonMenu.forEach(buttonAssistant => {
  buttonAssistant.style.width = 'auto';
  buttonAssistant.style.borderRadius = '6px';
  buttonAssistant.style.marginRight = '4px';
});


// Header
const headerContainer = document.getElementsByClassName("jumbotron")[0];
headerContainer.style.textAlign = 'right';
headerContainer.style.backgroundColor = '#6c757d';
headerContainer.style.color = 'white';

const buttonMore = headerContainer.getElementsByTagName("a")[0];
buttonMore.style.backgroundColor = '#27a844';
buttonMore.style.border = 'none';


// Cards
const cardContent = Array.from(document.querySelectorAll(".card"));
const cardTitle = Array.from(document.querySelectorAll(".card-title"));

cardTitle.forEach((titleCard) => {
  const cardNext = titleCard.closest("div.card");
  cardNext.dataset['title'] = titleCard.textContent;
});

const cardAnimalTitle = document.querySelector('[data-title="Animais"] .btn');
cardAnimalTitle.classList.remove("btn-primary");
cardAnimalTitle.classList.add("btn-success");

const cardBefore = cardContent[0].offsetParent.parentElement;
cardBefore.insertBefore(cardContent[3].offsetParent, cardContent[0].offsetParent);

const cardAfter = cardContent[1].offsetParent.parentElement;
cardAfter.insertBefore(cardContent[2].offsetParent, cardContent[0].offsetParent.nextSibling);