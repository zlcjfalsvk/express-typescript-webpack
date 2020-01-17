import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  info: {
    title: "", // Title of the documentation
    version: "1.0.0", // Version of the app
    description: "", // short description of the app,
    openapi: "3.0.0",
  },
  host: "localhost:1234", // the host or url of the app
  basePath: "/api", // the basepath of your endpoint,
};

// options for the swagger docs
const options = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: ["./docs/**/*.yaml"],
};
// initialize swagger-jsdoc
export default swaggerJSDoc(options);
