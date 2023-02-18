import { config } from './config';
import { HttpServer } from './infra/http/server';

function main() {
  console.clear();
  HttpServer.create(config.server.port).start();
}

main();
