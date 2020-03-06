import { NextFunction, Request, Response } from "express";
import l from "../configure/logger";
import { responseToJson } from "../utils/responceToJson";
// Error handler to display the error as HTML
// eslint-disable-next-line no-unused-vars, no-shadow
export default function errorHandler(
  err,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  l.error(err.message);
  res.status(err.status || 500);
  res.send(responseToJson(err.status || 500, err.message));
}
