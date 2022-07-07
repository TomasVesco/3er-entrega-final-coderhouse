import { Router } from "express";

import passport from "passport";

const router = Router();

router.post('/', passport.authenticate('login'), async(req, res) => {
    try {
        res.status(200).send('Login success');
    } catch(error){
        return error;
    }
});

export const login = router;