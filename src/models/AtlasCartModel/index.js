import mongoose from 'mongoose';

import { productSchema } from '../index.js';

const cart = 'cart';

const cartSchema = new mongoose.Schema({
    products: [productSchema]
});

export const cartAtlasDB = mongoose.model(cart,cartSchema);