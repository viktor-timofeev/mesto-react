  const validateConfig = {
    form: ".popup__form",
    button: ".popup__submit-button",
    input: ".popup__input",
    inputError: "popup__input_type_error",
    buttonActive: "popup__submit-button_type_active",
    buttonInactive: "popup__submit-button_type_inactive",
  };

  const selectors = {
    popupProfilePhotoEdit: ".popup_function_edit-photo",
    popupConfirmDeleteCard: ".popup_function_confirm",
    popupProfileEdit: ".popup_function_edit",
    popupCardAdd: ".popup_function_add",
    popupImage: ".popup_function_closeup",
    buttonProfileEdit: ".profile__edit-button",
    buttonCardAdd: ".profile__add-button",
    buttonEditProfilePhoto: ".profile__photo-edit-button",
    formPopupProfileEdit: ".popup__form_function_edit",
    formPopupAddCard: ".popup__form_function_add",
    formEditProfilePhoto: ".popup__form_function_edit-photo",
    inputCardName: ".popup__input_type_name",
    inputCardLink: ".popup__input_type_link",
    profileTitle: ".profile__title",
    profileInfo: ".profile__subtitle",
    profileAvatar: ".profile__image",
    templateCard: ".elements-item",
    cardsList: ".elements",
    titleInputValue: ".popup__input_type_title",
    occupationInputValue: ".popup__input_type_subtitle"
  };

  const buttonProfileEdit = document.querySelector(selectors.buttonProfileEdit);
  const buttonCardAdd = document.querySelector(selectors.buttonCardAdd);
  const buttonEditProfilePhoto = document.querySelector(selectors.buttonEditProfilePhoto);
  const formPopupProfileEdit = document.querySelector(selectors.formPopupProfileEdit);
  const formPopupAddCard = document.querySelector(selectors.formPopupAddCard);
  const formEditProfilePhoto = document.querySelector(selectors.formEditProfilePhoto);
  const inputCardName = document.querySelector(selectors.inputCardName);
  const inputCardLink = document.querySelector(selectors.inputCardLink);
  const titleInputValue = document.querySelector(selectors.titleInputValue);
  const occupationInputValue = document.querySelector(selectors.occupationInputValue);
  

  export {  validateConfig,
            selectors,
            buttonProfileEdit,
            buttonCardAdd,
            buttonEditProfilePhoto,
            formPopupProfileEdit,
            formPopupAddCard,
            formEditProfilePhoto,
            inputCardName,
            inputCardLink,
            titleInputValue,
            occupationInputValue
          }; 

