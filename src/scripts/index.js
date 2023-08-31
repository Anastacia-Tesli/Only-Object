// Массив будущих кнопок

export const buttons = [
  { color: 'blue', text: 'Дом' },
  { color: 'blue', text: 'Здание' },
  { color: 'green', text: 'Еще здание' },
  { color: 'green', text: 'Стадион' },
  { color: 'blue', text: 'Важное здание' },
  { color: 'blue', text: 'Пристройка' },
  { color: 'green', text: 'Какая-то постройка' },
  { color: 'blue', text: 'Набережная' },
  { color: 'green', text: 'Постройка' },
  { color: 'blue', text: 'Еще одно здание' },
];

// Создание нескольких кнопок по шаблону из массива заготовленных кнопок

const pageContent = document.querySelector('.content');

const getTemplate = () => {
  const template = document.querySelector('#template').content;
  const button = template.querySelector('.button').cloneNode(true);
  return button;
};

const generateButton = (color, text) => {
  const element = getTemplate();
  element.classList.add(`button_type_${color}`);
  element.querySelector('.button__text').textContent = text;
  return element;
};

buttons.forEach((button) => {
  const newButton = generateButton(button.color, button.text);
  pageContent.append(newButton);
});

// Обработка кликов по кнопкам

const handleClick = (button) => {
  button.classList.toggle('button_state_active');
  button.querySelector('.button__icon').classList.toggle('button__icon_state__active');
  button.querySelector('.button__text').classList.toggle('button__text_state__active');
};

const handleClose = (button) => {
  button.classList.remove('button_state_active');
  button.querySelector('.button__icon').classList.remove('button__icon_state__active');
  button.querySelector('.button__text').classList.remove('button__text_state__active');
};

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('button')) {
    handleClick(e.target);
  } else if (
    e.target.classList.contains('button__icon') ||
    e.target.classList.contains('button__text')
  ) {
    handleClick(e.target.parentElement);
  } else if (document.querySelector('.button_state_active')) {
    document.querySelectorAll('.button_state_active').forEach((element) => {
      handleClose(element);
    });
  }
});
