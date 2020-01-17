import redis from "redis";
import { Sequelize } from "sequelize";

export const config =
  process.env.NODE_ENV === "production"
    ? require("../../application.prod.json")
    : require("../../application.dev.json");

export const redisTemplate = redis.createClient(
  config.redis_server.port,
  config.redis_server.host,
);

export const sequelize_hello = new Sequelize(
  config.db_server.hello.database,
  config.db_server.hello.user,
  config.db_server.hello.password,
  {
    host: config.db_server.hello.host,
    dialect: "mysql",
    define: {
      timestamps: false,
    },
    timezone: "+09:00",
    dialectOptions: {
      useUTC: false, // for reading from database
      dateStrings: true,
      typeCast(field, next) {
        // for reading from database
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      },
    },
    pool: {
      max: 30,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: process.env.NODE_ENV === "prod" ? false : console.log,
  },
);
