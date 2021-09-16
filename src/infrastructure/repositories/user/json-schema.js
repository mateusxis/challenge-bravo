const user = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'http://api.example.com/profile.json#',
  type: 'object',
  properties: {
    name: {
      description: 'User name.',
      type: 'string'
    },
    email: {
      description: 'User email.',
      type: 'string'
    },
    token: {
      description: 'User token.',
      type: 'string'
    },
    precision: {
      default: 2,
      description: 'User precision.',
      type: 'number'
    }
  },
  required: ['name', 'rate'],
  additionalProperties: true
};

module.exports = user;
