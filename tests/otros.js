import express from 'express';

const app = express();

app.post('/test/createCart', async(req, res) => {
    try {
        const createCart = await axios.post('http://localhost:8080/api/cart');
        res.status(200).send(createCart.data);

    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/test/getCart', async(req, res) => {
    try {
        const createCart = await axios.post('http://localhost:8080/api/cart');
        const getCart = await axios.get(`http://localhost:8080/api/cart/${createCart.data._id}`);
        res.status(200).send(getCart.data);
        await axios.delete(`http://localhost:8080/api/cart/${createCart.data._id}`);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/test/addProductToCart', async(req, res) => {
    try {
        const createCart = await axios.post('http://localhost:8080/api/cart');
        const addProductToCart = await axios.post(`http://localhost:8080/api/cart/${createCart.data._id}/62c60bfbf1ac2bf2a2975a8c`);
        res.status(200).send(addProductToCart.data);
        await axios.delete(`http://localhost:8080/api/cart/${createCart.data._id}`);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/test/deleteCart', async(req, res) => {
    try {
        const createCart = await axios.post('http://localhost:8080/api/cart');
        const deleteCart = await axios.delete(`http://localhost:8080/api/cart/${createCart.data._id}`);
        res.status(200).send(deleteCart.data);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(8081);