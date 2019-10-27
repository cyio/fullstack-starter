const Koa = require('koa')
const Router = require('koa-router')
const statics = require('koa-static')
const axios = require('axios')
const path = require('path')
const history = require('koa2-connect-history-api-fallback')

const app = new Koa()
const router = new Router()

router.get('/api/hello', async (ctx, next) => {
  ctx.body = 'world'
})

app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(history({whkteList: ['/api']}))
  .use(statics(path.join(__dirname, '../dist')))

module.exports = app
