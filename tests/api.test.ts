import { test, expect } from 'vitest'
import { fetchTodoList } from '../src/api'

test('snapshot api', async () => {
  let data = await fetchTodoList()

  expect(data).toMatchSnapshot()
})

test('using dynamic data', () => {
  const user = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  }

  expect(user).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number),
  })
})
