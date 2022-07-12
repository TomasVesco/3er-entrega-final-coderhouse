import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
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
        res.status(200).send(user);
    } catch(error){
        return error;
    }
});

export const info = router;