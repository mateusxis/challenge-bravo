const currency = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'http://api.example.com/profile.json#',
  type: 'object',
  properties: {
    name: {
      description: 'Currency name.',
      type: 'string',
      uppercase: true,
      minLength: 3,
      maxLength: 4
    },
    description: {
      description: 'Currency description.',
      type: 'string'
    },
    rate: {
      description: 'Currency rate.',
      type: 'number'
    },
    precision: {
      default: 2,
      description: 'Currency precision.',
      type: 'number'
    }
  },
  required: ['name', 'rate'],
  additionalProperties: true
};

module.exports = currency;
