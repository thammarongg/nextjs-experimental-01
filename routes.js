const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('about', '/about/:id')