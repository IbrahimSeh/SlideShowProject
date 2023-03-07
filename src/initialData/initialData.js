import imgProperty from "../modelsOfData/imgProperty.js";

let nextPropertyId = 1;
let nextUserId = 1;

const createData = () => {
    let propertiesImgsArr = [
        new imgProperty(
            nextPropertyId++,
            "Kenny's house",
            812,
            "user1",
            "http://southparkstudios.mtvnimages.com/shared/locations/mccormick-house.jpg"
        ),
        new imgProperty(
            nextPropertyId++,
            "Chocolate house",
            20,
            "user2",
            "https://i.pinimg.com/originals/c8/76/76/c876767d3236d4aa6c70d9fd30e75ca3.jpg"
        ),
        new imgProperty(
            nextPropertyId++,
            "nature",
            25,
            "user3",
            "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
        ),
        new imgProperty(
            nextPropertyId++,
            "nature desert and sands",
            9.9,
            "user4",
            "https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863"
        ),

        new imgProperty(
            nextPropertyId++,
            "Kenny's land",
            3.14,
            "user5",
            "https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg"
        ),
        new imgProperty(
            nextPropertyId++,
            "Taj mahal",
            2.5,
            "user6",
            "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
        ),
    ];
    return propertiesImgsArr;
};

const setInitialData = () => {
    let properties = localStorage.getItem("propsOfImg");
    let users = localStorage.getItem("users");
    // In case there is data previously in localStorage
    if (users || properties) {
        return;
    }
    localStorage.setItem("propsOfImg", JSON.stringify(createData()));
    localStorage.setItem("nextPropertyId", nextPropertyId + "");
    localStorage.setItem("nextUserId", nextUserId + "");
};

setInitialData();
