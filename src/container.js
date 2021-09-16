const { createContainer, asFunction } = require('awilix');

const router = require('./application/routes');
const server = require('./application/server');
const databaseFactory = require('./infrastructure/database');
const redisFactory = require('./infrastructure/redis');
const currencyRepository = require('./infrastructure/repositories/currency');
const userRepository = require('./infrastructure/repositories/user');
const configEnvs = require('./config');

const container = createContainer();

container.register({
  config: asFunction(configEnvs).singleton(),
  currencyRepository: asFunction(currencyRepository).singleton(),
  userRepository: asFunction(userRepository).singleton(),
  database: asFunction(databaseFactory).singleton(),
  redis: asFunction(redisFactory).singleton(),
  router: asFunction(router).singleton(),
  server: asFunction(server).singleton()
});

module.exports = container;
