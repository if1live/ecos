import { BaseInput, concatUrl, requestInner } from "./types.js";

export const serviceName = "StatisticMeta" as const;

export function buildUrl(input: Input): string {
  const args = [
    serviceName,
    input.apiKey,
    "json",
    input.lang,
    input.startCount,
    input.endCount,

    input.meta,
  ];
  return concatUrl(args);
}

export async function request(input: Input) {
  return await requestInner(buildUrl(input), serviceName);
}

export interface Input extends BaseInput {
  /**
   * @summary 데이터명
   * @example 경제심리지수
   */
  meta: string;
}

/**
 * @summary 통계메타DB
 */
export interface StatisticMetaEntry {
  /**
   * @summary 레벨
   * @example 2
   */
  LVL: number;

  /**
   * @summary 상위통계항목코드
   * @example 1
   */
  P_CONT_CODE: string;

  /**
   * @summary 통계항목코드
   * @example 0000000003
   */
  CONT_CODE: string;

  /**
   * @summary 통계항목명
   * @example 최초작성연도
   */
  CONT_NAME: string;

  /**
   * @summary 메타데이터
   * @example 2012.6월 최초 작성(과거 시계열은 2003.1월부터 제공)
   */
  META_DATA: string | null;
}
