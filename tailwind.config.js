/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}', // コンポーネントフォルダを追加
    './.storybook/**/*.{js,ts,jsx,tsx}', // Storybookの設定を追加
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
