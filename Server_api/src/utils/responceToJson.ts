// tslint:disable: object-literal-sort-keys
export const responseToJson: any = (
  resultCode: number,
  resultData: object,
  token?: boolean,
) => {
  if (Math.trunc(resultCode / 100) === 2) {
    if (typeof resultData === "string" || typeof resultData === "boolean") {
      return {
        resultCode: resultCode,
        resultData: {
          result: resultData,
        },
        message: "",
      };
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
};
