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

// Массив с ссылками на резюме для разных языков
const resumes = {
  en: {
      href: "resume/CV_Holykov_developer_en.docx",
      download: "CV_Holykov-developer_en.docx"
  },
  ru: {
      href: "resume/CV_Holykov_developer_ru.docx",
      download: "CV_Holykov-developer_ru.docx"
  },
  pl: {
      href: "resume/CV_Holykov_developer_pl.docx",
      download: "CV_Holykov-developer_pl.docx"
  }
};

// Функция смены языка, обновления текста и ссылки на резюме
function changeLanguage(lang) {
  currentLanguage = lang;  // обновляем текущий язык

  // Обновляем текст на странице в зависимости от выбранного языка
  applyTranslations();

  // Обновляем ссылку на резюме в зависимости от выбранного языка
  updateResumeLink();
}

// Обновляем ссылку на резюме
function updateResumeLink() {
  const resumeLink = document.getElementById('resume_link');
  const resumeData = resumes[currentLanguage];  // получаем данные о резюме для текущего языка

  // Обновляем href и download атрибуты
  if (resumeData) {
      resumeLink.href = resumeData.href;
      resumeLink.download = resumeData.download;
  }
}


// Функция для применения переводов на странице
function applyTranslations() {
  document.getElementById('name').textContent = translations[currentLanguage].name;
  document.getElementById('developer').textContent = translations[currentLanguage].developer;
  document.getElementById('about_lg').textContent = translations[currentLanguage].about_lg;
  document.getElementById('education_lg').textContent = translations[currentLanguage].education_lg;
  document.getElementById('proects_lg').textContent = translations[currentLanguage].proects_lg;
  document.getElementById('home_lg').textContent = translations[currentLanguage].home_lg;
  document.getElementById('contact_lg').textContent = translations[currentLanguage].contact_lg; 
  document.getElementById('greeting').textContent = translations[currentLanguage].greeting;
  document.getElementById('i_am').textContent = translations[currentLanguage].i_am;
  document.getElementById('python_developer').textContent = translations[currentLanguage].python_developer;
  document.getElementById('full_stack_developer').textContent = translations[currentLanguage].full_stack_developer;
  document.getElementById('freelancer').textContent = translations[currentLanguage].freelancer;
  document.getElementById('designer').textContent = translations[currentLanguage].designer;
  document.getElementById('about_me_btn').textContent = translations[currentLanguage].about_me_btn;
  document.getElementById('about_me_text').textContent = translations[currentLanguage].about_me_text;
  document.getElementById('about_me_value').textContent = translations[currentLanguage].about_me_value;
  document.getElementById('name_label').textContent = translations[currentLanguage].name_label;
  document.getElementById('name_text').textContent = translations[currentLanguage].name_text;
  document.getElementById('age_text').textContent = translations[currentLanguage].age_text;
  document.getElementById('age_value').textContent = translations[currentLanguage].age_value;
  document.getElementById('profession_text').textContent = translations[currentLanguage].profession_text;
  document.getElementById('profession_value').textContent = translations[currentLanguage].profession_value;
  document.getElementById('qualification_text').textContent = translations[currentLanguage].qualification_text;
  document.getElementById('qualification_value').textContent = translations[currentLanguage].qualification_value;
  document.getElementById('download_cv').textContent = translations[currentLanguage].download_cv;
  document.getElementById('experience').textContent = translations[currentLanguage].experience;
  document.getElementById('work_experience').textContent = translations[currentLanguage].work_experience;
  document.getElementById('projects_count').textContent = translations[currentLanguage].projects_count;
  document.getElementById('projects_label').textContent = translations[currentLanguage].projects_label;
  document.getElementById('satisfied_clients').textContent = translations[currentLanguage].satisfied_clients;
  document.getElementById('satisfied_clients_label').textContent = translations[currentLanguage].satisfied_clients_label;
  document.getElementById('programming_languages_count').textContent = translations[currentLanguage].programming_languages_count;
  document.getElementById('programming_languages_label').textContent = translations[currentLanguage].programming_languages_label;
  document.getElementById('my_education_text').textContent = translations[currentLanguage].my_education_text;
  document.getElementById('my_education_value').textContent = translations[currentLanguage].my_education_value;
  document.getElementById('my_proects_text').textContent = translations[currentLanguage].my_proects_text;
  document.getElementById('my_proects_value').textContent = translations[currentLanguage].my_proects_value;
  document.getElementById('feedback_text').textContent = translations[currentLanguage].feedback_text;
  document.getElementById('feedback_value').textContent = translations[currentLanguage].feedback_value;
  document.getElementById('contact_info').textContent = translations[currentLanguage].contact_info;
  document.getElementById('location').textContent = translations[currentLanguage].location;
  document.getElementById('name_placeholder').setAttribute('placeholder', translations[currentLanguage].name_placeholder);
  document.getElementById('message_placeholder').setAttribute('placeholder', translations[currentLanguage].message_placeholder);
  document.getElementById('send').textContent = translations[currentLanguage].send;

  // Обновляем резюме ссылку
  updateResumeLink();
}

// Функция для смены языка
function changeLanguage(lang) {
  currentLanguage = lang;
  applyTranslations();
}

// Загрузка переводов при загрузке страницы
window.onload = loadTranslations;
