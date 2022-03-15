const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

const popup__edit = document.querySelector('.popup-edit');
const popup_edit_opened = document.querySelector('.popup-edit_opened');
const popup_edit_close = document.querySelector('.popup-edit__button-close');
const button__edit = document.querySelector('.profile__button-edit');

const formEdit = document.getElementById('form-profile');
const nameInput = formEdit.querySelector('#item-name');
const jobInput = formEdit.querySelector('#item-job');
const profile__name =  document.getElementById('first-name');
const profile__profession = document.getElementById('job-description');

const popup__add = document.querySelector('.popup-add');
const button__add = document.querySelector('.profile__button-add');
const popup_add_opened = document.querySelector('.popup-add_opened');
const popup_add_close = document.querySelector('.popup-add__button-close');

const popup__image = document.querySelector('.popup-image');
const popup_image_opened = document.querySelector('.popup-image_opened');
const popup_image_close = document.querySelector('.popup-image__button-close');
const popupImage = document.querySelector('.popup-image__content');
const popupTitle = document.querySelector('.popup-image__caption');

const formAdd = document.getElementById('form-add-card');
const cardsContainer = document.getElementById('gallery__elements');
const cardTemplate = document.getElementById('gallery__element').content;
const titleInput = formAdd.querySelector('#item-title');
const imageInput = formAdd.querySelector('#item-image-link');


// Функции - Закрыть и открыть модальное окно изображения,
popup_image_close.addEventListener('click', () =>{
  popup__image.classList.remove('popup-image_opened')
})

function popupimageClose() {
  popup__image.classList.remove('popup-image_opened')};

const placeTitle = cardTemplate.querySelector('#gallery__title');
const placeImage = cardTemplate.querySelector('#gallery__image');


// Функция - Закрыть и открыть модальное окно добавления карточки
function popupaddClose() {
    popup__add.classList.remove('popup-add_opened')
};

popup_add_close.addEventListener('click', () => {
  popup__add.classList.remove('popup-add_opened')
});

button__add.addEventListener('click', () => {
    popup__add.classList.add('popup-add_opened');
});


// Функция добавления карточки в галлерею
function addCard(element) {
  const cardElement = cardTemplate.querySelector('.gallery__element').cloneNode(true);

  const elementTitle = cardElement.querySelector('.gallery__title');
  const elementImage = cardElement.querySelector('.gallery__image');
  const elementLike = cardElement.querySelector('.gallery__button-like');
  const elementTrash = cardElement.querySelector('.gallery__button-trash');

  elementTitle.textContent = element.name;
  elementImage.src = element.link;
  elementImage.alt = element.name;

    // Добавить или снять лайк
  elementLike.addEventListener('click', () => {
      elementLike.classList.toggle('gallery__like-active');
      elementLike.classList.toggle('gallery__button-like');
      });

    // Удалить карточку
    elementTrash.addEventListener('click', () => {
      cardElement.remove()});

      //Открыть модальное окно изображения
    elementImage.addEventListener('click', () => {
      popup__image.classList.add('popup-image_opened');
      
        popupImage.src = elementImage.src;
        popupTitle.textContent = elementTitle.textContent;
      });
  
      return cardElement;
  }

initialCards.forEach( (element) => {
    cardsContainer.appendChild(addCard(element))
});

formAdd.addEventListener('submit', (evt) => {
    evt.preventDefault(); 

    cardsContainer.prepend(addCard({name: titleInput.value, link: imageInput.value}));
  
    titleInput.value = '';
    imageInput.value = '';

    popupaddClose();
})


function popupeditClose() {
    popup__edit.classList.remove('popup-edit_opened')};

popup_edit_close.addEventListener('click', () => {
      popup__edit.classList.remove('popup-edit_opened')});

button__edit.addEventListener('click', () => {
    popup__edit.classList.add('popup-edit_opened');

    nameInput.value = profile__name.textContent;
    jobInput.value = profile__profession.textContent;  
});


formEdit.addEventListener('submit', (evt) => {
    evt.preventDefault(); 
    
    profile__name.textContent = nameInput.value;
    profile__profession.textContent  = jobInput.value;

    popupeditClose()
} );


