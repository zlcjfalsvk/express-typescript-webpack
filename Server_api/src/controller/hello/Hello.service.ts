import { responseToJson } from "../../utils/responceToJson";
// import { HelloVO } from "./vo/HelloVO";


class HelloService {
  get_Hello(): Promise<any> {
    return new Promise((resolve, reject) => {
      // HelloVO.findAll().then((r) => {
        resolve(responseToJson(200, "Hi~"));
      // });
    });
  }
}
export default new HelloService();
