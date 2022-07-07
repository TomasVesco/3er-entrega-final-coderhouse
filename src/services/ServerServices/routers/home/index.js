import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    try {
        res.status(200).send('Hola');
    } catch(error){
        return error;
    }
});

export const home = router;