const jsonServer = require('json-server')
const pause = require('connect-pause')
const authorization = require('./config/authorization')
const authentication = require('./config/authentication')

const server = jsonServer.create()
const router = jsonServer.router('__mock__/db.json')
const middlewares = jsonServer.defaults()

module.exports = (config, callback) => {
  server.use(middlewares)
  server.use(jsonServer.bodyParser)
  server.use(pause(1000))

  server.get(/^(?!.*api).*$/g, (req, res) => res.sendFile(__dirname + '/public/index.html'))

  server.post('/auth', authentication)
  server.use('/api', authorization)
  server.use('/api', router)
  server.listen(config.port, () => {
    console.log(`JSON-Server is running at port ${config.port}`) // eslint-disable-line
    callback()
  })

  return server
}
