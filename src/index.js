const express = require('express');
const app = require('../index')(express());
const { getOrder } = require('./utils/get-order');
const { getProducts } = require('./utils/get-products');


app.get('/', async (req, res) => {
    const order = await getOrder().catch(err => {throw err;}); // prettier-ignore
    res.render('index', {
        name: 'name',
        TemplateName: 'Templat-eName',
        order
    });
});

app.get('/order-list', async (req, res) => {
    const order = await getOrder().catch(err => {throw err;}); // prettier-ignore
    console.log(`message:`, {order});
    res.render('order-list', {
        order
    });
});

// loop
app.get('/loop', async (req, res) => {
    const products = await getProducts().catch(err => {throw err;}); // prettier-ignore
    console.log(`message:`, {products});
    res.render('loop', {
        products
    });
});

app.listen(3000, () => console.log('server started!'));
