import { Router } from "express";

import { config } from "../../../../config/index.js";
import { CartService } from '../../../../services/index.js';
import { UserService } from "../../../../services/index.js";

const router = Router();

router.post('/:cartid', async(req, res) => {
    try {
        const { name, email, phoneNumber } = req.session.user;
        const cart = await CartService.checkID(req.params.cartid);
        if(cart.products === undefined || cart.products.length === 0){
            res.status(200).send(cart);
        } else {
            await UserService.sendEmail(cart.products, `New order from: ${name} ${email}`);
            await UserService.sendWP(config.ADM_PHONE, `New order from: ${name} ${email} Products: ${cart.products}`);
            await UserService.sendWP(`+${phoneNumber}`, 'Order in process');
            await CartService.deleteCart(req.params.cartid);
            res.status(200).send('Payment done');
        }
    } catch (error) {
        return error;
    }
});

export const payment = router;