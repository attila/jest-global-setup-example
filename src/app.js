const express = require('express')

const app = () => {
  const app = express()

  app.get('*', (req, res) => {
    res.send('Olá')
  })

  return app
}

module.exports = {
  app
}
