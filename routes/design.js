const express = require('express');
const fs = require('fs');
// const multer = require('multer');
const Category = require('../models/Category');
const SubCategory = require('../models/SubCategory');
const User = require('../models/User');
const multer = require('../utility/multer');

const router = express.Router();

router.get('/', async (req, res) => {
  const categories = await Category.findAll({
    include: [{
      model: SubCategory,
    }],
    raw: false,
  }).catch((error) => console.log('\x1b[36m%s\x1b[0m', error));

  res.render('design/design_home.hbs', { categories });
});

router.get('/cat', async (req, res) => {
  // const data = await SubCategory.findAll({ include: [{ all: true, nested: true }] });
  const data = await Category.findAll({
    include: [{
      model: SubCategory,
    }],
    raw: false,
  }).catch((error) => console.log('\x1b[36m%s\x1b[0m', error));

  res.send(data);
});

router.post('/add', (req, res) => {
  multer.upload(req, res, async (err) => {
    const { body, files } = req;

    const files1Arr = [];
    const files2Arr = [];

    files.forEach((item) => {
      switch (item.fieldname) {
        case 'files1':
          files1Arr.push(item);
          break;
        case 'files2':
          files2Arr.push(item);
          break;
        default:
          break;
      }
    });

    body.files1 = files1Arr;
    body.files2 = files2Arr;

    res.send(body);
  });
});

module.exports = router;
