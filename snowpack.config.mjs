/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: { url: '/', static: true },
    source: { url: '/dist' },
  },
  plugins: ['@snowpack/plugin-react-refresh', '@snowpack/plugin-dotenv'],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
		port: 1234,
  },
  buildOptions: {
    /* ... */
  },
};
