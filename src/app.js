import LinksNavBarIdobj from "./modelsOfData/linksNavBar.js";
import PagesIdObj from "./modelsOfData/pages.js";
import { switchPages } from "./routes/switchRouter.js";
import initializeNavbar from "./components/Navbar.js";
import "./initialData/initialData.js";
import "./pages/RegisterPg.js";

const HomeNavLink = document.getElementById(LinksNavBarIdobj.homeLinkNavBar);
const AboutusNavLink = document.getElementById(LinksNavBarIdobj.aboutusLinkNavBar);
const RegisterNavLink = document.getElementById(LinksNavBarIdobj.registerLinkNavBar);
const LoginNavLink = document.getElementById(LinksNavBarIdobj.loginLinkNavBar);
const UserNavLink = document.getElementById(LinksNavBarIdobj.userLinkNavBar);
const LogoutNavLink = document.getElementById(LinksNavBarIdobj.LogoutNavLink);
const LogintoRegister = document.getElementById(LinksNavBarIdobj.loginToRegister);

window.addEventListener("load", () => {
    // initializeNavbar(showNewPopup);
    initializeNavbar();
    // if (checkIfConnected()) {
    //     let user = localStorage.getItem("token");
    //     user = JSON.parse(user);
    //     navEditProfilePage.innerText = user.name;
    // }
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
// LogoutNavLink.addEventListener("click", () => {
//     switchPages(PagesIdObj.loginPage);
// });
LogintoRegister.addEventListener("click", () => {
    switchPages(PagesIdObj.registerPage);
});