const Shopify = require('shopify-api-node');
const { SHOP_NAME: shopName, ACCESS_TOKEN: accessToken, CUSTOMER_ID } = process.env;

module.exports.getCustomer = async () => {
    if (!shopName) return;
    if (!accessToken) return;
    const shopify = new Shopify({ shopName, accessToken });
    const query = getQuery();
    const {customer} = await shopify.graphql(query); // prettier-ignore
    customer.orders = customer.orders.edges.map((e) => e.node);
    console.log(`message:`, { customer: JSON.stringify(customer) });
    return customer;
};

const getQuery = () => {
  return `{
    customer(id: "gid://shopify/Customer/${CUSTOMER_ID}") {
      id
      email
      orders(first: 10) {
        edges {
          node {
            id
            name
            tags
            metafields (first: 10) {
              edges {
                node {
                  id
                  key
                  namespace
                }
              }
            }

          }
        }
      }
    }
  }`;
};

