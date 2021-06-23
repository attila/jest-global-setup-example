module.exports = async () =>
  new Promise((resolve, reject) => {
    console.info('Tearing down ...')

    global.__SERVER__.close((err) => {
      if (err) return reject(err)

      console.info('Teardown complete')
      resolve('✔︎')
    })
  })
