const emailLogRoutes = require('../routes/emailLogRoutes')
const altRoutes = require('../routes/altRoutes')

module.exports = function (app) {
    app.use(emailLogRoutes)
    app.use(altRoutes)
}