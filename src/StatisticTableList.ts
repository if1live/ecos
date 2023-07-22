import { BaseInput, concatUrl, requestInner } from "./types.js";

export const serviceName = "StatisticTableList" as const;

export function buildUrl(input: Input): string {
  const args = [
    serviceName,
    input.apiKey,
    "json",
    input.lang,
    input.startCount,
    input.endCount,

    input.statCode,
  ];
  return concatUrl(args);
}

export async function request(input: Input) {
  return await requestInner(buildUrl(input), serviceName);
}

export interface Input extends BaseInput {
  /**
   * @summary 통계표코드
   * @example 102Y004
   */
  statCode: string;
}

/**
 * @summary 서비스 통계 목록
 */
export interface StatisticTableEntry {
  /**
   * @summary 상위통계표코드
   * @example "0000000442"
   */
  P_STAT_CODE: string;

  /**
   * @summary 통계표코드
   * @example "102Y004"
   */
  STAT_CODE: string;

  /**
   * @summary 통계명
   * @example "1.1.1.1.2. 본원통화 구성내역(평잔, 원계열)"
   */
  STAT_NAME: string;

  /**
   * @summary 주기(년, 분기, 월)
   * @example "M"
   */
  CYCLE: string;

  /**
   * @summary 검색가능여부
   * @example "Y"
   */
  SRCH_YN: string;

  /**
   * @summary 출처
   * @example "한국은행"
   */
  ORG_NAME: string | null;
}
