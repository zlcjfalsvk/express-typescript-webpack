import crypto from "crypto";
import { config, redisTemplate } from "../configure/connection";

export class Utiles {
  constructor() {}

  static responseToJson(
    resultCode: number,
    resultData: Object,
    token?: boolean
  ): any {
    if (resultCode === 200) {
      if (typeof resultData === "string" || typeof resultData === "boolean") {
        if (token === true) {
          return {
            resultCode: resultCode,
            resultData: {
              "X-Auth-Token": resultData
            },
            message: ""
          };
        } else {
          return {
            resultCode: resultCode,
            resultData: {
              result: resultData
            },
            message: ""
          };
        }
      } else {
        return {
          resultCode: resultCode,
          resultData: resultData,
          message: ""
        };
      }
    } else {
      return {
        resultCode: resultCode,
        resultData: {},
        message: resultData
      };
    }
  }

  static sequelizeToObject(obj: Object): any {
    return JSON.parse(JSON.stringify(obj));
  }

  static pwdEncoding(pwd: string): string {
    let hmac = crypto.createHmac("sha256", config.hmacKey);
    let result = hmac.update(pwd).digest("hex");
    return result;
  }

  static createCardNum(mobileNum: string, oldCardNum?: string): string {
    let ret: string = "";
    let num = mobileNum.substr(1);
    if (oldCardNum === undefined) {
      ret = "00" + (num.length == 10 ? num : num + "0") + "82" + "01";
    } else {
      let card = oldCardNum.substring(0, 14);
      let num = +oldCardNum.substr(-2) + 1;
      ret = card + (num > 9 ? num + "" : "0" + num);
    }
    return ret;
  }

  static createSmsCode(length: number): string {
    let code: string = "";
    let i: number;

    for (i = 0; i < length; i++) {
      code += Math.floor(Math.random() * 9 + 1).toString();
    }

    return code;
  }
}
