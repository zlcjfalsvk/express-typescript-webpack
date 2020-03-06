import stringify from "fast-safe-stringify";

export class Utiles {

  static jsonToObject(obj: object): any {
    return JSON.parse(stringify(obj));
  }

  static isNull(obj: any): boolean {
    return (obj === undefined) || (obj === null) ? true : false;
  }
}
