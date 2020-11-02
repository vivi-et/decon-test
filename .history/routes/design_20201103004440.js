const express = require('express');
const Category = require('../models/Category');
const SubCategory = require('../models/SubCategory');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('aaaaaa');
  res.render('design/design_home.hbs');
});

router.post('/add', async (req, res) => {
  const { body } = req;

 const data = Category.findAll({ where, include: [{ all: true, nested: true }]});

  res.send(data);

  console.log(body);
  res.send(body);
});

module.exports = router;
