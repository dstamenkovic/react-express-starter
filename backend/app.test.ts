import request from 'supertest'

import app from './app'

import books from './booksData'

describe('App Search', () => {
  it('Should return books', async () => {
    const response = await request(app).get('/books')
    expect(response.body).toEqual(books)
    expect(response.body.length).toBe(books.length)
  })
})
