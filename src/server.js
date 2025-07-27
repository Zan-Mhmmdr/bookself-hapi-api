// server.js
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const createServer = async () => {
  return Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'], // Allow all origins (use with caution)
      },
    },
  });
};

const init = async () => {
  try {
    const server = await createServer();

    server.route(routes);

    await server.start();
    console.log(`✅ Server running at: ${server.info.uri}`);
  } catch (err) {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  }
};

init();
