import bcrypt from 'bcrypt';

async function encrypt(password){
    return await bcrypt.hash(password, 10);
}

function isEmail(email){
    const emailRegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isEmail = emailRegExp.test(email);
    if(!isEmail){
        return 0;
    } else {
        return 1;
    }
}

export const UtilsUserService = {
    encrypt,
    isEmail
}