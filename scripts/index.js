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

const popup = document.querySelector('.popup');
const popupOpened = document.querySelector('.popup_opened');
const popup_close = document.querySelector('.popup__button-close');
const button__edit = document.querySelector('.profile__button-edit');
const button__add = document.querySelector('.profile__button-add');
const popupEdit = document.querySelector('.popup-edit');
const popupEdit_close = document.querySelector('.popup-edit__button-close');
const popupAdd = document.querySelector('.popup-add');
const popupAdd_close = document.querySelector('.popup-add__button-close');
const popupCard = document.querySelector('.popup-image');
const popupCard_close = document.querySelector('.popup-image__button-close');

const formEdit = document.getElementById('form-profile');
const nameInput = formEdit.querySelector('#item-name');
const jobInput = formEdit.querySelector('#item-job');
const profile__name = document.getElementById('first-name');
const profile__profession = document.getElementById('job-description');

const popupImage = document.querySelector('.popup-image__content');
const popupTitle = document.querySelector('.popup-image__caption');

const formAdd = document.getElementById('form-add-card');
const cardsContainer = document.getElementById('gallery__elements');
const cardTemplate = document.getElementById('gallery__element').content;
const titleInput = formAdd.querySelector('#item-title');
const imageInput = formAdd.querySelector('#item-image-link');
const placeTitle = cardTemplate.querySelector('#gallery__title');
const placeImage = cardTemplate.querySelector('#gallery__image');


function popupOpen(popup) {
  popup.classList.add('popup_opened')};

function popupClose(popup) {
  popup.classList.remove('popup_opened')};


popupAdd_close.addEventListener('click', () =>{
  popupClose(popupAdd)
});

popupEdit_close.addEventListener('click', () =>{
  popupClose(popupEdit)
});

popupCard_close.addEventListener('click', () =>{
  popupClose(popupCard)
});

button__add.addEventListener('click', () => {
  popupOpen(popupAdd);
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
      elementLike.classList.toggle('gallery__button-like_active');
      });

    // Удалить карточку
    elementTrash.addEventListener('click', () => {
      cardElement.remove()});

      //Открыть модальное окно изображения
    elementImage.addEventListener('click', () => {
      popupOpen(popupCard);
      
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

    popupClose(popupAdd);
});

button__edit.addEventListener('click', () => {
  popupOpen(popupEdit);

    nameInput.value = profile__name.textContent;
    jobInput.value = profile__profession.textContent;  
});


formEdit.addEventListener('submit', (evt) => {
    evt.preventDefault(); 
    
    profile__name.textContent = nameInput.value;
    profile__profession.textContent  = jobInput.value;

    popupClose(popupEdit);
} );


