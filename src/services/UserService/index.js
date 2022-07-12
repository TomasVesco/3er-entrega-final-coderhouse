import { userDAO as DAO } from '../../dao/userDAO/index.js';
import { UtilsUserService } from './utils/index.js';
import { PossibleErrors } from '../Errors/index.js';

const userDAO = new DAO();

async function saveUser(user){
    for(const propery in user){
        if(user[propery]=== undefined){
            return PossibleErrors.CREATEUSERPROPS;
        }
    }
    const isEmail = UtilsUserService.isEmail(user.email);
    if(!isEmail){
        return PossibleErrors.NOTEMAIL;
    } else {
        user.password = await UtilsUserService.encrypt(user.password);
        const response = await userDAO.save(user);
        if(response.code){
            return PossibleErrors.EMAIL;
        } else {
            return response;
        }
    }
}

async function findUserByEmail(email){
    return await userDAO.find({email});
}

export const UserService = {
    saveUser,
    findUserByEmail
}