const modeToggleButton = document.getElementById('mode-toggle');
modeToggleButton.addEventListener(`click`, modeToggle );

function modeToggle() {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    modeToggleButton.innerText = 'Toggle to Light Mode';
  } else {
    modeToggleButton.innerText = 'Toggle to Dark Mode';
  }

  modeToggleButton.classList.toggle(`btn-danger`);
  modeToggleButton.classList.toggle(`btn-primary`);
}