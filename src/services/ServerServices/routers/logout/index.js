import { Router } from "express";

const router = Router();

router.post('/', async(req, res) => {
    req.session.destroy();
    res.status(200).send('Logout success');
});

export const logout = router;