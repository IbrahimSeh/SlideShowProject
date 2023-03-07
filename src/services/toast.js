const registerToast = document.getElementById("registerToast");
let idRgst = 1;
const showToastRegister = (msg, success = true) => {
    let thisId = idRgst++;
    registerToast.innerHTML += `<div id="toastMsg-${thisId}" class="${success ? "success" : "error"
        }">${msg}
  <div class="toast-timer"></div>
  </div>`;
    setTimeout(() => {
        document.getElementById(`toastMsg-${thisId}`).remove();
    }, 3000);
};

const userToast = document.getElementById("userToast");
let idUsr = 1;
const showToastUser = (msg, success = true) => {
    let thisId = idUsr++;
    userToast.innerHTML += `<div id="toastMsg-${thisId}" class="${success ? "success" : "error"
        }">${msg}
  <div class="toast-timer"></div>
  </div>`;
    setTimeout(() => {
        document.getElementById(`toastMsg-${thisId}`).remove();
    }, 3000);
};

const loginToast = document.getElementById("loginToast");
let idLogin = 1;
const showToastLogin = (msg, success = true) => {
    let thisId = idLogin++;
    loginToast.innerHTML += `<div id="toastMsg-${thisId}" class="${success ? "success" : "error"
        }">${msg}
  <div class="toast-timer"></div>
  </div>`;
    setTimeout(() => {
        document.getElementById(`toastMsg-${thisId}`).remove();
    }, 3000);
};

const homeToast = document.getElementById("homeToast");
let idHome = 1;
const showToastHome = (msg, success = true) => {
    let thisId = idHome++;
    homeToast.innerHTML += `<div id="toastMsg-${thisId}" class="${success ? "success" : "error"
        }">${msg}
  <div class="toast-timer"></div>
  </div>`;
    setTimeout(() => {
        document.getElementById(`toastMsg-${thisId}`).remove();
    }, 3000);
};
export { showToastRegister, showToastUser, showToastHome, showToastLogin };
