const { app } = require('./app')

const startServer = () => {
  const server = app()
  const PORT = 8080

  return new Promise((resolve, reject) => {
    try {
      const instance = server.listen(PORT, () => {
        console.info('Server listening on port %d', instance.address().port)
        resolve(instance)
      });
    } catch (err) {
      reject(err)
    }
  })
}

if (!module.parent) {
  startServer()
}

module.exports = {
  startServer
}
