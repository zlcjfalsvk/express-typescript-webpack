import { Sequelize } from "sequelize";

export const config =
  process.env.NODE_ENV === "production"
    ? require("../../application.prod.json")
    : require("../../application.dev.json");

    // if you use DB, you have to setting this.
// export const  = new Sequelize(
//   config.db_server.hello.database,
//   config.db_server.hello.user,
//   config.db_server.hello.password,
//   {
//     host: config.db_server.fun.host,
//     dialect: "mariadb",
//     define: {
//       timestamps: false,
//     },
//     dialectOptions: {
//       useUTC: false, // for reading from database
//       timezone: "+09:00",
//       dateStrings: true,
//       typeCast(field, next) {
//         // for reading from database
//         if (field.type === "DATETIME") {
//           return field.string();
//         }
//         return next();
//       },
//     },
//     timezone: "+09:00",
//     pool: {
//       max: 30,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//     logging: process.env.NODE_ENV === "prod" ? false : console.log,
//   },
// );
