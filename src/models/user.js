export class User {
    born_date;
    cpf;
    email;
    gender;
    id;
    last_name;
    name;
    password;
    phone;
    profile_picture;
    registration_date;
    repeat_password;
    rg;

    constructor(
        born_date = '',
        cpf = '',
        email = '',
        gender = '',
        id = '',
        last_name = '',
        name = '',
        password = '',
        phone = '',
        profile_picture = '',
        registration_date = '',
        repeat_password = '',
        rg = '') {
            this.born_date = born_date;
            this.cpf = cpf;
            this.email = email;
            this.gender = gender;
            this.id = id;
            this.last_name = last_name;
            this.name = name;
            this.password = password;
            this.phone = phone;
            this.profile_picture = profile_picture;
            this.registration_date = registration_date;
            this.repeat_password = repeat_password
            ;
            this.rg = rg;
    }
}