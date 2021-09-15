const config = require('./config');

jest.mock('dotenv', () => ({
  config: jest.fn()
}));

beforeEach(() => {
  process.env.PORT_SERVER = 3000;
  process.env.HOST_REDIS = '127.0.0.1';
  process.env.PORT_REDIS = 6379;
  process.env.NODE_ENV = 'development';
  process.env.URI_MONGO = 'mongodb://127.0.0.1:27017/';

  jest.resetAllMocks();
});

describe('config()', () => {
  it('should call config return variables', () => {
    expect(config()).toEqual({
      portServer: 3000,
      hostRedis: '127.0.0.1',
      portRedis: 6379,
      nodeEnv: 'development',
      uriMongo: 'mongodb://127.0.0.1:27017/'
    });
  });

  it('should set node env like "production"', () => {
    process.env.NODE_ENV = 'production';

    expect(config().nodeEnv).toEqual('production');
  });

  it('should throw error missing port server variable', () => {
    delete process.env.PORT_SERVER;

    expect(() => config()).toThrowError('"PORT_SERVER" must be defined.');
  });

  it('should throw error missing host redis variable', () => {
    delete process.env.HOST_REDIS;

    expect(() => config()).toThrowError('"HOST_REDIS" must be defined.');
  });

  it('should throw error missing port redis variable', () => {
    delete process.env.PORT_REDIS;

    expect(() => config()).toThrowError('"PORT_REDIS" must be defined.');
  });

  it('should throw error missing node env variable', () => {
    delete process.env.NODE_ENV;

    expect(config().nodeEnv).toEqual('development');
  });

  it('should throw error missing uri mongo variable', () => {
    delete process.env.URI_MONGO;

    expect(() => config()).toThrowError('"URI_MONGO" must be defined.');
  });
});
