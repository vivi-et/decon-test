const express = require('express');
const Category = require('../models/Category');
const SubCategory = require('../models/SubCategory');

const router = express.Router();

router.get('/', (req, res) => {
  console.log('aaaaaa');
  res.render('design/design_home.hbs');
});

router.get('/cat',async (req,res)=>{
  const data = await Category.findAll({ include: [{ all: true, nested: true }]});
  res.send(data);
})

router.post('/add', (req, res) => {
  const { body } = req;



  console.log(body);
  res.send(body);
});

module.exports = router;
