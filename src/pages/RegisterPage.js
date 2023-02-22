import User from "../modelsOfData/user.js";
import RegisterInputsId from "../modelsOfData/registerData.js";
import validateName from "../validation/validatName.js";
import validateAddress from "../validation/validateAddress.js";
import validateEmail from "../validation/validateEmail.js";
import validatePhone from "../validation/validatePhone.js";
import validatePassword from "../validation/validatePassword.js";

const inputFName = document.getElementById(RegisterInputsId.Fname);
const inputLName = document.getElementById(RegisterInputsId.Lname);
const inputState = document.getElementById(RegisterInputsId.State);
const inputCountry = document.getElementById(RegisterInputsId.Country);
const inputCity = document.getElementById(RegisterInputsId.City);
const inputStreet = document.getElementById(RegisterInputsId.Street);
const inputHouse = document.getElementById(RegisterInputsId.House);
const inputZipCode = document.getElementById(RegisterInputsId.ZipCode);
const inputEmail = document.getElementById(RegisterInputsId.Email);
const inputPhone = document.getElementById(RegisterInputsId.Phone);
const inputPassword = document.getElementById(RegisterInputsId.Password);
const inputRePassword = document.getElementById(RegisterInputsId.RePassword);
const inputIsBussiness = document.getElementById(RegisterInputsId.IsBussiness);
const inputResetAll = document.getElementById(RegisterInputsId.ResetAll);
const inputSubmit = document.getElementById(RegisterInputsId.Submit);

let FnameFlag = false;
let LnameFlag = false;
let EmailFlag = false;
let PasswordFlag = false;
let RePasswordFlag = false;

window.addEventListener("load", () => {
    //when page loaded
    if (inputFName.value !== "") {
        checkNameInput();
    }
    if (inputLName.value !== "") {
        checkNameInput();
    }
    if (inputState.value !== "") {
        checkAddressInput();
    }
    if (inputCountry.value !== "") {
        checkAddressInput();
    }
    if (inputCity.value !== "") {
        checkAddressInput();
    }
    if (inputStreet.value !== "") {
        checkAddressInput();
    }
    if (inputHouse.value !== "") {
        checkAddressInput();
    }
    if (inputZipCode.value !== "") {
        checkAddressInput();
    }
    if (inputEmail.value !== "") {
        checkEmailInput();
    }
    if (inputPhone.value !== "") {
        checkPhoneInput();
    }
    if (inputPassword.value !== "") {
        checkPasswordInput();
    }
    if (inputRePassword.value !== "") {
        checkPasswordInput();
    }
});
// NAME
inputFName.addEventListener("input", () => {
    checkNameInput();
});
inputLName.addEventListener("input", () => {
    checkNameInput();
});
// ADDRESS
inputState.addEventListener("input", () => {
    checkAddressInput();
});
inputCountry.addEventListener("input", () => {
    checkAddressInput();
});
inputCity.addEventListener("input", () => {
    checkAddressInput();
});
inputStreet.addEventListener("input", () => {
    checkAddressInput();
});
inputHouse.addEventListener("input", () => {
    checkAddressInput();
});
inputZipCode.addEventListener("input", () => {
    checkAddressInput();
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
    checkPasswordInput();
});
inputRePassword.addEventListener("input", () => {
    checkPasswordInput();
});

const checkNameInput = () => {
    let errorArr = validateName(inputName.value);
    //   console.log(reg.test(inputName.value));
    if (errorArr.length === 0) {
        //the text is ok
        inputName.classList.remove("is-invalid");
        document.getElementById("register-alert-name").classList.add("d-none");
        nameOk = true;
    } else {
        //the text is not ok
        inputName.classList.add("is-invalid");
        document.getElementById("register-alert-name").classList.remove("d-none");
        document.getElementById("register-alert-name").innerHTML =
            errorArr.join("<br>");
        nameOk = false;
    }
    ifEnableToSubmit();
};

const checkAddressInput = () => {


    ifEnableToSubmit();
};
const checkEmailInput = () => {
    let errorArr = validateEmail(inputEmail.value);
    if (errorArr.length === 0) {
        //the text is ok
        inputEmail.classList.remove("is-invalid");
        document.getElementById("register-alert-email").classList.add("d-none");
        emailOk = true;
    } else {
        //the text is not ok
        inputEmail.classList.add("is-invalid");
        document.getElementById("register-alert-email").classList.remove("d-none");
        document.getElementById("register-alert-email").innerHTML =
            errorArr.join("<br>");
        emailOk = false;
    }
    ifEnableToSubmit();
};
const checkPhoneInput = () => {



    ifEnableToSubmit();
};
const checkPasswordInput = () => {
    let errorArr = validatePassword(inputPassword.value);
    if (errorArr.length === 0) {
        //the text is ok
        inputPassword.classList.remove("is-invalid");
        document.getElementById("register-alert-password").classList.add("d-none");
        passwordOk = true;
    } else {
        //the text is not ok
        inputPassword.classList.add("is-invalid");
        document
            .getElementById("register-alert-password")
            .classList.remove("d-none");
        document.getElementById("register-alert-password").innerHTML =
            errorArr.join("<br>");
        passwordOk = false;
    }
    ifEnableToSubmit();
};

const saveUserToLocalStorage = () => {

};

const ifEnableToSubmit = () =>
    (inputSubmit.disabled = !(FnameFlag && LnameFlag && EmailFlag && PasswordFlag && RePasswordFlag));