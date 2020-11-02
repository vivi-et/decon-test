const User = require('./User');
const Design = require('./Design');
const Category = require('./Category');
const SubCategory = require('./SubCategory');

// ======= User =======
User.hasMany(Design);

// ======= Design =======
Design.belongsTo(User);
Design.hasMany(Category);
Design.hasMany(SubCategory);

// ======= Category =======
Category.hasMany(SubCategory);
Category.belongsToMany(Design);

// ======= SubCategory =======
SubCategory.belongsToMany(Category, Design);
