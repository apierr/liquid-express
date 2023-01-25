const express = require('express');
const app = require('../index')(express());
const { getOrders } = require('./utils/get-orders');
const { getCustomer } = require('./utils/get-customer');
const { getProducts } = require('./utils/get-products');
const {PORT} = process.env;

app.get('/', async (req, res) => {
    res.render('index', {
        name: 'name',
        TemplateName: 'Template-Name',
    });
});

app.get('/orders', async (req, res) => {
    const orders = await getOrders().catch(err => {throw err;}); // prettier-ignore
    console.log(`message:`, {orders});
    res.render('orders', {
        orders
    });
});

app.get('/customer', async (req, res) => {
    const customer = await getCustomer().catch(err => {throw err;}); // prettier-ignore
    res.render('customer', {
        customer
    });
});

app.get('/products', async (req, res) => {
    const products = await getProducts().catch(err => {throw err;}); // prettier-ignore
    console.log(`message:`, {products});
    res.render('products', {
        products
    });
});

app.listen(PORT, () => console.log(`server started on http://127.0.0.1:${PORT}`));
