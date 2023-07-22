import { BaseInput, concatUrl, requestInner } from "./types.js";

export const serviceName = "StatisticItemList" as const;

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
   * @example 601Y002
   */
  statCode: string;
}

/**
 * @summary 통계 세부항목 목록
 */
export interface StatisticItemEntry {
  /**
   * @summary 통계표코드
   * @example "601Y002"
   */
  STAT_CODE: string;

  /**
   * @summary 통계명
   * @example "7.5.2. 지역별 소비유형별 개인 신용카드"
   */
  STAT_NAME: string;

  /**
   * @summary 항목그룹코드
   * @example "Group1"
   */
  GRP_CODE: string;

  /**
   * @summary 항목그룹명
   * @example "지역코드"
   */
  GRP_NAME: string;

  /**
   * @summary 통계항목코드
   * @example "A"
   */
  ITEM_CODE: string;

  /**
   * @summary 통계항목명
   * @example "서울"
   */
  ITEM_NAME: string;

  /**
   * @summary 상위통계항목코드
   * @example null
   */
  P_ITEM_CODE: string | null;

  /**
   * @summary 상위통계항목명
   * @example null
   */
  P_ITEM_NAME: string | null;

  /**
   * @summary 주기
   * @example "M"
   */
  CYCLE: string;

  /**
   * @summary 수록시작일자
   * @example "200912"
   */
  START_TIME: string;

  /**
   * @summary 수록종료일자
   * @example "202112"
   */
  END_TIME: string;

  /**
   * @summary 자료수
   * @example 145
   */
  DATA_CNT: number;

  /**
   * @summary 단위
   * @example "십억원"
   */
  UNIT_NAME: string | null;

  /**
   * @summary 가중치
   * @example null
   */
  WEIGHT: string | null;
}
