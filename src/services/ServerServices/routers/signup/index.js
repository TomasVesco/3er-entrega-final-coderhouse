import { Router } from "express";

import { UserService } from "../../../index.js";

const router = Router();

router.post('/', async(req, res) => {
    try {
        const { email, password, name, adress, age, phoneNumber, photo } = req.body;
        const response = await UserService.saveUser( {email, password, name, adress, age, phoneNumber, photo} );
        res.send(response);
    } catch (error) {
        return error;
    }
});

export const signUp = router;