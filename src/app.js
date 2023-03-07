import LinksNavBarIdobj from "./modelsOfData/linksNavBar.js";
import PagesIdObj from "./modelsOfData/pages.js";
import { switchPages } from "./routes/switchRouter.js";
import initializeNavbar from "./components/Navbar.js";
import { addNewImgPopup } from "./components/addNewImgPopup.js";
import "./initialData/initialData.js";
import "./pages/RegisterPg.js";
import "./pages/LoginPage.js";
import "./pages/UserPage.js";

import checkIfConnected from "./utils/checkIfConnected.js";
// import { showNewPopup } from "./pages/HomePage.js";

const HomeNavLink = document.getElementById(LinksNavBarIdobj.homeLinkNavBar);
const AboutusNavLink = document.getElementById(LinksNavBarIdobj.aboutusLinkNavBar);
const RegisterNavLink = document.getElementById(LinksNavBarIdobj.registerLinkNavBar);
const LoginNavLink = document.getElementById(LinksNavBarIdobj.loginLinkNavBar);
const UserNavLink = document.getElementById(LinksNavBarIdobj.userLinkNavBar);
const LogoutNavLink = document.getElementById(LinksNavBarIdobj.logoutLinkNavBar);
const LogintoRegister = document.getElementById(LinksNavBarIdobj.loginToRegister);

window.addEventListener("load", () => {
    console.log('in app window addEventListener load');
    initializeNavbar(addNewImgPopup);
    if (checkIfConnected()) {
        let user = localStorage.getItem("tokenUser");
        user = JSON.parse(user);
        UserNavLink.innerText = user.Fname;
        switchPages(PagesIdObj.homePage);
    }
});



HomeNavLink.addEventListener("click", () => {
    switchPages(PagesIdObj.homePage);
});
AboutusNavLink.addEventListener("click", () => {
    switchPages(PagesIdObj.aboutPage);
});
RegisterNavLink.addEventListener("click", () => {
    switchPages(PagesIdObj.registerPage);
});
LoginNavLink.addEventListener("click", () => {
    switchPages(PagesIdObj.loginPage);
});
UserNavLink.addEventListener("click", () => {
    switchPages(PagesIdObj.userPage);
});
LogoutNavLink.addEventListener("click", () => {
    localStorage.removeItem("tokenUser");
    location.reload();
});
LogintoRegister.addEventListener("click", () => {
    switchPages(PagesIdObj.registerPage);
});