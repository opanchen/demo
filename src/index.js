const refs = {
  toggleBtn: document.querySelector('.toggle-btn'),
  pageBody: document.querySelector('body'),

  burgerBtn: document.querySelector('.burger-btn'),
  burgerMenu: document.querySelector('.burger-menu'),

  searchBtn: document.querySelector('.header-form__btn'),
  searchInput: document.querySelector('.header-form__field'),
  searchForm: document.querySelector('.header-form '),
};

//* Перевіряємо ширину екрану, щоб закрити функціонал в межах мобільного медіа:
const isScreenMobile = window.matchMedia('(max-width: 767px)').matches;
//* Змінюємо тип кнопки на "сабміт" для НЕ-мобільних екранів
//* та додаємо слухача події на форму:
if (!isScreenMobile) {
  refs.searchBtn.setAttribute('type', 'submit');
  refs.searchForm.addEventListener('submit', onSearchFormSubmit);
}

refs.toggleBtn.addEventListener('click', onToggleBtnClick);
refs.burgerBtn.addEventListener('click', onBurgerBtnClick);
refs.searchBtn.addEventListener('click', onSearchBtnClick);

function onToggleBtnClick() {
  refs.pageBody.classList.toggle('dark-mode');
  //   refs.toggleBtn.classList.toggle('dark-mode__btn');
}

function onBurgerBtnClick() {
  const expanded =
    refs.burgerBtn.getAttribute('aria-expanded') === 'true' || false;

  refs.burgerBtn.classList.toggle('is-open');
  refs.burgerBtn.setAttribute('aria-expanded', !expanded);

  refs.burgerMenu.classList.toggle('is-open');
}

function onSearchBtnClick() {
  //* Функціонал для мобільної версії екрану:
  if (isScreenMobile) {
    refs.searchForm.classList.add('is-shown');

    refs.searchForm.addEventListener('submit', onSearchFormSubmit);
  }
  //*
}

function onSearchFormSubmit(e) {
  e.preventDefault();
  alert('submit');

  refs.searchForm.classList.remove('is-shown');

  // todo Подальша логіка сабміту форми...
}
