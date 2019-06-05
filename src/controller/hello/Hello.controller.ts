import express = require("express");
import HelloService from "../../services/Hello.service";
export class HelloController {
  get_hello(req: express.Request, res: express.Response): any {
    HelloService.get_Hello()
      .then(r => {
        if (r) {
          res.status(200).json(r);
        }
      })
      .catch(err => {
        res.status(200).json(err);
      });
  }
}
export default new HelloController();
