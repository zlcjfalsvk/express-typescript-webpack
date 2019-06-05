import Server from "./configure/server";
import routes from "./routes";
import { config } from "./configure/connection";

export default new Server().router(routes).listen(config.port);
