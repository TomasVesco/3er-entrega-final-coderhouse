import axios from 'axios';
import chai from 'chai';

const assert = chai.assert;

describe('Test llamadas a la API', async function() {
    it('Debería crear un carrito', async function() {
        const createCart = await axios.post('http://localhost:8080/api/cart');
        assert.strictEqual(createCart.data.products.length, 0);
        await axios.delete(`http://localhost:8080/api/cart/${createCart.data._id}`);
    });

    it('Debería traer un carrito', async function() {
        const createCart = await axios.post('http://localhost:8080/api/cart');
        const getCart = await axios.get(`http://localhost:8080/api/cart/${createCart.data._id}`);
        assert.strictEqual(getCart.data._id, createCart.data._id);
        await axios.delete(`http://localhost:8080/api/cart/${createCart.data._id}`);
    });

    it('Debería agregar un producto al carrito', async function() {
        const createCart = await axios.post('http://localhost:8080/api/cart');
        const addProductToCart = await axios.post(`http://localhost:8080/api/cart/${createCart.data._id}/62c60bfbf1ac2bf2a2975a8c`);
        assert.strictEqual(addProductToCart.data.modifiedCount, 1);
        await axios.delete(`http://localhost:8080/api/cart/${createCart.data._id}`);
    });
    
    it('Debería eliminar el carrito', async function() {
        const createCart = await axios.post('http://localhost:8080/api/cart');
        const deleteCart = await axios.delete(`http://localhost:8080/api/cart/${createCart.data._id}`);
        assert.strictEqual(deleteCart.data.deletedCount, 1);
    });
});