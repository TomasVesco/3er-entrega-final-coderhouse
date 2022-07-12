import { Router } from "express";

import { MulterMiddleware } from "../../../../middlewares/multer.js";

import { UserService } from "../../../index.js";

const router = Router();

router.post('/', MulterMiddleware.single('file'), async(req, res) => {
    try {
        const { email, password, name, address, age, phoneNumber } = req.body;
        const response = await UserService.saveUser( {email, password, name, address, age, phoneNumber, photo:req.file.path} );
        res.status(200).send(response);
    } catch (error) {
        return error;
    }
});

export const signUp = router;