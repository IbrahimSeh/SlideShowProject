import User from "../modelsOfData/user.js";
import RegisterInputsId from "../modelsOfData/registerData.js";
import validateName from "../validations/validateName.js";
import validateEmail from "../validations/validateEmail.js";
import validatePhone from "../validations/validatePhone.js";
import validatePassword from "../validations/validatePassword.js";
import { switchPages } from "../routes/switchRouter.js";
import PagesIdObj from "../modelsOfData/pages.js";
import { showToastRegister, showToastUser } from "../services/toast.js";
import validateAddress from "../validations/validateAddress.js";

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
        checkNameInput(inputFName);
    }
    if (inputLName.value !== "") {
        checkNameInput(inputLName);
    }
    if (inputState.value !== "") {
        checkAddressInput(inputState);
    }
    if (inputCountry.value !== "") {
        checkAddressInput(inputCountry);
    }
    if (inputCity.value !== "") {
        checkAddressInput(inputCity);
    }
    if (inputStreet.value !== "") {
        checkAddressInput(inputStreet);
    }
    if (inputHouse.value !== "") {
        checkAddressInput(inputHouse);
    }
    if (inputZipCode.value !== "") {
        checkAddressInput(inputZipCode);
    }
    if (inputEmail.value !== "") {
        checkEmailInput();
    }
    if (inputPhone.value !== "") {
        checkPhoneInput();
    }
    if (inputPassword.value !== "") {
        checkPasswordInput(inputPassword);
    }
    if (inputRePassword.value !== "") {
        checkPasswordInput(inputRePassword);
    }
});
// NAME
inputFName.addEventListener("input", () => {
    checkNameInput(inputFName);
});
inputLName.addEventListener("input", () => {
    checkNameInput(inputLName);
});
// ADDRESS
// inputState.addEventListener("input", () => {
//     checkAddressInput(inputState);
// });
// inputCountry.addEventListener("input", () => {
//     checkAddressInput(inputCountry);
// });
// inputCity.addEventListener("input", () => {
//     checkAddressInput(inputCity);
// });
// inputStreet.addEventListener("input", () => {
//     checkAddressInput(inputStreet);
// });
// inputHouse.addEventListener("input", () => {
//     checkAddressInput(inputHouse);
// });
// inputZipCode.addEventListener("input", () => {
//     checkAddressInput(inputZipCode);
// });
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

const checkNameInput = (name) => {
    console.log('checkNameInput');
    let errorArr = validateName(name.value);
    if (errorArr.length === 0) {
        //the text is ok
        name.classList.remove("is-invalid");
        if (name.placeholder.split(" ")[0] === "First") {
            document.getElementById("register-alert-Fname").classList.add("d-none");
            FnameFlag = true;
        }
        if (name.placeholder.split(" ")[0] === "Last") {
            document.getElementById("register-alert-Lname").classList.add("d-none");
            LnameFlag = true;
        }

    } else {
        //the text is not ok
        name.classList.add("is-invalid");
        if (name.placeholder.split(" ")[0] === "First") {
            document.getElementById("register-alert-Fname").classList.remove("d-none");
            document.getElementById("register-alert-Fname").innerHTML =
                errorArr.join("<br>");
            FnameFlag = false;
        }
        if (name.placeholder.split(" ")[0] === "Last") {
            document.getElementById("register-alert-Lname").classList.remove("d-none");
            document.getElementById("register-alert-Lname").innerHTML =
                errorArr.join("<br>");
            LnameFlag = false;
        }
    }
    ifEnableToSubmit();
};

// const checkAddressInput = (partOfAddr) => {
//     let errorArr = validateAddress(partOfAddr.value, partOfAddr.placeholder.split(" ")[0]);
//     if (errorArr.length === 0) {
//         //the text is ok
//         partOfAddr.classList.remove("is-invalid");
//         if (partOfAddr.placeholder.split(" ")[0] === "state") {
//             document.getElementById("register-alert-state").classList.add("d-none");
//         }
//         if (partOfAddr.placeholder.split(" ")[0] === "country") {
//             document.getElementById("register-alert-country").classList.add("d-none");
//         }
//         if (partOfAddr.placeholder.split(" ")[0] === "city") {
//             document.getElementById("register-alert-city").classList.add("d-none");
//         }
//         if (partOfAddr.placeholder.split(" ")[0] === "street") {
//             document.getElementById("register-alert-street").classList.add("d-none");
//         }
//         if (partOfAddr.placeholder.split(" ")[0] === "house") {
//             document.getElementById("register-alert-house").classList.add("d-none");
//         }
//         if (partOfAddr.placeholder.split(" ")[0] === "zip") {
//             document.getElementById("register-alert-zip").classList.add("d-none");
//         }

