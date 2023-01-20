// const shopify = new Shopify({
//     shopName: 'boutique-test-faure-le-page.myshopify.com',
//     accessToken: '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',
// });
// // #:d401432f6dd247897dbff355cb7b0240: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:62715723983

// module.exports.getOrder = async () => {
//     shopify.order
//         .list({ limit: 5 })
//         .then((orders) => console.log(orders))
//         .catch((err) => console.error(err));
// };

console.log("process.env.S3_BUCKET:", process.env.S3_BUCKET);
