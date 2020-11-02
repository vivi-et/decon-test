const express = require('express');
const Category = require('../models/Category');
const SubCategory = require('../models/SubCategory');

const router = express.Router();

router.get('/', async (req, res) => {
  const categories = await Category.findAll({
    include: [{
      model: SubCategory,
    }],
    raw: false,
  });

  res.render('design/design_home.hbs', { categories });
});

router.get('/cat', async (req, res) => {
  // const data = await SubCategory.findAll({ include: [{ all: true, nested: true }] });
  const data = await Category.findAll({
    include: [{
      model: SubCategory,
    }],
    raw: false,
  });

  const categories = data.korname;
  console.log(categories);

  res.send(categories);
});

router.post('/add', (req, res) => {
  const { body } = req;

  console.log(body);
  res.send(body);
});

module.exports = router;
