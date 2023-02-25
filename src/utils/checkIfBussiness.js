const checkIfBussiness = () => {
    let tokenUser = localStorage.getItem("tokenUser");
    if (!tokenUser) {
        return false;
    }
    tokenUser = JSON.parse(tokenUser);
    return tokenUser.isBussiness;
};

export default checkIfBussiness;
