import i18Obj from './translate.js';
// menu burger

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.nav-list'),
      navLinks = document.querySelectorAll('.nav-link');

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
      });
      navLinks.forEach((el) => el.addEventListener('click', closeMenu))
      function closeMenu(event) {
        if (event.target.classList.contains('nav-link')) {
          hamburger.classList.remove('active');
          menu.classList.remove('active');
        }
      }
    
console.log("Смена изображений в секции portfolio +25\n Перевод страницы на два языка +25\n Переключение светлой и тёмной темы +25\n Дополнительный функционал: не делала\n Итого: 75 баллов");

// portfolio buttons

const portfolioBtns = document.querySelector('.portfolio-btns'),
      portfolioImg = document.querySelectorAll('.portfolio-img'),
      portfolioBtn = document.querySelectorAll('.portfolio-btn');
function changeImage(event) {
  if(event.target.classList.contains('portfolio-btn')) {
    portfolioImg.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
  }
}
portfolioBtn.forEach((el) => el.addEventListener('click', changeImage));

//change theme

const themeBtn = document.querySelector('.nav-switch-moon'),
      bodyColor = document.querySelector('.body'),
      wrapColor = document.querySelectorAll('.wrap'),
      titleColor = document.querySelectorAll('.section-title'),
      btnColor = document.querySelectorAll('.btn');
  themeBtn.addEventListener('click', () => {
    themeBtn.classList.toggle('light');
    bodyColor.classList.toggle('light');
    wrapColor.forEach((el) => el.classList.toggle('light'));
    titleColor.forEach((el) => el.classList.toggle('light'));
    btnColor.forEach((el) => el.classList.toggle('light'));
});

//change active btn
function changeBtn(event) {
  portfolioBtn.forEach ((e) => {
    e.classList.remove('btn-active');
  });
  if(event.target.classList.contains('portfolio-btn')) {
    this.classList.add('btn-active');
  }
}
portfolioBtn.forEach((el) => el.addEventListener('click', changeBtn));

//language
const langArr = document.querySelectorAll("[data-i18]");
const enLang = document.getElementById('en')
const ruLang = document.getElementById('ru')

function translate(lang) {
  langArr.forEach((e) => {
    e.textContent = i18Obj[lang][e.dataset.i18];
  })
}
ruLang.addEventListener('click', translate('ru'));
enLang.addEventListener('click', translate('en'));
ruLang.addEventListener('click', e => {
  if(e.target.click){
    translate('ru');
    enLang.classList.remove('switch-link-active');
    ruLang.classList.add('switch-link-active');
    
  }});
enLang.addEventListener('click', e => {
    if(e.target.click){
      translate('en');
      ruLang.classList.remove('switch-link-active');
      enLang.classList.add('switch-link-active');
  }});