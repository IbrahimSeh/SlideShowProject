let propertiesArr;
let listDivThead;
let listDivTbody;
let isBussiness;
let deleteProperty;
let showPopup;
//this function will transfer data from homepage to this page
const initialPropertiesList = (
    propertiesArrFromHomePage,
    isBussinessParam,
    deletePropertyFromHomePage,
    showPopupFromHomePage
) => {

    listDivThead = document.getElementById("home-page-properties-list-thead");
    listDivTbody = document.getElementById("home-page-properties-list-tbody");
    isBussiness = isBussinessParam;
    deleteProperty = deletePropertyFromHomePage;
    showPopup = showPopupFromHomePage;
    updatePropertiesList(propertiesArrFromHomePage);
};

const updatePropertiesList = (propertiesArrFromHomePage) => {
    /*
      this function will get data from homepage and create new list.
      if the list already exists it will remove the old one and
      create new one
    */
    propertiesArr = propertiesArrFromHomePage;
    createList();
};
const completeHead = () => {
    const BussinessBtn = `<tr>
                                <th scope="col">NO</th>
                                <th scope="col">Image</th>
                                <th colspan="2" scope="col">Pic</th>
                                <th scope="col">Title</th>
                                <th scope="col">Credit</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>`;
    const noBussinessBtn = `<tr>
                                <th scope="col">NO</th>
                                <th scope="col">Image</th>
                                <th colspan="2" scope="col">Pic</th>
                                <th scope="col">Title</th>
                                <th scope="col">Credit</th>
                            </tr>`;
    return `${isBussiness ? BussinessBtn : noBussinessBtn}`;
};
const createItem = (name, credit, price, imgUrl, id) => {
    // console.log('createItem ' + name, credit, img, id);
    const BussinessBtn = `
   <td><button type="button" class="btn btn-warning w-100" id="propertyListEditBtn-${id}">
    <i class="bi bi-pencil-square"></i> Edit
  </button>
  </td>
  <td><button type="button" class="btn btn-warning w-100" id="propertyListDeleteBtn-${id}">
    <i class="bi bi-trash3"></i> Edit
  </button>
  </td>
  `;
    return `
            <tr>
                <th scope="row">${id}</th>
                <td><img src="${imgUrl}"
                        alt="" style="width: 150px;" ></td>
                <td colspan="2">
                    <h6>${imgUrl}</h6>
                </td>
                <td>${name}</td>
                <td>${credit}</td>
                
                ${isBussiness ? BussinessBtn : ""}
            </tr>
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

const createList = () => {
    let innerStrBody = "";
    let innerStrHead = "";
    //clear event listeners for delete btns
    clearEventListeners("propertyListDeleteBtn", handleDeleteBtnClick);
    //clear event listeners for edit btns
    clearEventListeners("propertyListEditBtn", handleEditBtnClick);

    //create new elements and remove old ones
    for (let property of propertiesArr) {
        innerStrBody += createItem(
            property.name,
            property.credit,
            property.price,
            property.imgUrl,
            property.id
        );
    }
    innerStrHead += completeHead();
    listDivTbody.innerHTML = innerStrBody;
    listDivThead.innerHTML = innerStrHead;
    // add event listeners for delete btns
    createBtnEventListener("propertyListDeleteBtn", handleDeleteBtnClick);
    // add event listeners for edit btns
    createBtnEventListener("propertyListEditBtn", handleEditBtnClick);
};

//Creates event listener for the delete buttons
const createBtnEventListener = (idKeyword, handleFunction) => {
    let btns = document.querySelectorAll(`[id^='${idKeyword}-']`);
    //add events to new btns
    for (let btn of btns) {
        btn.addEventListener("click", handleFunction);
    }
};

export { initialPropertiesList, updatePropertiesList };
