class User {
    id;
    Fname;
    Lname;
    state;
    country;
    city;
    street;
    house;
    zipcode;
    email;
    password;
    phone;
    isBussiness;
    constructor(id,
        Fname,
        Lname,
        state,
        country,
        city,
        street,
        house,
        zipcode,
        email,
        password,
        phone,) {
        this.id = id;
        this.Fname = Fname;
        this.Lname = Lname;
        this.state = state;
        this.country = country;
        this.city = city;
        this.street = street;
        this.house = house;
        this.zipcode = zipcode;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.isBussiness = flase;
    }
}
export default User;
