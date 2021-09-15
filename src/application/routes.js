const Router = require('koa-router');
const { OK, INTERNAL_SERVER_ERROR } = require('http-status');

module.exports = ({ database, redis }) => {
  const router = new Router();

  router.get('/liveness', async (ctx) => {
    ctx.body = 'OK';
  });

  router.get('/readiness', async (ctx) => {
    const mongoLiveness = database.connection.readyState === 1;
    const redisLiveness = redis.isUp();

    const readiness = redisLiveness && mongoLiveness;

    ctx.status = readiness ? OK : INTERNAL_SERVER_ERROR;
    ctx.body = readiness ? 'OK' : 'NOK';
  });

  return router;
};
