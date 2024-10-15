// vite.config.js
export default {
    server: {
      proxy: {
        '/submit-form': 'http://localhost:3000',
      },
    },
  };
  