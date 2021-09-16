const { createMongooseSchema } = require('convert-json-schema-to-mongoose');
const currencyJsonSchema = require('./json-schema');

module.exports = ({ database }) => {
  const currencyMongooseSchema = createMongooseSchema(null, currencyJsonSchema);

  const currencySchema = new database.Schema(currencyMongooseSchema);
  currencySchema.index({ name: 1 }, { unique: true });

  const CurrencyModel = database.model('currency', currencySchema);

  const find = async (name) => {
    return await CurrencyModel.findOne({ name });
  };

  const list = async () => {
    return await CurrencyModel.find({});
  };

  const remove = async (name) => {
    return await CurrencyModel.findOneAndRemove({ name });
  };

  const save = async (currency) => {
    const { name } = currency;

    return await CurrencyModel.findOneAndUpdate({ name }, currency, { upsert: true });
  };

  return {
    find,
    list,
    remove,
    save
  };
};
