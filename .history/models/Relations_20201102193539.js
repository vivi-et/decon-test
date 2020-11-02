const User = require('./User');
const Design = require('./Design');
const Category = require('./Category');
const SubCategory = require('./SubCategory');


User.hasMany(Design);
Design.belongsTo(User);
Category.hasMany(SubCategory);
SubCategory.belongsTo(Category);

