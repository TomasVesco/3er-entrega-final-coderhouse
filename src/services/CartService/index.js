import { cartDAO as DAO } from '../../dao/CartExtend/index.js'; 

import { PossibleErrors } from '../Errors/index.js';

const cartDAO = new DAO();

async function getCarts(){
    return await cartDAO.getAll();
}

async function createCart(){
    return await cartDAO.save({});
}

async function checkID(id){
    let response;
    if(id.length === 24){
        response = await cartDAO.find({id});
    } else {
        response = PossibleErrors.CARTID;
    }
    return response;
}

async function addProduct(cart, product){
    await cartDAO.updateCart(cart, product);
}

export const CartService = {
    getCarts,
    createCart,
    checkID,
    addProduct
}