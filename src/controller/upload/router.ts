import express from "express";
import moment = require("moment");
import multer = require("multer");
import fileHandler from "../../middlewares/file.handler";
import UploadController from "./UploadController";

export const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const date: string = moment().format("YYMMDD");
    if (file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      cb(null, "upload/images/" + date + "/");
    } else if (file.originalname.match(/\.(txt|csv)$/)) {
      cb(null, "upload/files/" + date + "/");
    }
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage: fileStorage,
  limits: {
    files: 10,
  },
});

export default express
  .Router()
  .post(
    "/upload",
    [fileHandler, upload.array("files", 10)],
    UploadController.upload,
  );
