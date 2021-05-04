const privateRoutes = require('./routes/privateRoutes');
const publicRoutes = require('./routes/publicRoutes');
const adminRoutes = require('./routes/adminRouter');

const config = {
  migrate: false,
  privateRoutes,
  publicRoutes,
  adminRoutes,
  port: process.env.PORT || '2017',
};

module.exports = config;
