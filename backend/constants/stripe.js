const configureStripe = require('stripe');

const STRIPE_SECRET_KEY = process.env.NODE_ENV === 'production'
    ? 'sk_live_MY_SECRET_KEY'
    : 'sk_test_Uq8KV6GHWjkgN4TU4h6PhOGx';
    


const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
