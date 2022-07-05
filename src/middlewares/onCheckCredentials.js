import bcrypt from 'bcrypt';

import { userDAO } from '../dao/index.js';
import { PossibleErrors } from '../services/Errors/index.js';

const Users = new userDAO();

const onCheckCredentials = async(req, res, next) => {
    try {
        const { email, password } = req.body;
        const users = await Users.getAll();
        const existUser = await users.find(e => e.email === email);
        if(existUser){
            const passwordCorrect = await bcrypt.compare(password, existUser.password);
            if(passwordCorrect){
                req.session.userInfo = {
                    "name": `${existUser.name}`,
                    "email": `${existUser.email}`
                }
                next();
            } else {
                res.status(400).send(PossibleErrors.CREDENTIALS);
            }
        } else {
            res.status(400).send(PossibleErrors.CREDENTIALS);
        }
    } catch (error) {
        console.log(error);
    }
};

export { onCheckCredentials };