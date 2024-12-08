function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  console.log("Dark mode class applied:", document.body.classList.contains("dark-mode"));

  if(document.body.classList.contains("dark-mode")){
    setDarkMode();
  }
  else{
    setLightMode(); 
  }
}


function setDarkMode() {
  document.body.style.backgroundColor = '#121212';
  document.body.style.color = '#ffffff';
  localStorage.setItem('theme', 'dark');
}

function setLightMode() {
  document.body.style.backgroundColor = '#ffffff';
  document.body.style.color = '#000000';
  localStorage.setItem('theme', 'light');
}
