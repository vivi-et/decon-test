const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('aaaaaa');
  res.render('design/design_home.hbs');
});

router.get('/add', (req, res) => {
  const { body } = req;
  console.log(body);
  res.send(body);
});

module.exports = router;
