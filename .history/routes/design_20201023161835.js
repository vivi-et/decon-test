const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('aaaaaaaaa');
});

module.exports = router;
