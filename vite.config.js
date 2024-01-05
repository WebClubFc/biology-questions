// vite.config.js

import { defineConfig } from 'vite';

export default defineConfig({
  // حالت ساخت (production) را تعیین می‌کند
  build: {
    // حالت مینیفای کردن
    minify: 'terser',
    // حالت ایجاد فایل‌های مینیفای شده
    sourcemap: false,
  },
  server: {
    // هاست مورد نظر برای دسترسی به وبسایت از دیگر دستگاه‌ها
    host: '0.0.0.0',
  },
});
