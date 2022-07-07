import { productDAO as DAO } from '../../dao/ProductExtend/index.js';

import { PossibleErrors } from '../Errors/index.js';

const productDAO = new DAO();

async function getProducts(){
    return await productDAO.getAll();
}

async function checkID(id){
    let response;
    if(id.length === 24){
        response = await productDAO.find({id});
    } else {
        response = PossibleErrors.PRODUCTID;
    }
    return response;
}

export const ProductService = {
    getProducts,
    checkID
}