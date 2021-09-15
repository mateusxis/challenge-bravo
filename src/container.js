const { createContainer, asFunction } = require('awilix');

const router = require('./application/routes');
const server = require('./application/server');
const databaseFactory = require('./infrastructure/database');
const redisFactory = require('./infrastructure/redis');
const configEnvs = require('./config');

const container = createContainer();

container.register({
  database: asFunction(databaseFactory).singleton(),
  redis: asFunction(redisFactory).singleton(),
  router: asFunction(router).singleton(),
  server: asFunction(server).singleton(),
  config: asFunction(configEnvs).singleton()
});

module.exports = container;
