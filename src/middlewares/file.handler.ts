import { NextFunction, Request, Response } from "express";
import fs from "fs";
import moment = require("moment");

export default function fileHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const date: string = moment().format("YYMMDD");
  const fileDir: string = "upload/files/" + date;
  const imageDir: string = "upload/images/" + date;
  try {
    const stat = fs.lstatSync(fileDir);
  } catch (err) {
    fs.mkdirSync(fileDir, { recursive: true });
    fs.mkdirSync(imageDir, { recursive: true });
  } finally {
    next();
  }
}
