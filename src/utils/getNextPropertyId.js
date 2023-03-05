const getNextPropertyId = () => {
    let nextPropertyId = localStorage.getItem("nextPropertyId");
    if (!nextPropertyId) {
        return 1;
    }
    nextPropertyId = +nextPropertyId;//convert string to number
    if (isNaN(nextPropertyId)) {
        nextPropertyId = 1;
    }
    return nextPropertyId;
};

export default getNextPropertyId;
