let propertiesArr;
let isBussiness;
let deleteProperty;
let showPopup;
let galleryDiv;
//this function will transfer data from homepage to this page
const initialPropertiesGallery = (propertiesArrFromHomePage,
  isBussinessParam,
  deletePropertyFromHomePage,
  showPopupFromHomePage) => {
  galleryDiv = document.getElementById("home-page-properties-gallery");
  isBussiness = isBussinessParam;
  deleteProperty = deletePropertyFromHomePage;
  showPopup = showPopupFromHomePage;
  updatePropertiesGallery(propertiesArrFromHomePage);
};

const updatePropertiesGallery = (propertiesArrFromHomePage) => {
  /*
    this function will get data from homepage and create new gallery.
    if the gallery already exists it will remove the old one and
    create new one
  */
  propertiesArr = propertiesArrFromHomePage;
  createGallery();
};

const createCard = (name, description, price, img, id) => {
  const BussinessBtn = `
  <button type="button" class="btn btn-warning" id="propertyGalleryEditBtn-${id}">
    <i class="bi bi-pen-fill"></i> Edit
  </button>
  <button type="button" class="btn btn-danger" id="propertyGalleryDeleteBtn-${id}">
    <i class="bi bi-pen-fill"></i> Delete
  </button>
  `;
  return `
  <div class="col">
    <div class="card">
      <img
        src="${img}"
        class="card-img-top"
        alt="${name}"
      />
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">
          ${description}
        </p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">${price}</li>
      </ul>
      <div class="card-body">
        <button type="button" class="btn btn-success">
          Buy now
        </button>
        ${isBussiness ? BussinessBtn : ""}
      </div>
    </div>
  </div>
  `;
};

const getIdFromClick = (ev) => {
  let idFromId = ev.target.id.split("-"); // split the id to array
  if (!ev.target.id) {
    /*
        if press on icon then there is no id
        then we need to take the id of the parent which is btn
      */
    idFromId = ev.target.parentElement.id.split("-");
  }
  return idFromId[1];
};

const handleDeleteBtnClick = (ev) => {
  deleteProperty(getIdFromClick(ev));
};

const handleEditBtnClick = (ev) => {
  showPopup(getIdFromClick(ev));
};

const clearEventListeners = (idKeyword, handleFunction) => {
  //get all old btns
  let btnsBefore = document.querySelectorAll(`[id^='${idKeyword}-']`);
  //remove old events
  for (let btn of btnsBefore) {
    btn.removeEventListener("click", handleFunction);
  }
};

const createGallery = () => {
  let innerStr = "";
  //clear event listeners for delete btns
  clearEventListeners("propertyGalleryDeleteBtn", handleDeleteBtnClick);
  //clear event listeners for edit btns
  clearEventListeners("propertyGalleryEditBtn", handleEditBtnClick);

  //create new elements and remove old ones
  for (let property of propertiesArr) {
    innerStr += createCard(
      property.name,
      property.description,
      property.price,
      property.imgUrl,
      property.id
    );
  }
  galleryDiv.innerHTML = innerStr;
  // add event listeners for delete btns
  createBtnEventListener("propertyGalleryDeleteBtn", handleDeleteBtnClick);
  // add event listeners for edit btns
  createBtnEventListener("propertyGalleryEditBtn", handleEditBtnClick);
};

//Creates event listener for the delete buttons
const createBtnEventListener = (idKeyword, handleFunction) => {
  let btns = document.querySelectorAll(`[id^='${idKeyword}-']`);
  //add events to new btns
  for (let btn of btns) {
    btn.addEventListener("click", handleFunction);
  }
};

export { initialPropertiesGallery, updatePropertiesGallery };
