let propertiesArr;
let carouselDiv;
let creditLabel;
let showIdx; //index(array) of the image that we display now
let animationStarted;
let imgToShow, imgToHide;
//this function will transfer data from homepage to this page
const initialPropertiesCarousel = (propertiesArrFromHomePage) => {
    carouselDiv = document.getElementById("home-page-properties-carousel");
    creditLabel = document.getElementById("img-caption");

    initializeBtns();
    updatePropertiesCarousel(propertiesArrFromHomePage);
};

const updatePropertiesCarousel = (propertiesArrFromHomePage) => {
    /*
      this function will get data from homepage and create new carousel.
      if the carousel already exists it will remove the old one and
      create new one
    */
    showIdx = 0; //starting index
    animationStarted = 0; //we waiting for 0 animations
    propertiesArr = propertiesArrFromHomePage;
    creditLabel.innerText = propertiesArr[0].credit;
    createCarousel();
};

const initializeBtns = () => {
    document.getElementById("back-carusel-btn").addEventListener("click", () => {
        if (animationStarted !== 0) {
            return;
        }
        creditLabel.innerText = "";
        animationStarted = 2;
        let prevIdx = showIdx - 1;
        if (prevIdx < 0) {
            prevIdx = propertiesArr.length - 1; //last image
        }
        creditLabel.innerText = propertiesArr[prevIdx].credit;
        imgToHide = document.querySelector(
            `.img-container > img:nth-child(${showIdx + 1})`
        );
        imgToHide.classList.add("fade-out");
        const hideImgAnim = () => {
            imgToHide.removeEventListener("animationend", hideImgAnim); //remove event after executed
            imgToHide.classList.add("opacity-0");
            imgToHide.classList.remove("fade-out");
            animationStarted--;
        };

        imgToHide.addEventListener("animationend", hideImgAnim);

        imgToShow = document.querySelector(
            `.img-container > img:nth-child(${prevIdx + 1})`
        );
        imgToShow.classList.remove("opacity-0");
        imgToShow.classList.add("fade-in");
        imgToShow.addEventListener(
            "animationend",
            () => {
                imgToShow.classList.remove("fade-in");
                animationStarted--;
            },
            { once: true }
        );
        showIdx = prevIdx;
    });

    document.getElementById("next-carusel-btn").addEventListener("click", () => {
        if (animationStarted !== 0) {
            return;
        }
        creditLabel.innerText = "";
        animationStarted = 2; // the number should be as the number of the animations that we waiting for
        let nextIdx = showIdx + 1;
        //showIdx = index of image to hide
        //nextIdx = index of image to display
        if (nextIdx >= propertiesArr.length) {
            /*
              if we now in the last position
              the next id should be 0 because it is
              the next id :)
            */
            nextIdx = 0;
        }
        creditLabel.innerText = propertiesArr[nextIdx].credit;
        let imgToHide = document.querySelector(
            `.img-container > img:nth-child(${showIdx + 1})`
        ); //children start from 1
        imgToHide.classList.add("fade-out");
        const hideImgAnim = () => {
            imgToHide.removeEventListener("animationend", hideImgAnim); //remove event after executed
            imgToHide.classList.add("opacity-0");
            imgToHide.classList.remove("fade-out");
            animationStarted--;
        };
        imgToHide.addEventListener("animationend", hideImgAnim);
        let imgToShow = document.querySelector(
            `.img-container > img:nth-child(${nextIdx + 1})`
        );
        imgToShow.classList.remove("opacity-0");
        imgToShow.classList.add("fade-in");
        imgToShow.addEventListener(
            "animationend",
            () => {
                imgToShow.classList.remove("fade-in");
                animationStarted--;
            },
            { once: true }
        );
        showIdx = nextIdx;
    });
};

const createItem = (name, img) => {
    //opacity-0 hide image
    return `
    <img src="${img}" alt="${name}" class="opacity-0" />
    
`;
};

const createCarousel = () => {
    let innerStr = "";
    for (let property of propertiesArr) {
        innerStr += createItem(property.name, property.imgUrl); // append, string concatenation
    }
    carouselDiv.innerHTML = innerStr;
    //show the first img
    document
        .querySelector(".img-container > img:nth-child(1)")
        .classList.remove("opacity-0");
};

export { initialPropertiesCarousel, updatePropertiesCarousel };
