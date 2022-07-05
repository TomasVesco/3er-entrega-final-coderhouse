import { userDAO } from '../dao/index.js';
import { PossibleErrors } from '../services/Errors/index.js';

const Users = new userDAO();

const onCheckUser = async(req, res, next) => {
    try {
        const { email } = req.body;
        const users = await Users.getAll() || [];
        if(users.some(e => e.email === email)){
            res.status(400).send(PossibleErrors.EMAIL);
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
    }
};

export { onCheckUser };