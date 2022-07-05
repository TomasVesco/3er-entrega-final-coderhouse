import { userDAO } from '../dao/index.js';
import { PossibleErrors } from '../services/Errors/index.js';

const Users = new userDAO();

const onCreateUser = async(req, res, next) => {
    try {
        const obj = {
            email,
            password,
            name,
            adress, 
            age, 
            phoneNumber, 
            photo 
        }
        const response = await Users.save( obj );
        if(response !== undefined){
            next();
        } else {
            res.status(500).send(PossibleErrors.INTERVALSERVER);
        }
    } catch (error) {
        console.log(error);
    }
};

export { onCreateUser };