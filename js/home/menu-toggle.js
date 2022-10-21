// menu close on click
function toggleOff() {
  let toggleButton = document.getElementById("menu-box");
  if (toggleButton.checked) {
    toggleButton.checked = false;
  } else {
    toggleButton.checked = true;
  }
}
