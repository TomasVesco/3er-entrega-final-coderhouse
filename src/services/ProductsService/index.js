import { productDAO as DAO } from '../../dao/ProductExtend/index.js';

import { PossibleErrors } from '../Errors/index.js';

const productDAO = new DAO();

async function getProducts(){
    return await productDAO.getAll();
}

async function checkID(id){
    const response = await productDAO.find(id);
    if(response.reason === undefined){
        return response;
    } else {
        return PossibleErrors.PRODUCTID;
    }
}

export const ProductService = {
    getProducts,
    checkID
}