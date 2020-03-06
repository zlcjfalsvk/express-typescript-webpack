import express from "express";
import { Utiles } from "../../utils/Utiles";
import { FileVO } from "../../vo/FileVO";
export class UploadController {
  upload(req: express.Request, res: express.Response): any {
    const fileVO: FileVO[] = new Array<FileVO>();
    Object.assign(fileVO, req.files);
    res.send(Utiles.responseToJson(200, fileVO));
  }
}
export default new UploadController();
