import { Router } from "express";
import passport from "passport";

const router = Router();

router.post('/', passport.authenticate('login'), async(req, res) => {
    try {
        const { name, email, address, age, phoneNumber, photo } = req.user;
        const user = {
            name,
            email,
            address,
            age,
            phoneNumber,
            photo
        }
        req.session.user = user;
        res.status(200).send('Login success');
    } catch(error){
        return error;
    }
});

export const login = router;