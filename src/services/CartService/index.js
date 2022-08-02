import { cartDAO as DAO } from '../../dao/cartDAO/index.js'; 

import { PossibleErrors } from '../Errors/index.js';

const cartDAO = new DAO();

async function getCarts(){
    return await cartDAO.getAll();
}

async function createCart(){
    return await cartDAO.save({});
}

async function checkID(id){
    const response = await cartDAO.find({"_id": id});
    if(response !== null && response.reason === undefined){
        return response;
    } else {
        return PossibleErrors.CARTID;
    }
}

async function addProductToCart(cart, product){
    return await cartDAO.updateCart(cart, product);
}

async function deleteCart(id){
    const response = await cartDAO.find({"_id": id});
    if(response.reason === undefined){
        return await cartDAO.deleteByID(id);
    } else {
        return PossibleErrors.CARTID;
    }
}

async function deletePoC(cart, productID){
    if(cart.products.some(p => p.id === productID)){
        return await cartDAO.deleteProductOfCart(cart, productID);
    } else {
        return PossibleErrors.PRODUCTINCART;
    }
}

export const CartService = {
    getCarts,
    createCart,
    checkID,
    addProductToCart,
    deleteCart,
    deletePoC
}