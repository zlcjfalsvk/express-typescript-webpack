import express from "express";
import { FileVO } from "../../vo/FileVO";
import { Utiles } from "../../utils/Utiles";
export class UploadController {
  upload(req: express.Request, res: express.Response): any {
    let fileVO: FileVO[] = new Array<FileVO>();
    Object.assign(fileVO, req.files);
    res.send(Utiles.responseToJson(200, fileVO));
  }
}
export default new UploadController();
