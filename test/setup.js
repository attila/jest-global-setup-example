const { startServer } = require('../src/server')

module.exports = async () => {
  console.info('Setting up ...')

  try {
    global.__SERVER__ = await startServer()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
