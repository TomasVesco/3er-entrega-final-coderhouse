import chai from 'chai';
import chaiHttp from 'chai-http';

const expect = chai.expect;

chai.use(chaiHttp);
const url = 'http://localhost:8080';

describe('Test llamadas a la API', () => {
    it('Debería crear un carrito', (done) => {
        chai
            .request(url)
            .post('/api/cart')
            .end(function(err, res) {
                expect(res.body).to.have.property('products');
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Debería traer los productos del carrito 62e863716c363c3589e812f9', (done) => {
        chai
            .request(url)
            .get('/api/cart/62e863716c363c3589e812f9')
            .end(function(err, res) {
                expect(res.body.products.length).to.be.equal(2);
                done();
            });
    });

    it('Debería agregar un producto al carrito 62e863ce6c363c3589e812ff', (done) => {
        chai
            .request(url)
            .post('/api/cart/62e863ce6c363c3589e812ff/62c60bfbf1ac2bf2a2975a8c')
            .end(function(err, res) {
                expect(res.body).to.have.property('modifiedCount').to.be.equal(1);
                done();
            });
    });
});