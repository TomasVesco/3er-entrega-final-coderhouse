import { userDAO as DAO } from '../../dao/UserExtend/index.js';

const userDAO = new DAO();

async function saveUser( user ){
    //encriptar pw
    const response = await userDAO.save( user );
    return response;
}

export const UserService = {
    saveUser
}