import PagesIdObj from "../modelsOfData/pages.js";


const HOMEDIV = document.getElementById(PagesIdObj.homePage);
const ABOUTDIV = document.getElementById(PagesIdObj.aboutPage);
const REGISTERDIV = document.getElementById(PagesIdObj.registerPage);
const LOGINDIV = document.getElementById(PagesIdObj.loginPage);
const USERDIV = document.getElementById(PagesIdObj.userPage);
const PAGE404PAGEDIV = document.getElementById(PagesIdObj.page404);

function switchPages(pageIdToShow) {
    /* hide all pages */
    HOMEDIV.classList.remove("d-block");
    ABOUTDIV.classList.remove("d-block");
    REGISTERDIV.classList.remove("d-block");
    LOGINDIV.classList.remove("d-block");
    USERDIV.classList.remove("d-block");
    PAGE404PAGEDIV.classList.remove("d-block");

    HOMEDIV.classList.add("d-none");
    ABOUTDIV.classList.add("d-none");
    REGISTERDIV.classList.add("d-none");
    LOGINDIV.classList.add("d-none");
    USERDIV.classList.add("d-none");
    PAGE404PAGEDIV.classList.add("d-none");

    switch (pageIdToShow) {
        case PagesIdObj.homePage:
            HOMEDIV.classList.remove("d-none");
            HOMEDIV.classList.add("d-block");
            break;
        case PagesIdObj.aboutPage:
            ABOUTDIV.classList.remove("d-none");
            ABOUTDIV.classList.add("d-block");
            break;
        case PagesIdObj.registerPage:
            REGISTERDIV.classList.remove("d-none");
            REGISTERDIV.classList.add("d-block");
            break;
        case PagesIdObj.loginPage:
            LOGINDIV.classList.remove("d-none");
            LOGINDIV.classList.add("d-block");
            break;
        case PagesIdObj.userPage:
            USERDIV.classList.remove("d-none");
            USERDIV.classList.add("d-block");
            break;
        case PagesIdObj.page404:
            PAGE404PAGEDIV.classList.remove("d-none");
            PAGE404PAGEDIV.classList.add("d-block");
            break;
        default:
            console.log('Switch default - error');
            break;
    }
}

export { switchPages };