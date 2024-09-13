import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    coverage: {
      // 'json-summary' is required for Github action
      reporter: ['text', 'json-summary', 'json'],
      reportOnFailure: true,
    },
  },
})
