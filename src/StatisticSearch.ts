import { BaseInput, concatUrl, requestInner } from "./types.js";

export const serviceName = "StatisticSearch" as const;

export function buildUrl(input: Input): string {
  const args = [
    serviceName,
    input.apiKey,
    "json",
    input.lang,
    input.startCount,
    input.endCount,

    input.statCode,
    input.cycle,
    input.startTime,
    input.endTime,

    input.itemCode1 ?? "?",
    input.itemCode2 ?? "?",
    input.itemCode3 ?? "?",
    input.itemCode4 ?? "?",
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

  /**
   * @summary 주기
   * @example 년:A, 반년:S, 분기:Q, 월:M, 반월:SM, 일: D
   */
  cycle: "A" | "S" | "Q" | "M" | "SM" | "D";

  /**
   * @summary 검색시작일자 (주기에 맞는 형식으로 입력)
   * @example 2015, 2015Q1, 201501, 20150101, ...
   */
  startTime: string;

  /**
   * @summary 검색시작일자 (주기에 맞는 형식으로 입력)
   * @example 2021, 2021Q1, 202101, 20210101, ...
   */
  endTime: string;

  /**
   * @summary 통계항목코드1
   * @example 10101
   */
  itemCode1?: string;

  /**
   * @summary 통계항목코드2
   * @example "?"
   */
  itemCode2?: string;

  /**
   * @summary 통계항목코드3
   * @example "?"
   */
  itemCode3?: string;

  /**
   * @summary 통계항목코드4
   * @example "?"
   */
  itemCode4?: string;
}

/**
 * @summary 통계 조회 조건 설정
 */
export interface StatisticSearchEntry {
  /**
   * @summary 통계표코드
   * @example "200Y001"
   */
  STAT_CODE: string;

  /**
   * @summary 통계명
   * @example "2.1.1.1. 주요지표(연간지표)"
   */
  STAT_NAME: string;

  /**
   * @summary 통계항목코드1
   * @example "10101"
   */
  ITEM_CODE1: string;

  /**
   * @summary 통계항목명1
   * @example "국내총생산(명목, 원화표시)"
   */
  ITEM_NAME1: string;

  /**
   * @summary 통계항목코드2
   * @example null
   */
  ITEM_CODE2: string | null;

  /**
   * @summary 통계항목명2
   * @example null
   */
  ITEM_NAME2: string | null;

  /**
   * @summary 통계항목코드3
   * @example null
   */
  ITEM_CODE3: string | null;

  /**
   * @summary 통계항목명3
   * @example null
   */
  ITEM_NAME3: string | null;

  /**
   * @summary 통계항목코드4
   * @example null
   */
  ITEM_CODE4: string | null;

  /**
   * @summary 통계항목명4
   * @example null
   */
  ITEM_NAME4: string | null;

  /**
   * @summary 단위
   * @example "십억원 "
   */
  UNIT_NAME: string | null;

  /**
   * @summary 시점
   * @example "2015"
   */
  TIME: string;

  /**
   * @summary 값
   * @example "1658020.4"
   */
  DATA_VALUE: string;
}
