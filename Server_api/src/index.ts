import { config } from "./configure/connection";
import Server from "./configure/server";
import routes from "./routes";

export default new Server().router(routes).listen(config.port);
