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