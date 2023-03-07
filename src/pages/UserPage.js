import UserInputsId from "../modelsOfData/userData.js";
import checkIfConnected from "../utils/checkIfConnected.js";
import { showToastRegister, showToastUser } from "../services/toast.js";
import validateName from "../validations/validateName.js";
import validateEmail from "../validations/validateEmail.js";
import validatePhone from "../validations/validatePhone.js";
import validatePassword from "../validations/validatePassword.js";

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

let tokenUser, oldEmail, users, usersWithOutToken, updatedUsers;
let FnameFlag = false;
let LnameFlag = false;
let EmailFlag = false;
let PasswordFlag = false;
let RePasswordFlag = false;

window.addEventListener("load", () => {
    // console.log('userpage.js when page loaded');
    if (checkIfConnected()) {
        tokenUser = localStorage.getItem("tokenUser");
        tokenUser = JSON.parse(tokenUser);
        oldEmail = tokenUser.email;

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
    }
});

// NAME
inputFName.addEventListener("input", () => {
    checkNameInput(inputFName, "user-alert-Fname");
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

    if (!(FnameFlag && LnameFlag && EmailFlag && PasswordFlag && RePasswordFlag)) {
        //if someone changed the html from dev tools
        return;
    }
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
    tokenUser.isBussiness = inputIsBussiness.checked;

    users = localStorage.getItem("users");
    users = JSON.parse(users); // convert from string to array of objects



    deleteProperty(oldEmail);
    // check if any user have the same email before update
    for (let user of usersWithOutToken) {
        if (user.email === tokenUser.email) {
            console.log('//display msg - email already exists');
            showToastUser("Email already exists", false);
            return;
        }
    }

    // update the tokenUser in local Storage
    localStorage.setItem("tokenUser", JSON.stringify(tokenUser));
    // update the tokenUser in users-local Storage
    updatedUsers = [...usersWithOutToken, tokenUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // switchPages(PagesIdObj.homePage);
    location.reload();

});

const deleteProperty = (email) => {
    usersWithOutToken = users.filter(
        (item) => item.email !== email
    );
};

const checkNameInput = (name) => {
    let errorArr = validateName(name.value);
    if (errorArr.length === 0) {
        //the text is ok
        name.classList.remove("is-invalid");
        if (name.placeholder.split(" ")[0] === "First") {
            document.getElementById("user-alert-Fname").classList.add("d-none");
            FnameFlag = true;
        }
        if (name.placeholder.split(" ")[0] === "Last") {
            document.getElementById("user-alert-Lname").classList.add("d-none");
            LnameFlag = true;
        }

    } else {
        //the text is not ok
        name.classList.add("is-invalid");
        if (name.placeholder.split(" ")[0] === "First") {
            document.getElementById("user-alert-Fname").classList.remove("d-none");
            document.getElementById("user-alert-Fname").innerHTML =
                errorArr.join("<br>");
            FnameFlag = false;
        }
        if (name.placeholder.split(" ")[0] === "Last") {
            document.getElementById("user-alert-Lname").classList.remove("d-none");
            document.getElementById("user-alert-Lname").innerHTML =
                errorArr.join("<br>");
            LnameFlag = false;
        }
    }
    ifEnableToSubmit();
};
const checkEmailInput = () => {
    let errorArr = validateEmail(inputEmail.value);
    if (errorArr.length === 0) {
        //the text is ok
        inputEmail.classList.remove("is-invalid");
        document.getElementById("user-alert-email").classList.add("d-none");
        EmailFlag = true;
    } else {
        //the text is not ok
        inputEmail.classList.add("is-invalid");
        document.getElementById("user-alert-email").classList.remove("d-none");
        document.getElementById("user-alert-email").innerHTML =
            errorArr.join("<br>");
        EmailFlag = false;
    }
    ifEnableToSubmit();
};
const checkPhoneInput = () => {
    let errorArr = validatePhone(inputPhone.value);
    if (errorArr.length === 0) {
        //the text is ok
        inputPhone.classList.remove("is-invalid");
        document.getElementById("user-alert-phone").classList.add("d-none");
    } else {
        //the text is not ok
        inputPhone.classList.add("is-invalid");
        document.getElementById("user-alert-phone").classList.remove("d-none");
        document.getElementById("user-alert-phone").innerHTML =
            errorArr.join("<br>");
    }
    ifEnableToSubmit();
};
const checkPasswordInput = (pass) => {
    let errorArr = validatePassword(pass.value)
    if (errorArr.length === 0) {
        //the text is ok
        pass.classList.remove("is-invalid");
        if (pass.placeholder.split(" ")[0] === "Password") {
            document.getElementById("user-alert-password").classList.add("d-none");
            PasswordFlag = true;
        }
        if (pass.placeholder.split(" ")[0] === "Re") {
            document.getElementById("user-alert-repassword").classList.add("d-none");
            RePasswordFlag = true;
        }

    } else {
        //the text is not ok
        pass.classList.add("is-invalid");
        if (pass.placeholder.split(" ")[0] === "Password") {
            document.getElementById("user-alert-password").classList.remove("d-none");
            document.getElementById("user-alert-password").innerHTML =
                errorArr.join("<br>");
            PasswordFlag = false;
        }
        if (pass.placeholder.split(" ")[0] === "Re") {
            document.getElementById("user-alert-repassword").classList.remove("d-none");
            document.getElementById("user-alert-repassword").innerHTML =
                errorArr.join("<br>");
            RePasswordFlag = false;
        }
    }
    ifEnableToSubmit();
};

const ifEnableToSubmit = () =>
    (inputSubmit.disabled = !(FnameFlag && LnameFlag && EmailFlag && PasswordFlag && RePasswordFlag));