//     } else {
//         //the text is not ok
//         partOfAddr.classList.add("is-invalid");
//         if (partOfAddr.placeholder.split(" ")[0] === "state") {
//             document.getElementById("register-alert-state").classList.remove("d-none");
//             document.getElementById("register-alert-state").innerHTML =
//                 errorArr.join("<br>");
//         }
//         if (partOfAddr.placeholder.split(" ")[0] === "country") {
//             document.getElementById("register-alert-country").classList.remove("d-none");
//             document.getElementById("register-alert-country").innerHTML =
//                 errorArr.join("<br>");
//         }
//         if (partOfAddr.placeholder.split(" ")[0] === "city") {
//             document.getElementById("register-alert-city").classList.remove("d-none");
//             document.getElementById("register-alert-city").innerHTML =
//                 errorArr.join("<br>");
//         }
//         if (partOfAddr.placeholder.split(" ")[0] === "street") {
//             document.getElementById("register-alert-street").classList.remove("d-none");
//             document.getElementById("register-alert-street").innerHTML =
//                 errorArr.join("<br>");
//         }
//         if (partOfAddr.placeholder.split(" ")[0] === "house") {
//             document.getElementById("register-alert-house").classList.remove("d-none");
//             document.getElementById("register-alert-house").innerHTML =
//                 errorArr.join("<br>");
//         }
//         if (partOfAddr.placeholder.split(" ")[0] === "zip") {
//             document.getElementById("register-alert-zip").classList.remove("d-none");
//             document.getElementById("register-alert-zip").innerHTML =
//                 errorArr.join("<br>");
//         }
//     }

//     ifEnableToSubmit();
// };
const checkEmailInput = () => {
    let errorArr = validateEmail(inputEmail.value);
    if (errorArr.length === 0) {
        //the text is ok
        inputEmail.classList.remove("is-invalid");
        document.getElementById("register-alert-email").classList.add("d-none");
        EmailFlag = true;
    } else {
        //the text is not ok
        inputEmail.classList.add("is-invalid");
        document.getElementById("register-alert-email").classList.remove("d-none");
        document.getElementById("register-alert-email").innerHTML =
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
        document.getElementById("register-alert-phone").classList.add("d-none");
    } else {
        //the text is not ok
        inputPhone.classList.add("is-invalid");
        document.getElementById("register-alert-phone").classList.remove("d-none");
        document.getElementById("register-alert-phone").innerHTML =
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
            document.getElementById("register-alert-password").classList.add("d-none");
            PasswordFlag = true;
        }
        if (pass.placeholder.split(" ")[0] === "Re") {
            document.getElementById("register-alert-repassword").classList.add("d-none");
            RePasswordFlag = true;
        }

    } else {
        //the text is not ok
        pass.classList.add("is-invalid");
        if (pass.placeholder.split(" ")[0] === "Password") {
            document.getElementById("register-alert-password").classList.remove("d-none");
            document.getElementById("register-alert-password").innerHTML =
                errorArr.join("<br>");
            PasswordFlag = false;
        }
        if (pass.placeholder.split(" ")[0] === "Re") {
            document.getElementById("register-alert-repassword").classList.remove("d-none");
            document.getElementById("register-alert-repassword").innerHTML =
                errorArr.join("<br>");
            RePasswordFlag = false;
        }
    }
    ifEnableToSubmit();
};

const ifEnableToSubmit = () =>
    (inputSubmit.disabled = !(FnameFlag && LnameFlag && EmailFlag && PasswordFlag && RePasswordFlag));

inputResetAll.addEventListener("click", () => {
    location.reload();
});

inputSubmit.addEventListener("click", () => {

    if (!(FnameFlag && LnameFlag && EmailFlag && PasswordFlag && RePasswordFlag)) {
        //if someone changed the html from dev tools
        return;
    }
    if (inputPassword.value !== inputRePassword.value) {
        showToastRegister("password & re-password doesn't match", false);
        return;
    }

    let users = localStorage.getItem("users");
    let nextUserId = localStorage.getItem("nextUserId");
    console.log("in register " + nextUserId);
    nextUserId = +nextUserId;
    let newUser = new User(
        nextUserId++,
        inputFName.value,
        inputLName.value,
        inputState.value,
        inputCountry.value,
        inputCity.value,
        inputStreet.value,
        inputHouse.value,
        inputZipCode.value,
        inputEmail.value,
        inputPassword.value,
        inputPhone.value,
        inputIsBussiness.checked,
    );


    if (!users) {
        //the first user
        users = [newUser];
        // let user = new User(inputName.value, inputEmail.value, inputPassword.value);
        // users = [user]
        localStorage.setItem("users", JSON.stringify(users));
        /*
        JSON.stringify(users) - convert array of objects to string
        localStorage.setItem - store the json string to localStorage with 
            key users 
            and value users as json string
        */
    } else {
        //we have users
        users = JSON.parse(users); // convert from string to array of objects
        // console.log("users from localStorage", users);
        for (let user of users) {
            if (user.email === inputEmail.value) {
                //display msg - email already exists
                showToastRegister("Email already exists", false);
                return;
            }
        }
        localStorage.setItem("nextUserId", nextUserId + "");
        //user provided new email
        users = [...users, newUser];
        localStorage.setItem("users", JSON.stringify(users));
    }
    switchPages(PagesIdObj.loginPage);
});
