/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // Tailwind CSS for utility-first styling
    autoprefixer: {}, // Automatically adds vendor prefixes for better cross-browser support
    cssnano: process.env.NODE_ENV === 'production' ? { preset: 'default' } : false, // Minifies CSS in production
    'postcss-import': {}, // Enables `@import` in your CSS for better organization
  },
};

export default config;
