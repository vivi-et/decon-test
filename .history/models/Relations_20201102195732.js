const User = require('./User');
const Design = require('./Design');
const Category = require('./Category');
const SubCategory = require('./SubCategory');

// ======= User =======
User.hasMany(Design);

// ======= Design =======
Design.belongsTo(User)
.hasMany(Category);
.hasMany(SubCategory);

// ======= Category =======
Category.belongsTo(Design);

Category.hasMany(SubCategory);

// ======= SubCategory =======
SubCategory.belongsTo(Category);

SubCategory.belongsTo(Design);
