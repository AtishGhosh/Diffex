const autoModeBtn = document.querySelector('#auto-mode-btn');
const lightModeBtn = document.querySelector('#light-mode-btn');
const darkModeBtn = document.querySelector('#dark-mode-btn');

let themeMode = localStorage.getItem('themeMode');
  
const enableLightMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('lightmode');
    document.body.classList.remove('darkmode');
    document.body.classList.remove('default');
    // 2. Update themeMode in localStorage 
    localStorage.setItem('themeMode', 'light');
}

const enableDarkMode = () => {
    // 1. Add the class to the body
    document.body.classList.add('darkmode');
    document.body.classList.remove('lightmode');
    document.body.classList.remove('default');
    // 2. Update darkMode in localStorage
    localStorage.setItem('themeMode', 'dark');
}

const enableAutoMode = () => {
    // 1. Remove the classes from the body
    document.body.classList.add('default');
    document.body.classList.remove('lightmode');
    document.body.classList.remove('darkmode');
    // 2. Update themeMode in localStorage 
    localStorage.setItem('themeMode', null);
}

if (themeMode === 'light') {
    enableLightMode();
} else if (themeMode === 'dark') {
    enableDarkMode();
} else {
    enableAutoMode();
}

lightModeBtn.addEventListener('click', () => {
    enableLightMode();
});
  
darkModeBtn.addEventListener('click', () => {
    enableDarkMode();
});

autoModeBtn.addEventListener('click', () => {
    enableAutoMode();
});