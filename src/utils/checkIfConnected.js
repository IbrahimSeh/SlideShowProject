const checkIfConnected = () => {
    let tokenUser = localStorage.getItem("tokenUser");
    if (!tokenUser) {
        return false;
    }
    tokenUser = JSON.parse(tokenUser);
    return !!tokenUser; //convert to boolean
};

export default checkIfConnected;
