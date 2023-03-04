import imgProperty from "../modelsOfData/imgProperty.js";

let nextPropertyId = 1;
let nextUserId = 1;

const createData = () => {
    let propertiesImgsArr = [
        new imgProperty(
            nextPropertyId++,
            "Kenny's house",
            8.12,
            `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
            "https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg"
        ),
        // https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__340.jpg
        new imgProperty(
            nextPropertyId++,
            "Chocolate house",
            20,
            `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
            "./assets/images/awsomeColor2.jpg"
        ),
        // https://static-cse.canva.com/blob/666314/bestfreestockphotos.jpg
        new imgProperty(
            nextPropertyId++,
            "Kenny's beach house",
            25,
            `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
            "./assets/images/awsomeColor3.jpg"
        ),
        // https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg
        new imgProperty(
            nextPropertyId++,
            "John's raft",
            9.9,
            `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
            "./assets/images/awsomeColor4.jpg"
        ),
        // https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863
        new imgProperty(
            nextPropertyId++,
            "John's pie",
            3.14,
            `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
            "./assets/images/colorPlate1.jpg"
        ),
        // https://thumbs.dreamstime.com/b/landscape-nature-mountan-alps-rainbow-76824355.jpg
        new imgProperty(
            nextPropertyId++,
            "Kart's dream house",
            2.5,
            `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quasi ea culpa magnam enim soluta, totam, illum maiores, incidunt in quo natus eius sint. Alias nihil nobis dolor id cumque!
        Tempore tempora, et delectus dicta mollitia quo natus magnam vero aliquam quisquam! Nam expedita labore reprehenderit omnis eum. Aliquid neque suscipit reiciendis, sequi soluta illum quae at laborum quasi voluptatum.`,
            "https://www.dpa.com/fileadmin/_processed_/b/a/csm_2._Platz_News_9f70fddc53.jpg"
        ),
        // https://www.dpa.com/fileadmin/_processed_/b/a/csm_2._Platz_News_9f70fddc53.jpg
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
