import checkIfBussiness from "../utils/checkIfBussiness.js";
import checkIfConnected from "../utils/checkIfConnected.js";
import getNextPropertyId from "../utils/getNextPropertyId.js";

let nextPropertyId;
let isBussiness;
let isConnected;
let showPopup;

let navAddNewPropertyLink;

const userBeforeLogin = document.getElementById("userBeforeLogin");
const userAfterLogin = document.getElementById("userAfterLogin");

const initializeNavbar = (showPopupFromApp) => {
    nextPropertyId = getNextPropertyId();
    isBussiness = checkIfBussiness();
    isConnected = checkIfConnected();
    if (isConnected) {
        userBeforeLogin.classList.add("d-none");
        userAfterLogin.classList.remove("d-none");
    }
    showPopup = showPopupFromApp;
    /* nav */
    navAddNewPropertyLink = document.getElementById("nav-add-new-property-link");
    if (!isBussiness) {
        navAddNewPropertyLink.classList.add("d-none");
    }
    navAddNewPropertyLink.addEventListener("click", () => {
        // showPopup();
    });
};

export default initializeNavbar;
