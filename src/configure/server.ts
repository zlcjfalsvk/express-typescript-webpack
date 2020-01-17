import express, { Application } from "express";
import helmet from "helmet";
import http from "http";
import os from "os";

import bodyParser = require("body-parser");
import cors = require("cors");
import { config, sequelize_hello } from "./connection";
import l from "./logger";
const app = express();

export default class Server {
  constructor() {
    sequelize_hello.sync();
  }

  router(routes: (app: Application) => void): Server {
    app.use(bodyParser.json());
    app.use(cors())
   .use(helmet());
    routes(app);
    return this;
  }

  listen(p: string | number = config.port): Application {
    const welcome = (port) => () =>
      l.info(
        `up and running in ${process.env.NODE_ENV ||
          "development"} @: ${os.hostname()} on port: ${port}}`,
      );
    http.createServer(app).listen(p, welcome(p));
    return app;
  }
}
