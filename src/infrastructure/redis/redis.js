const Redis = require('ioredis');

module.exports = ({ config }) => {
  const redis = new Redis({
    port: config.portRedis,
    host: config.hostRedis
  });
  let connected = false;

  redis.isUp = () => connected;

  redis.on('ready', () => {
    connected = true;
  });

  redis.on('close', () => {
    connected = false;
  });

  return redis;
};
