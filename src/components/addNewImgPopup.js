import { initPopup } from "./editImgPopup.js";
import { addNewProperty } from "../pages/HomePage.js";

const addNewImgPopup = () => {
    initPopup(undefined, addNewProperty);
};

export { addNewImgPopup };
