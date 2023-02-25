import validateEmail from "../validations/validateEmail.js";
import validatePassword from "../validations/validatePassword.js";
import { switchPages } from "../routes/switchRouter.js";
import PagesIdObj from "../modelsOfData/pages.js";

const loginInputEmail = document.querySelector("#login-input-email");
const loginInputPassword = document.querySelector("#login-input-password");
const loginSubmit = document.querySelector("#login-btn-submit");

loginInputEmail.addEventListener("input", () => {
    let errorArr = validateEmail(loginInputEmail.value);
    if (errorArr.length === 0) {
        //no error
        loginInputEmail.classList.remove("is-invalid");
        document.getElementById("login-alert-email").classList.add("d-none");
    } else {
        // error/s
        loginInputEmail.classList.add("is-invalid");
        document.getElementById("login-alert-email").classList.remove("d-none");
        document.getElementById("login-alert-email").innerHTML =
            errorArr.join("<br>");
        /*
            let str = errorArr.join("<br>")
            document.getElementById("login-alert-email").innerHTML = str
          */
    }
});

loginInputPassword.addEventListener("input", () => {
    let errorArr = validatePassword(loginInputPassword.value);
    if (errorArr.length === 0) {
        //no error
        loginInputPassword.classList.remove("is-invalid");
        document.getElementById("login-alert-password").classList.add("d-none");
    } else {
        // error/s
        loginInputPassword.classList.add("is-invalid");
        document.getElementById("login-alert-password").classList.remove("d-none");
        document.getElementById("login-alert-password").innerHTML =
            errorArr.join("<br>");
    }
});

loginSubmit.addEventListener("click", () => {
    if (validateEmail(loginInputEmail.value).length) {
        return;
    }
    if (validatePassword(loginInputPassword.value).length) {
        return;
    }
    let users = JSON.parse(localStorage.getItem("users")); //users = users in local storage
    if (!users) {//users === null
        return;
    }
    let user = users.find(//find the user that want to connect
        (item) =>
            item.email === loginInputEmail.value &&
            item.password === loginInputPassword.value
    );
    if (!user) {
        console.log("invalid email and/or password");
        return;
    }
    //remember who connected
    localStorage.setItem(
        "tokenUser",
        JSON.stringify({
            id: user.id,
            Fname: user.Fname,
            Lname: user.Lname,
            city: user.city,
            country: user.country,
            email: user.email,
            house: user.house,
            isBussiness: user.isBussiness,
            password: user.password,
            phone: user.phone,
            state: user.state,
            street: user.street,
            zipcode: user.zipcode,
        })
    );
    switchPages(PagesIdObj.homePage);
    //location.reload();  refresh the page
});
