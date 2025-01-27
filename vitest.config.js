import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    reporters: ['default', 'junit', 'json'],
    outputFile: {
      junit: './logs/vitest-junit.xml',
      json: './logs/vitest-report.json',
    },
    coverage: {
      // 'json-summary' is required for Github action
      reporter: ['text', 'json-summary', 'json', 'html'],
      reportOnFailure: true,
      reportsDirectory: './logs/coverage', // Add this line
    },
  },
})
