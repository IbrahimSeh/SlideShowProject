import imgProperty from "../modelsOfData/imgProperty.js";
import getNextPropertyId from "../utils/getNextPropertyId.js";

let selectedProperty, editProperty;
const currentImgInPopup = document.getElementById(
    "currentImgInPopup"
);

const urlToEditInPopup = document.getElementById(
    "popup-input-url"
);
const altToEditInPopup = document.getElementById(
    "popup-input-url"
);
const creditToEditInPopup = document.getElementById(
    "popup-input-credit"
);
const priceToEditInPopup = document.getElementById(
    "popup-input-price"
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
    currentImgInPopup.src = selectedProperty.imgUrl;//current 
    altToEditInPopup.value = selectedProperty.name;
    creditToEditInPopup.value = selectedProperty.credit;
    priceToEditInPopup.value = selectedProperty.price;
    urlToEditInPopup.value = selectedProperty.imgUrl;//new
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
    window.addEventListener("keydown", (event) => {
        console.log('cancelBtn-EditImgPopup by ESC');
        if (event.key === 'Escape') {
            hidePopup();
        }
    });
    document
        .getElementById("saveBtn-EditImgPopup")
        .addEventListener("click", () => {
            selectedProperty.name = altToEditInPopup.value;
            selectedProperty.credit = creditToEditInPopup.value;
            selectedProperty.price = priceToEditInPopup.value;
            selectedProperty.imgUrl = urlToEditInPopup.value;
            editProperty(selectedProperty);
            hidePopup();
        });


    urlToEditInPopup.addEventListener("input", () => {
        currentImgInPopup.src = urlToEditInPopup.value;
    });
});

export { initPopup, showPopup, hidePopup };
