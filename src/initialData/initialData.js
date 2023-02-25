import PropertyOfImg from "../modelsOfData/imgProduct.js";

let id = 1;
let nextUserId = 1;

const createData = () => {
    let propertiesImgsArr = [
        new PropertyOfImg(
            id++,
            "Kenny's house",
            8.12,
            `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
            "./assets/imgs/1.jpg"
        ),
        new PropertyOfImg(
            id++,
            "Chocolate house",
            20,
            `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
            "./assets/imgs/2.jpg"
        ),
        new PropertyOfImg(
            id++,
            "Kenny's beach house",
            25,
            `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
            "./assets/imgs/3.jpg"
        ),
        new PropertyOfImg(
            id++,
            "John's raft",
            9.9,
            `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
            "./assets/imgs/4.jpg"
        ),
        new PropertyOfImg(
            id++,
            "John's pie",
            3.14,
            `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
            "./assets/imgs/5.jpg"
        ),
        new PropertyOfImg(
            id++,
            "Kart's dream house",
            2.5,
            `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
            "./assets/imgs/6.jpg"
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
    localStorage.setItem("nextid", id + "");
    localStorage.setItem("nextUserId", nextUserId + "");
};

setInitialData();
