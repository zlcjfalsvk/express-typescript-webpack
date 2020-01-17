import express from "express";
import os from "os";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "../configuration/swagger";


const app = express();
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const server = app.listen( process.env.PORT || 3000, () => {
  // eslint-disable-next-line no-console
  console.log(`up and running in ${process.env.NODE_ENV || "development"}
  @: ${os.hostname()} on port: ${process.env.PORT || 3000}}`);
});

export default server;
