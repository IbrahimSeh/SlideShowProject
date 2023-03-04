import imgProperty from "../modelsOfData/imgProperty.js";
import getNextPropertyId from "../utils/getNextPropertyId.js";

let selectedProperty, editProperty;
const currentImgInPopup = document.getElementById(
    "currentImgInPopup"
);
const nameToEditInPopup = document.getElementById(
    "nameToEditInPopup"
);
const descriptionToEditInPopup = document.getElementById(
    "editPropertiesPopupDescription"
);
const priceToEditInPopup = document.getElementById(
    "editPropertiesPopupPrice"
);
const imgToEditInPopup = document.getElementById(
    "imgToEditInPopup"
);
const popupEditImg = document.getElementById("popupEditImg");

const initPopup = (selectedPropertyFromHomePage, editPropertyFromHomePage) => {
    /*
      set data from selectedProperty to html
      */
    if (selectedPropertyFromHomePage) {
        selectedProperty = selectedPropertyFromHomePage;
    } else {
        selectedProperty = new imgProperty(getNextPropertyId(), "", 0, "", "");
    }
    editProperty = editPropertyFromHomePage;
    currentImgInPopup.src = selectedProperty.imgUrl;
    nameToEditInPopup.value = selectedProperty.name;
    descriptionToEditInPopup.value = selectedProperty.description;
    priceToEditInPopup.value = selectedProperty.price;
    imgToEditInPopup.value = selectedProperty.imgUrl;
    showPopup();
};

const showPopup = () => {
    popupEditImg.classList.remove("d-none");
};

const hidePopup = () => {
    popupEditImg.classList.add("d-none");
};

window.addEventListener("load", () => {
    popupEditImg.addEventListener("click", (ev) => {
        if (
            ev.target.id !== "popupEditImg" &&
            ev.target.id !== "cancelBtn-EditImgPopup" &&
            ev.target.id !== "cancelBtnIcon-EditImgPopup"
        ) {
            return;
        }
        hidePopup();
    });
    document
        .getElementById("saveBtn-EditImgPopup")
        .addEventListener("click", () => {
            selectedProperty.name = nameToEditInPopup.value;
            selectedProperty.description = descriptionToEditInPopup.value;
            selectedProperty.price = priceToEditInPopup.value;
            selectedProperty.imgUrl = imgToEditInPopup.value;
            editProperty(selectedProperty);
            hidePopup();
        });
    imgToEditInPopup.addEventListener("input", () => {
        currentImgInPopup.src = imgToEditInPopup.value;
    });
});

export { initPopup, showPopup, hidePopup };
