import { Router } from "express";

const router = Router();

import { onCheckCredentials } from "../../../../middlewares/index.js";
router.post('/', onCheckCredentials, async(req, res) => {
    res.status(200).send('Login success');
});

export const login = router;