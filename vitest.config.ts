import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    silent: true,
    reporters: ['junit'],
    outputFile: 'test-results.xml',
  },
})