const express = require('express');
const router = express.Router();
const app = express();
const stripe = require('stripe')('pk_live_51Jpi6GEBbCGH38EQ6aTR8ITUW0FWwYTS7oEQGvKiXESHD4dS45W10YxNN9Xkrq2kwfe8iPyh9Vpb5tiG7koBeYbd00HOomo7eP')

app.post('/check', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 20,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'localhost:5000',
    cancel_url: 'localhost:5000',
  });

  res.redirect(303, session.url);
});







module.exports = router;