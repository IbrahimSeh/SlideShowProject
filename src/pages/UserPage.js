import UserInputsId from "../modelsOfData/userData.js";
import checkIfConnected from "../utils/checkIfConnected.js";
import { checkNameInput, checkPasswordInput, checkEmailInput, checkPhoneInput } from "./RegisterPg.js";
import { showToastRegister, showToastUser } from "../services/toast.js";
import { switchPages } from "../routes/switchRouter.js";
import PagesIdObj from "../modelsOfData/pages.js";

const inputFName = document.getElementById(UserInputsId.Fname);
const inputLName = document.getElementById(UserInputsId.Lname);
const inputState = document.getElementById(UserInputsId.State);
const inputCountry = document.getElementById(UserInputsId.Country);
const inputCity = document.getElementById(UserInputsId.City);
const inputStreet = document.getElementById(UserInputsId.Street);
const inputHouse = document.getElementById(UserInputsId.House);
const inputZipCode = document.getElementById(UserInputsId.ZipCode);
const inputEmail = document.getElementById(UserInputsId.Email);
const inputPhone = document.getElementById(UserInputsId.Phone);
const inputPassword = document.getElementById(UserInputsId.Password);
const inputRePassword = document.getElementById(UserInputsId.RePassword);
const inputIsBussiness = document.getElementById(UserInputsId.IsBussiness);
const inputResetAll = document.getElementById(UserInputsId.ResetAll);
const inputSubmit = document.getElementById(UserInputsId.Submit);

let tokenUser, userONUsersArr, users;

window.addEventListener("load", () => {
    console.log('userpage.js when page loaded');
    if (checkIfConnected()) {
        tokenUser = localStorage.getItem("tokenUser");
        tokenUser = JSON.parse(tokenUser);
        console.log('connected ');
        inputFName.value += tokenUser.Fname;
        inputLName.value += tokenUser.Lname;
        inputState.value += tokenUser.state;
        inputCountry.value += tokenUser.country;
        inputCity.value += tokenUser.city;
        inputStreet.value += tokenUser.street
        inputHouse.value += tokenUser.house;
        inputZipCode.value += tokenUser.zipcode;
        inputEmail.value += tokenUser.email;
        inputPhone.value += tokenUser.phone;
        inputPassword.value += tokenUser.password;
        inputRePassword.value += tokenUser.password;
        inputIsBussiness.checked = tokenUser.isBussiness;


    } else {
        console.log('page 404');
    }
});

// NAME
inputFName.addEventListener("input", () => {
    checkNameInput(inputFName);
});
inputLName.addEventListener("input", () => {
    checkNameInput(inputLName);
});
// CONTACT
inputEmail.addEventListener("input", () => {
    checkEmailInput();
});
inputPhone.addEventListener("input", () => {
    checkPhoneInput();
});
// SECURITY
inputPassword.addEventListener("input", () => {
    checkPasswordInput(inputPassword);
});
inputRePassword.addEventListener("input", () => {
    checkPasswordInput(inputRePassword);
});

inputResetAll.addEventListener("click", () => {
    location.reload();
});

inputSubmit.addEventListener("click", () => {
    if (inputPassword.value !== inputRePassword.value) {
        showToastUser("password & re-password doesn't match", false);
        console.log('showToast user');
        return;
    }

    // after the user edit any input -> need to update tokenUser data & the user in users Arr
    tokenUser.Fname = inputFName.value;
    tokenUser.Lname = inputLName.value;
    tokenUser.state = inputState.value;
    tokenUser.country = inputCountry.value;
    tokenUser.city = inputCity.value;
    tokenUser.street = inputStreet.value
    tokenUser.house = inputHouse.value;
    tokenUser.zipcode = inputZipCode.value;
    tokenUser.email = inputEmail.value;
    tokenUser.phone = inputPhone.value;
    tokenUser.password = inputPassword.value;
    tokenUser.password = inputRePassword.value;
    tokenUser.isBussiness = inputIsBussiness.value;

    // update the tokenUser in local Storage
    localStorage.setItem("tokenUser", JSON.stringify(tokenUser));

    users = localStorage.getItem("users");
    users = JSON.parse(users); // convert from string to array of objects

    // for (let user of users) {
    //     if (user.email === inputEmail.value) {
    //         //display msg - email already exists
    //         console.log('Email already exists');
    //         showToastUser("Email already exists", false);
    //         return;
    //     }
    // }

    users = [...users, tokenUser];
    localStorage.setItem("users", JSON.stringify(users));
    // switchPages(PagesIdObj.homePage);
    location.reload();

});