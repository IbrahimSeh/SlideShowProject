const registerToast = document.getElementById("registerToast");
let idRgst = 1;
const showToastRegister = (msg, success = true) => {
    console.log('showToastRegister');
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
    console.log('showToastUser');
    let thisId = idUsr++;
    userToast.innerHTML += `<div id="toastMsg-${thisId}" class="${success ? "success" : "error"
        }">${msg}
  <div class="toast-timer"></div>
  </div>`;
    setTimeout(() => {
        document.getElementById(`toastMsg-${thisId}`).remove();
    }, 3000);
};
export { showToastRegister, showToastUser };
