import { HelloVO } from "../vo/HelloVO";
import { Utiles } from "../utils/Utiles";
class HelloService {
  get_Hello(): Promise<any> {
    return new Promise((resolve, reject) => {
      HelloVO.findAll().then(r => {
        resolve(Utiles.responseToJson(200, {}));
      });
    });
  }
}
export default new HelloService();
