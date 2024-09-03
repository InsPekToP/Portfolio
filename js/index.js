let menu = document.querySelector('#menu');
let openMenu = document.querySelector('header');
let navLinks = document.querySelectorAll('.navbar'); // выбираем все элементы навигации

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    openMenu.classList.toggle('active')
}

//Добавляем обработчик события для каждого элемента навигации
navLinks.forEach(link => {
    link.onclick = () => {
        menu.classList.remove('fa-times'); // закрываем меню
        openMenu.classList.remove('active'); // закрываем меню
    }
});

let translations = {}; // Объект для хранения переводов
let currentLanguage = 'en'; // Язык по умолчанию

// Функция для загрузки переводов из JSON-файла
async function loadTranslations() {
  try {
    const response = await fetch('translations.json');
    translations = await response.json();
    applyTranslations(); // Применяем переводы после загрузки
  } catch (error) {
    console.error('Ошибка загрузки переводов:', error);
  }
}

// Функция для применения переводов на странице
function applyTranslations() {
  document.getElementById('name').textContent = translations[currentLanguage].name;
//   document.getElementById('about-text').textContent = translations[currentLanguage].about;
//   document.getElementById('contact-text').textContent = translations[currentLanguage].contact;
}

// Функция для смены языка
function changeLanguage(lang) {
  currentLanguage = lang;
  applyTranslations();
}

// Загрузка переводов при загрузке страницы
window.onload = loadTranslations;