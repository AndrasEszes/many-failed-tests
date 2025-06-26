import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    outputFile: 'test-results.xml',
    reporters: [
      'default',
      ['junit', { suiteName: 'Many Failing Tests' }]
    ],
  },
})