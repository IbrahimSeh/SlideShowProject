import imgProperty from "../modelsOfData/imgProperty.js";
import getNextPropertyId from "../utils/getNextPropertyId.js";
import { updatePropertiesGallery } from "../components/PropertiesGallery.js";
import { updatePropertiesList } from "../components/PropertiesList.js";

let modalDiv = document.getElementById("myModal");
let addPicForm = document.getElementById("addPicForm");
let modalInputUrl = document.getElementById("modal-input-url");
let modalInputAlt = document.getElementById("modal-input-alt");
let modalInputCredit = document.getElementById("modal-input-credit");
let modalInputPrice = document.getElementById("modal-input-price");
let modalBtnSubmit = document.getElementById("modal-btn-submit");
let modalBtnCancel = document.getElementById("modal-btn-cancel");

let propertiesArr, originalPropertiesArr, newProperty;

const openModal = () => {
    modalDiv.style.display = "block";

    modalBtnCancel.addEventListener("click", () => {
        modalDiv.style.display = 'none';
    });

    modalBtnSubmit.addEventListener("click", () => {

        newProperty = new imgProperty(getNextPropertyId(), "", 0, "", "");
        newProperty.name = modalInputAlt.value;

        console.log('modalInputAlt.value = ' + modalInputAlt.value);
        newProperty.price = modalInputPrice.value;
        newProperty.credit = modalInputCredit.value;
        newProperty.imgUrl = modalInputUrl.value;
        propertiesArr = localStorage.getItem("propsOfImg");
        if (!propertiesArr) {
            return;
            // No photos to display
        }
        propertiesArr = JSON.parse(propertiesArr);
        originalPropertiesArr = [...propertiesArr];

        originalPropertiesArr = [...originalPropertiesArr, newProperty];
        let nextPropertyId = +newProperty.id + 1;
        localStorage.setItem("nextPropertyId", nextPropertyId + "");
        propertiesArr = [...originalPropertiesArr];
        editProperty();
        modalDiv.style.display = "none";
        location.reload();
    });


    // Get the <span> element that closes the modal
    let closeSpan = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    closeSpan.onclick = function () {

        modalDiv.style.display = "none";
    }

    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modalDiv.style.display = 'none'
        }
    });
};

const editProperty = () => {
    localStorage.setItem("propsOfImg", JSON.stringify(originalPropertiesArr));//save to local storage
    updateDisplays(); // update html
};
const updateDisplays = () => {
    updatePropertiesGallery(propertiesArr); // update gallery
    updatePropertiesList(propertiesArr); // update list
    //updatePropertiesCarousel(propertiesArr);  update carousel
};
export default openModal;