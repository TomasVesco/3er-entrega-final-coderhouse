import bcrypt from 'bcrypt';
import parsePhoneNumber from 'libphonenumber-js';

async function encrypt(password){
    return await bcrypt.hash(password, 10);
}

function checkEmail(email){
    const emailRegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return emailRegExp.test(email);
}

function checkPhone(phone){
    return parsePhoneNumber(`${phone}`, 'AR').isValid()
}

export const UtilsUserService = {
    encrypt,
    checkEmail,
    checkPhone
}