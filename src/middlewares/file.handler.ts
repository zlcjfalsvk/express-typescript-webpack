import { Request, Response, NextFunction } from "express";
import fs from "fs";
import moment = require("moment");

export default function fileHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let date: string = moment().format("YYMMDD");
  let fileDir: string = "upload/files/" + date;
  let imageDir: string = "upload/images/" + date;
  try {
    const stat = fs.lstatSync(fileDir);
  } catch (err) {
    fs.mkdirSync(fileDir, { recursive: true });
    fs.mkdirSync(imageDir, { recursive: true });
  } finally {
    next();
  }
}
