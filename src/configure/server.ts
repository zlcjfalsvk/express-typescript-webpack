import express, { Application } from "express";
import http from "http";
import path from "path";
import os from "os";

import { config, sequelize_hello } from "./connection";
import l from "./logger";
import installValidator from "./swagger";
import cors = require("cors");
import bodyParser = require("body-parser");
const app = express();

export default class Server {
  constructor() {
    const root = path.normalize(__dirname + "/../..");
    app.use(express.static(`${root}/public`));
    sequelize_hello.sync();
  }

  router(routes: (app: Application) => void): Server {
    // if you want swagger, this use
    // installValidator(app, routes);

    app.use(bodyParser.json());
    app.use(cors);
    return this;
  }

  listen(p: string | number = config.port): Application {
    const welcome = port => () =>
      l.info(
        `up and running in ${process.env.NODE_ENV ||
          "development"} @: ${os.hostname()} on port: ${port}}`
      );
    http.createServer(app).listen(p, welcome(p));
    return app;
  }
}
