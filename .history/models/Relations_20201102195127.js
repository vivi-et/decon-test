const User = require('./User');
const Design = require('./Design');
const Category = require('./Category');
const SubCategory = require('./SubCategory');
// ======= SubCategory =======
SubCategory.belongsTo(Category);
SubCategory.belongsTo(Design);

// ======= User =======
User.hasMany(Design);

// ======= Design =======
Design.belongsTo(User);
Design.hasMany(Category);
Design.hasMany(SubCategory);

// ======= Category =======
Category.hasMany(SubCategory);
Category.belongsTo(Design);


