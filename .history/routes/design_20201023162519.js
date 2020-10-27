const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('aaaaaa');
  res.render('design/design_home.hbs');
});

module.exports = router;
