import { config } from "./connection";
import winston, { transports, createLogger } from "winston";
import DailyRotateFile = require("winston-daily-rotate-file");
import moment from "moment";

const l = winston.createLogger({
  level: "debug", // 최소 레벨
  // 파일저장
  transports: [
    new DailyRotateFile({
      filename: "log/system.log", // log 폴더에 system.log 이름으로 저장
      zippedArchive: true, // 압축여부
      format: winston.format.printf(
        info =>
          `${moment().format(
            "YYYY-MM-DD HH:MM:SS"
          )} [${info.level.toUpperCase()}] - ${info.message}`
      )
    }),

    // 콘솔 출력
    new winston.transports.Console({
      format: winston.format.printf(
        info =>
          `${moment().format(
            "YYYY-MM-DD HH:MM:SS"
          )} [${info.level.toUpperCase()}] - ${info.message}`
      )
    })
  ]
});

export default l;
