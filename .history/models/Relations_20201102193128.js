const User = require('./User');
const Design = require('./Design');


User.hasMany(Design);
Design.belongsTo(User);

