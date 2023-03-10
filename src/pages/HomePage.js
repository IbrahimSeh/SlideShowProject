import {
    initialPropertiesGallery,
    updatePropertiesGallery,
} from "../components/PropertiesGallery.js";
import {
    initialPropertiesList,
    updatePropertiesList,
} from "../components/PropertiesList.js";
import {
    initialPropertiesCarousel,
    updatePropertiesCarousel,
} from "../components/PropertiesCarousel.js";
import { initPopup } from "../components/editImgPopup.js";
import checkIfBussiness from "../utils/checkIfBussiness.js";

let propertiesArr, originalPropertiesArr;
let displayNow; // display that we can see now

/* btns */
let homeDisplayList = document.getElementById("homeDisplayList");
let homeDisplayGallery = document.getElementById("homeDisplayGallery");
let homeDisplayCousel = document.getElementById("homeDisplayCousel");
/* displays div's*/
let propertiesGallery = document.getElementById("propertiesGallery");
let propertiesList = document.getElementById("propertiesList");
let propertiesCarusel = document.getElementById("propertiesCarusel");

let isBussiness;

window.addEventListener("load", () => {

    propertiesArr = localStorage.getItem("propsOfImg");
    if (!propertiesArr) {
        return;
        // No photos to display
    }
    propertiesArr = JSON.parse(propertiesArr);
    originalPropertiesArr = [...propertiesArr];
    isBussiness = checkIfBussiness();
    //passing propertiesArr to PropertiesGallery.js
    initialPropertiesGallery(propertiesArr, isBussiness, deleteProperty, showPopup);
    initialPropertiesList(propertiesArr, isBussiness, deleteProperty, showPopup);
    initialPropertiesCarousel(propertiesArr);
    initializeElements();
    initializeBtns();
});

const initializeElements = () => {
    displayNow = propertiesCarusel; // choose who we want to display
    displayMode(displayNow);
};

const initializeBtns = () => {
    homeDisplayList.addEventListener("click", () => {
        displayMode(propertiesList);
    });
    homeDisplayGallery.addEventListener("click", () => {
        displayMode(propertiesGallery);
    });
    homeDisplayCousel.addEventListener("click", () => {
        displayMode(propertiesCarusel);
    });
    document
        .getElementById("homeDisplaySortASC")
        .addEventListener("click", () => {
            sortPropertys();
        });
    document
        .getElementById("homeDisplaySortDESC")
        .addEventListener("click", () => {
            sortPropertys(false);
        });
    document
        .getElementById("homeDisplaySearch")
        .addEventListener("input", (ev) => {
            let regex = new RegExp("^" + ev.target.value, "i");
            propertiesArr = originalPropertiesArr.filter((item) => {
                let reg = regex.test(item.name);
                return reg;
            });
            updatePropertiesGalleryAndList();
        });
};

const displayMode = (toDisplay) => {
    if (toDisplay.id === "propertiesCarusel") {
        document.getElementById("search-div").classList.add("d-none");
    }
    switch (toDisplay.id) {
        case "propertiesList":
            document.getElementById("search-div").classList.remove("d-none");
            break;
        case "propertiesGallery":
            document.getElementById("search-div").classList.remove("d-none");
            break;
        case "propertiesCarusel":
            document.getElementById("search-div").classList.add("d-none");
            break;
        default:
            console.log('error');
    }
    // hide what we currently showing
    displayNow.classList.remove("d-block");
    displayNow.classList.add("d-none");
    // show what we want to display now
    toDisplay.classList.remove("d-none");
    toDisplay.classList.add("d-block");
    //this is what we displaying now
    displayNow = toDisplay;
};

const updatePropertiesGalleryAndList = () => {
    updatePropertiesGallery(propertiesArr); // update gallery
    updatePropertiesList(propertiesArr); // update list
};

const updateDisplays = () => {
    updatePropertiesGallery(propertiesArr); // update gallery
    updatePropertiesList(propertiesArr); // update list
    updatePropertiesCarousel(propertiesArr); // update carousel
};

const saveToLocalStorage = (arrToSave) => {
    localStorage.setItem("propsOfImg", JSON.stringify(arrToSave));
};

const deleteProperty = (id) => {
    id = +id; //convert string to number
    originalPropertiesArr = originalPropertiesArr.filter(
        (item) => item.id !== id
    );
    saveToLocalStorage(originalPropertiesArr);
    propertiesArr = propertiesArr.filter((item) => item.id !== id); //delete property by index
    updateDisplays();
};

const sortPropertys = (asc = true) => {
    if (asc) {
        // from a to z
        propertiesArr.sort((a, b) => a.name.localeCompare(b.name));
    } else {
        // from z to a
        propertiesArr.sort((a, b) => b.name.localeCompare(a.name));
    }
    updateDisplays();
};

const showPopup = (id) => {
    let selectedProperty = propertiesArr.find((item) => item.id === +id);
    if (!selectedProperty) {
        return;
    }
    initPopup(selectedProperty, editProperty);
};

// const addNewImgPopup = () => {
//     initPopup(undefined, addNewProperty);
// };

const addNewProperty = (newProperty) => {
    originalPropertiesArr = [...originalPropertiesArr, newProperty];
    let nextPropertyId = +newProperty.id + 1;
    localStorage.setItem("nextPropertyId", nextPropertyId + "");
    propertiesArr = [...originalPropertiesArr];
    editProperty();
};

const editProperty = () => {
    saveToLocalStorage(originalPropertiesArr);
    updateDisplays(); // update html
};

export { addNewProperty };
