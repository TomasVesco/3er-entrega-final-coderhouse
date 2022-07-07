import mongoose from 'mongoose';

const product = 'product';

const productSchema = new mongoose.Schema({
    title: {type: String, require: false, max: 100},
    price: {type: Number, require: false, max: 10000},
    description: {type: String, require: false, max: 10000},
    image: {type: String, require: false, max: 100},
    stock: {type: Number, require: false, max: 100},
    code: {type: String, require: false, max: 100}
});

const productAtlasDB = mongoose.model(product,productSchema);

export { productSchema, productAtlasDB };