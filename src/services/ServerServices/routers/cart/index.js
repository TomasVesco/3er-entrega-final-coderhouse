import { Router } from 'express';

import { CartService } from '../../../index.js';
import { ProductService } from '../../../index.js';

const router = Router();

router.post('/', async(req, res) => {
    try {
        const response = await CartService.createCart();
        res.status(200).send(response);
    } catch(error){
        return error;
    }
});

router.get('/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const response = await CartService.checkID(id);
        res.status(200).send(response);
    } catch(error){
        return error;
    }
});

router.post('/:cartid/:productid', async(req, res) => {
    try {
        const cartID = req.params.cartid;
        const productID = req.params.productid;
        const responseCart = await CartService.checkID(cartID);
        const responseProduct = await ProductService.checkID(productID);
        if(responseCart._id === undefined){
            res.status(404).send(responseCart);
        } else {
            if(responseProduct._id === undefined){
                res.status(404).send(responseProduct);
            } else { 
                CartService.addProduct(responseCart, responseProduct);
                res.status(200).send('Product added');
            }
        }
    } catch(error){
        
    }
});

export const cart = router;