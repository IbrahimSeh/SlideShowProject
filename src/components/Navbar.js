import checkIfBussiness from "../utils/checkIfBussiness.js";
import checkIfConnected from "../utils/checkIfConnected.js";
import getNextId from "../utils/getNextId.js";

let nextId;
let isBussiness;
let isConnected;
let showPopup;

let navAddNewPropertyLink;

const userBeforeLogin = document.getElementById("userBeforeLogin");
const userAfterLogin = document.getElementById("userAfterLogin");

const initializeNavbar = (showPopupFromApp) => {
    nextId = getNextId();
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
        showPopup();
    });
};

export default initializeNavbar;
