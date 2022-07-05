import { Router } from "express";
import passport from "passport";

const router = Router();

router.post('/', passport.authenticate('login'), async(req, res) => {
    res.status(200).send('Login success');
});

export const login = router;