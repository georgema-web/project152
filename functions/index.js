const functions = require('firebase-functions');
const axios = require('axios');
const stripe = require('stripe');
const uuid = require('uuid');
require('firebase-functions/lib/logger/compat');

/**
 * Create a local guest ID and propagate it to localstorage.
 * This ID will be the key to identify a guest's cart.
 */
exports.createGuestId = functions.https.onRequest((req, res) => {
    if (localStorage.getItem('guestId') === null) {
        localStorage.setItem('guestId', uuid.v4());
        console.log('id newly created', localStorage.getItem('guestId'));
    } else {
        console.log('id already created', localStorage.getItem('guestId'));
    }
    res.json({ guestId: localStorage.getItem('guestId ') });
});

/**
 * Add a guest's item to their ID in firestore.
 * Takes an item along with the guest's ID and stores the item in localstorage.
 * We take the ID in case we want to propagate it to firestore for analytics in the future.
 */
exports.addItem = functions.https.onRequest((req, res) => {
    res.json({});
});

/**
 * Removes a guest's item from their ID in localstorage.
 */
exports.removeItem = functions.https.onRequest((req, res) => {
    res.json({});
});

/**
 * Checkout a guest's items.
 * Retrieve list of items under guestID from localstorage and initiate Stripe checkout session.
 */
exports.checkoutCart = functions.https.onRequest((req, res) => {
    res.json({});
});

/**
 * Authenticate Paypal credentials. TODO: Remove for prod, all the credentials are exposed here lol.
 */
exports.authenticatePaypal = functions.https.onRequest(async (req, res) => {
    console.log('beginning makePayment sequence');
    const authenticate = async () => {
        const clientId = 'AS8jasV8M22QKaO_21s3te8RX1Hu2TsT4mfNWFCJl1fBiGKocTCNFEqFwJporsYkjR64d6bdB9QsfxZp';
        const clientSecret = 'EMfS1TLu9c6qfUa9YkqYaBlYb3w4J3q6nlHIn5PZVLnEYZOavUmpL-8Q1B7B7WjpeeqAJrB3N7ts4L6K';
        const paypalOAuthAPI = 'https://api.sandbox.paypal.com/v1/oauth2/token/';

        const auth = {
            username: clientId, // process.env.PAYPAL_CLIENT_ID,
            password: clientSecret, // process.env.PAYPAL_SECRET
        };

        const headers = {
            Accept: 'application/json',
            'Accept-Language': 'en_US',
            'content-type': 'application/x-www-form-urlencoded',
        };

        return axios({
            method: 'post',
            url: paypalOAuthAPI,
            headers,
            auth,
            data: 'grant_type=client_credentials',
        }).then((resp) => {
            console.log('authentication granted');
            return resp.data.access_token;
        });
    };

    const token = await authenticate();
    console.log('token23', token);

    res.json({});
});
