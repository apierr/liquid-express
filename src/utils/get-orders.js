const Shopify = require('shopify-api-node');
const { SHOP_NAME: shopName, ACCESS_TOKEN: accessToken } = process.env;

module.exports.getOrders = async () => {
    if (!shopName) return;
    if (!accessToken) return;
    const shopify = new Shopify({ shopName, accessToken });
    const query = getOrder();
    const {orders: {edges}} = await shopify.graphql(query); // prettier-ignore
    const orders = edges.map((e) => e.node);
    return orders;
};

const getOrder = () => {
    return `{
        orders(first: 5) {
          edges {
            cursor
            node {
              id
              tags
            }
          }
        }
      }`;
};



