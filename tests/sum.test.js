import { test, expect } from 'vitest'
import { sum } from '../src/sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('bad test', () => {
  expect(sum(1, 2)).toBe(5)
})
