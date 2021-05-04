const development = {
  database: 'uniapp',
  username: 'uniapp_root',
  password: '1f0c9fb5-a75a-450a-8aa5-8352b8635e92',
  host: 'localhost',
  dialect: 'sqlite' || 'mysql' || 'postgres',
};

const testing = {
  database: 'databasename',
  username: 'username',
  password: 'password',
  host: 'localhost',
  dialect: 'sqlite' || 'mysql' || 'postgres',
};

const production = {
  database: 'uniapp',
  username: 'uniapp',
  password: 'IA7kDu7s4jM5B2Tk',
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'mysql',
};

module.exports = {
  development,
  testing,
  production,
};
