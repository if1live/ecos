import { BaseInput, concatUrl, requestInner } from "./types.js";

export const serviceName = "KeyStatisticList" as const;

export function buildUrl(input: Input): string {
  const args = [
    serviceName,
    input.apiKey,
    "json",
    input.lang,
    input.startCount,
    input.endCount,
  ];
  return concatUrl(args);
}

export async function request(input: Input) {
  return await requestInner(buildUrl(input), serviceName);
}

export interface Input extends BaseInput {}

/**
 * @summary 100대 통계지표
 */
export interface KeyStatisticEntry {
  /**
   * @summary 통계그룹명
   * @example "국민소득 · 경기 · 기업경영"
   */
  CLASS_NAME: string;

  /**
   * @summary 통계명
   * @example "경제성장률(전기대비)"
   */
  KEYSTAT_NAME: string;

  /**
   * @summary 값
   * @example "1.9"
   */
  DATA_VALUE: string;

  /**
   * @summary 시점
   * @example "202003	통계의 최근 수록"
   */
  CYCLE: string;

  /**
   * @summary 단위
   * @example %, 달러, 십억원 등
   */
  UNIT_NAME: string;
}
