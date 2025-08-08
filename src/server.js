// server.js
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const createServer = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'], // Use with caution in production
      },
    },
  });

  server.route(routes);

  return server;
};

const startServer = async () => {
  const server = await createServer();

  try {
    await server.start();
    console.log(`✅ Server running at: ${server.info.uri}`);
  } catch (err) {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  }
};

startServer();
