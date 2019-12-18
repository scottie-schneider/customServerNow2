
try {
  const server = require("../../lib/server")

  server.get('/api/me', (req, res) => {
      res.json({
          user: {
              firstname: 'Scottie',
              lastname: 'Schneider'
          }
      })
  })

  server.get('/api/version', (req, res) => {
      res.json({
          version: 1.0
      })
  })

  module.exports = server
}
catch (ex) {
  console.log('API Error', ex)
}