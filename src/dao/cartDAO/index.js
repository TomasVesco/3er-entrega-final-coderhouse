import { DAO } from "../DAO/index.js";

import { cartAtlasDB } from '../../models/index.js';

class cartDAO extends DAO {
    constructor(){
        super(cartAtlasDB);
    }
    async updateCart(cart, product){
        const { title, price, description, image, stock, code } = product;
        await cartAtlasDB.updateOne({"_id": cart._id},{$push: {products: {"title": title, "price": price, "image": image, "description": description, "stock": stock, "code": code}}});
    }
    async deleteProductOfCart(cart, productID){
        return await cartAtlasDB.updateOne({"_id": cart.id},{$pull: {products: {"_id": productID}}});
    }
}

export { cartDAO };