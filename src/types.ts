export interface BaseInput {
  /**
   * @summary 한국은행에서 발급받은 오픈API 인증키
   * @example sample
   */
  apiKey: string;

  /**
   * @summary 결과값의 언어
   * @example kr(국문), en(영문)
   */
  lang: "kr" | "en";

  /**
   * @summary 요청시작건수
   * @description 전체 결과값 중 시작 번호
   * @example 1
   */
  startCount: number;

  /**
   * @summary 요청종료건수
   * @description 전체 결과값 중 끝 번호
   * @example 10
   */
  endCount: number;
}

export const BASE_URL = "https://ecos.bok.or.kr/api";

export function concatUrl(args: Array<number | string>): string {
  return `${BASE_URL}/${args.join("/")}`;
}

export interface ApiResponse<T> {
  list_total_count: number;
  row: T[];
}

interface ApiError {
  CODE: string;
  MESSAGE: string;
}

interface Resp_Ok<T> {
  [key: string]: ApiResponse<T>;
}

interface Resp_Err {
  RESULT: ApiError;
}
function isRespErr(x: any): x is Resp_Err {
  return x.RESULT !== undefined;
}

export async function requestInner<T>(
  url: string,
  serviceName: string,
): Promise<ApiResponse<T>> {
  const resp = await fetch(url);
  const json = await resp.json();
  const data = json as Resp_Ok<T> | Resp_Err;

  if (isRespErr(data)) {
    const { CODE: code, MESSAGE: message } = data.RESULT;
    const err = new Error(message);
    (err as any).code = code;
    throw err;
  } else {
    return data[serviceName];
  }
}
