import express from 'express';

import { healthRouter } from './routers/health-router';

export class HttpServer {
  httpPort: string;
  constructor(port: string) {
    this.httpPort = port;
  }
  static create(port: string) {
    return new HttpServer(port);
  }

  start() {
    // Config
    const server = express();
    server.use(express.urlencoded({ extended: true }));
    server.use(express.json());

    // Routers
    server.use('/healthcheck', healthRouter);

    // Not found route
    server.use('*', (req, res) => {
      res.status(404).send('Not found');
    });

    // Start
    server.listen(this.httpPort, () => {
      console.log(`[HTTP SERVER] - Starting server on port ${this.httpPort}`);
    });
  }
}
