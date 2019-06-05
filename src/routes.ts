import { Application } from "express";
import hello from "./controller/hello/router";
import file from "./controller/upload/router";

export default function routes(app: Application): void {
  app.use("/api/hello", hello).use("/api/file", file);
}
