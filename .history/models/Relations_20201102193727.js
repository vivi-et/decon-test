const User = require('./User');
const Design = require('./Design');
const Category = require('./Category');
const SubCategory = require('./SubCategory');


// ======= User =======
User.hasMany(Design);
Design.belongsTo(User);
Category.hasMany(SubCategory);
SubCategory.belongsTo(Category);

// ======= Design =======
Design.hasMany(Category);
Category.belongsTo(Design);
Design.hasMany(SubCategory);
SubCategory.belongsTo(Design);
