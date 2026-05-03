require('dotenv').config();
const express = require('express');

const products = require('./routes/products');
const checkout = require('./routes/checkout');

const app = express();
app.use(express.json());

app.use('/products', products);
app.use('/checkout', checkout);

app.get('/', (req, res) => {
  res.send('BrightCart API running');
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
