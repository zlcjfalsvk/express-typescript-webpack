import crypto from "crypto";
import { config, redisTemplate } from "../configure/connection";

export class Utiles {

  static responseToJson(
    resultCode: number,
    resultData: Object,
    token?: boolean,
  ): any {
    if (resultCode === 200) {
      if (typeof resultData === "string" || typeof resultData === "boolean") {
        if (token === true) {
          return {
            resultCode: resultCode,
            resultData: {
              "X-Auth-Token": resultData,
            },
            message: "",
          };
        } else {
          return {
            resultCode: resultCode,
            resultData: {
              result: resultData,
            },
            message: "",
          };
        }
      } else {
        return {
          resultCode: resultCode,
          resultData: resultData,
          message: "",
        };
      }
    } else {
      return {
        resultCode: resultCode,
        resultData: {},
        message: resultData,
      };
    }
  }

  static sequelizeToObject(obj: Object): any {
    return JSON.parse(JSON.stringify(obj));
  }

  static pwdEncoding(pwd: string): string {
    const hmac = crypto.createHmac("sha256", config.hmacKey);
    const result = hmac.update(pwd).digest("hex");
    return result;
  }
  constructor() {}
}
