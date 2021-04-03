const app = require('express')();
const path = require('path');
const shortid = require('shortid');
const Razorpay = require('razorpay');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const razorpay = new Razorpay({
    key_id: 'rzp_test_TAfCw5zIu2X8dJ',
    key_secret: 'Jdyh9ycCJGq4QIf2RMX6moV1'
});

app.get('/logo.svg', (req, res) => {
    res.sendFile(path.join(__dirname, 'logo.svg'));
});

// todo: implement webhooks
// app.post('/verification', (req, res) => {
//     const secret = "it'sjusttesting";
//
//     console.log(req.body);
//
//     const crypto = require('crypto')
//
//     const shasum = crypto.createHmac('sha256', secret)
//     shasum.update(JSON.stringify(req.body))
//     const digest = shasum.digest('hex')
//
//     console.log(digest, req.headers['x-razorpay-signature'])
//
//     if (digest === req.headers['x-razorpay-signature']) {
//         console.log('request is legit')
//         // process it
//     } else {
//         // pass it
//     }
//     res.json({status: 'ok'})
// })

app.post('/razorpay', async (req, res) => {
    if (req.body.courseId && req.body.qty) {
        const idToPrices = {
            "mcLd9L85pFBPJKAk8DpC": 10000,
        };
        const payment_capture = true;
        const amount = idToPrices[req.body.courseId];
        const currency = 'INR';

        const options = {
            amount: amount * 100 * req.body.qty,
            currency,
            receipt: shortid.generate(),
            payment_capture
        };

        try {
            const response = await razorpay.orders.create(options);
            res.json({
                status: "success",
                response,
                message: "Successfully created the order."
            });
        } catch (error) {
            res.json({status: 'failed', message: error.message})
        }
    } else {
        res.json({status: 'failed', message: "Missing required parameters."})
    }
});

app.listen(3001, () => {
    console.log('Listening on 3001');
});