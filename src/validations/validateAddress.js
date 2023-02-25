import validate from "./validate.js";
const validateAddress = (value, partOfAddr) => {
    switch (partOfAddr) {
        case "state":
            console.log('state validate');
            break;
        case "country":
            console.log('country validate');
            break;
        case "city":
            console.log('city validate');
            break;
        case "street":
            console.log('street validate');
            break;
        case "house":
            console.log('house validate');
            break;
        case "zip":
            console.log('zip validate');
            break;
        default:
        // code block
    }

    const reg = new RegExp("(\d{ 1,})[a - zA - Z0 - 9\s] + (\.)?[a - zA - Z] + (\,)?[A - Z]{ 2 } [0 - 9]{ 5, 6 }", "g");
    return validate(reg, value, 2, 255).map((err) => `${partOfAddr} is ${err}`);
};

export default validateAddress;

