const { createMongooseSchema } = require('convert-json-schema-to-mongoose');
const userJsonSchema = require('./json-schema');

module.exports = ({ database }) => {
  const userMongooseSchema = createMongooseSchema(null, userJsonSchema);

  const userSchema = new database.Schema(userMongooseSchema);
  userSchema.index({ email: 1 }, { unique: true });

  const UserModel = database.model('user', userSchema);

  const find = async (id) => {
    return await UserModel.findOne({ _id: id });
  };

  const list = async () => {
    return await UserModel.find({});
  };

  const remove = async (id) => {
    return await UserModel.findOneAndRemove({ _id: id });
  };

  const save = async (user) => {
    const { id } = user;

    return await UserModel.findOneAndUpdate({ _id: id }, user, { upsert: true });
  };

  return {
    find,
    list,
    remove,
    save
  };
};
