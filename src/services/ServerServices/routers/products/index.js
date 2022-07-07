import { Router } from "express";

import { ProductService } from '../../../index.js';

const router = Router();

router.get('/', async(req, res) => {
    try {
        const products = await ProductService.getProducts();
        res.send(products);
    } catch(error){
        return error;
    }
});

export const products = router;