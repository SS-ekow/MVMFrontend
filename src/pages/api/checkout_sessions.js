// src/pages/api/checkout_sessions.js
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { cart } = req.body;

      // Validate that the cart exists and is an array
      if (!cart || !Array.isArray(cart)) {
        return res.status(400).json({ error: 'Invalid cart data' });
      }

      // Build the line_items array without the images field
      const line_items = cart.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            description: item.description,
            // We are intentionally not sending any images here.
          },
          unit_amount: item.price * 100, // Convert dollars to cents
        },
        quantity: item.quantity || 1, // Use provided quantity, default to 1
      }));

      // Create the Stripe Checkout session with the dynamic line items
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });

      // Redirect the user to the Stripe Checkout page
      res.redirect(303, session.url);
    } catch (err) {
      console.error('Stripe session creation error:', err);
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
