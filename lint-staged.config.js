/** @type {import('lint-staged').Config} */
const config = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "eslint"],
};

export default config;
