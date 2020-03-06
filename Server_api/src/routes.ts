import { Application } from "express";
import hello from "./controller/hello/router";

export default function routes(app: Application): void {
  app.use("/api/hello", hello);
}
