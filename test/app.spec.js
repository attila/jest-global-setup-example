const axios = require('axios')

describe('app', () => {
  let client

  beforeEach(() => {
    client = axios.create({
      baseURL: 'http://localhost:8080'
    })
  })

  it('returns a response', async () => {
    // Act
    const result = await client.get('/foobar')
    // Assert
    expect(result).toHaveProperty('data', 'Olá')
  })
})
