const Shopify = require('shopify-api-node');
const { SHOP_NAME: shopName, ACCESS_TOKEN: accessToken } = process.env;

// // #:d401432f6dd247897dbff355cb7b0240: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:62715723983

module.exports.getProducts = async () => {
    if (!shopName) return;
    if (!accessToken) return;
    const shopify = new Shopify({ shopName, accessToken });
    const query = getProductQuery();
    const {products: {edges}} = await shopify.graphql(query); // prettier-ignore
    const products = edges.map((e) => e.node);
    return products;
};

const getProductQuery = () => {
    return `{
        products(first: 5) {
          edges {
            cursor
            node {
              id
              createdAt
              description
            }
          }
        }
      }`;
};

