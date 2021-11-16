// This example sets up an endpoint using the Express framework.
// Watch this video to get started: https://youtu.be/rPR2aJ6XnAc.

const express = require('express');
const app = express();
const stripe = require('stripe')('pk_live_51Jpi6GEBbCGH38EQ6aTR8ITUW0FWwYTS7oEQGvKiXESHD4dS45W10YxNN9Xkrq2kwfe8iPyh9Vpb5tiG7koBeYbd00HOomo7eP')

app.post('/checkout', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'mxn',
          product_data: {
            name: 'Vela Aromática',
          },
          unit_amount: 200,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:5000/',
    cancel_url: 'http://localhost:5000/',
  });

  res.redirect(303, session.url);
});

app.listen(5000, () => console.log(`Listening on port ${5000}!`));