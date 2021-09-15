const mongoose = require('mongoose');

module.exports = ({ config }) => {
  const { uriMongo } = config;

  const getConnectionOptions = () => {
    const connectOptions = {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    };

    return connectOptions;
  };

  try {
    const mongoDb = mongoose;
    const connectionOptions = getConnectionOptions();

    mongoDb.connect(uriMongo, connectionOptions);

    return mongoDb;
  } catch (error) {
    console.error('Could not initialize mongodb:', error);
    throw error;
  }
};
