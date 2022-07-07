import { Router } from "express";

const router = Router();

router.post('/', async(req, res) => {
    try {
        req.session.destroy();
        res.status(200).send('Logout success');
    } catch(error){
        return error;
    }
});

export const logout = router;