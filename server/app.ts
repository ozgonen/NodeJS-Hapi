import {APP_NAME, CONFIG} from "./config/app-config";
import {ROUTES} from "./routes";

const Path     = require('path'),
      Hapi     = require('hapi'),
      Inert    = require('inert'),
      mongoose = require('mongoose');

mongoose.connect(CONFIG.paths.MongoDB);

const server = Hapi.Server({
  port: CONFIG.port,
  host: CONFIG.paths.host,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, '../public')
    }
  }
});

const provision = async () => {
  await server.register(Inert);
  server.route(ROUTES);
  await server.start();
  console.log(`🚀 🦄 ${APP_NAME} running at ${server.info.uri} 🦄 🚀`);
};

provision();
