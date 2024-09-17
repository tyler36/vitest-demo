import { test, expect, beforeEach, vi } from 'vitest'
import createFetchMock from 'vitest-fetch-mock'
import { fetchTodoList } from '../src/api'

const fetchMocker = createFetchMock(vi)
fetchMocker.enableMocks()

test('mock fetch request', async () => {
  let expectedResponse = {
    completed: false,
    id: 1,
    title: 'Hello world',
  }

  fetch.mockResponse(JSON.stringify(expectedResponse))
  let data = await fetchTodoList()

  expect(data).toStrictEqual({
    completed: false,
    id: 1,
    title: 'Hello world',
  })
})
