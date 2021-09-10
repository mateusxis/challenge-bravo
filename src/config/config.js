const dotenv = require('dotenv');

module.exports = () => {
  if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
  }

  const getNodeEnv = () => {
    return process.env.NODE_ENV || 'development';
  };

  const getPortServer = () => {
    if (!process.env.PORT_SERVER) {
      throw new Error('"PORT_SERVER" must be defined.');
    }

    return process.env.PORT_SERVER;
  };

  const getHostRedis = () => {
    if (!process.env.HOST_REDIS) {
      throw new Error('"HOST_REDIS" must be defined.');
    }

    return process.env.HOST_REDIS;
  };

  const getPortRedis = () => {
    if (!process.env.PORT_REDIS) {
      throw new Error('"PORT_REDIS" must be defined.');
    }

    return process.env.PORT_REDIS;
  };

  return {
    portServer: getPortServer(),
    hostRedis: getHostRedis(),
    portRedis: getPortRedis(),
    nodeEnv: getNodeEnv()
  };
};
