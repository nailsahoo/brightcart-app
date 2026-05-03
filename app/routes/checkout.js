const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const stripeKey = process.env.STRIPE_KEY;

  if (!stripeKey) {
    return res.status(500).json({ error: "Stripe key missing" });
  }

  res.json({ status: "Payment processed (mock)" });
});

module.exports = router;
