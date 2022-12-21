// menu close on click
document
  .getElementsByClassName('nav-item')
  .addEventListener('click', toggleOff());

function toggleOff() {
  let toggleButton = document.getElementById('menu-btn');
  if (toggleButton.checked) {
    toggleButton.checked = false;
  } else {
    toggleButton.checked = true;
  }
}
