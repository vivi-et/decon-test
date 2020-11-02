const User = require('./User');
const Design = require('./Design');
const Category = require('./Category');
const SubCategory = require('./SubCategory');

// ======= User =======
User.hasMany(Design);

// ======= Design =======
Design.belongsTo(User);
Design.belongsTo(Category);
Design.belongsTo(SubCategory);

// ======= Category =======
Category.hasMany(Design);
Category.hasMany(SubCategory);

// ======= SubCategory =======
SubCategory.hasMany(Design);
SubCategory.belongsTo(Category);
