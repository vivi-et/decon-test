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
Category.belongsTo(Design);

Category.hasMany(SubCategory);

// ======= SubCategory =======
SubCategory.belongsTo(Category);
