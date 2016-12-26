import jsonServer from 'json-server'
import chokidar from 'chokidar'
import db from '../mock'

const server = jsonServer.create()
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(router)

server.use(jsonServer.rewriter({
  '/api/': '/',
}))

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.body.createdAt = Date.now()
  }
  next()
})

server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

server.listen(10086, () => {
  console.log('JSON Server is running')
})
