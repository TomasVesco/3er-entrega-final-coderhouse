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
        const response = await CartService.checkID(req.params.id);
        res.status(200).send(response);
    } catch(error){
        return error;
    }
});

router.post('/:cartid/:productid', async(req, res) => {
    try {
        const responseCart = await CartService.checkID({'_id': req.params.cartid});
        const responseProduct = await ProductService.checkID({'_id': req.params.productid});
        if(responseCart._id === undefined){
            res.status(404).send(responseCart);
        } else {
            if(responseProduct._id === undefined){
                res.status(404).send(responseProduct);
            } else { 
                CartService.addProductToCart(responseCart, responseProduct);
                res.status(200).send('Product added');
            }
        }
    } catch(error){
        return error;
    }
});

router.delete('/:cartid', async(req, res) => {
    try {
        const response = await CartService.deleteCart(req.params.cartid);
        res.status(200).send(response);
    } catch(error){
        return error;
    }
});

router.delete('/:cartid/:productid', async(req, res) => {
    try {
        const responseCart = await CartService.checkID({'_id': req.params.cartid});
        if(responseCart._id === undefined){
            res.status(404).send(responseCart);
        } else {
            const response = await CartService.deletePoC(responseCart, req.params.productid);
            res.status(200).send(response);
        }
    } catch(error){
        return error;
    }
})

export const cart = router;