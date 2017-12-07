const router = require('koa-router')()
const model = require('../lib/model');

router.prefix('/user')

router.post('/login', async (ctx, next) => {
  let User = model.User;
  const createUser = await User.create({
    userName: 'wsc',
    password: '123456'
  });
  console.log(createUser);
  const data = ctx.request.body;
  ctx.body = {}
})

module.exports = router
