const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 }
  ]);
});

module.exports = router;
