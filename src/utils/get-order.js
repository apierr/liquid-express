const Shopify = require('shopify-api-node');
const { SHOP_NAME: shopName, ACCESS_TOKEN: accessToken } = process.env;



// // #:d401432f6dd247897dbff355cb7b0240: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:62715723983

module.exports.getOrder = async () => {
    if(!shopName) return;
    if(!accessToken) return;
    const shopify = new Shopify({ shopName, accessToken });
    return await shopify.order.get(3946548330703);
};


