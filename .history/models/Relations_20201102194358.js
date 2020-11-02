const User = require('./User');
const Design = require('./Design');
const Category = require('./Category');
const SubCategory = require('./SubCategory');

// ======= User =======
User.hasMany(Design);
Design.belongsTo(User);

// ======= Category =======
Category.hasMany(SubCategory);
SubCategory.belongsToMany(Category);

// ======= Design =======
Design.hasMany(Category);
Category.belongsToMany(Design);
Design.hasMany(SubCategory);
SubCategory.belongsToMany(Design);
