import { defineConfig } from '@playwright/test';

export default defineConfig({
  timeout: 30000,
  globalTimeout: 600000,
  testDir: './tests',
  reporter: [['html', { open: 'never', outputFolder: 'pw-report'}]],
});