import { BaseInput, concatUrl, requestInner } from "./types.js";

export const serviceName = "StatisticWord" as const;

export function buildUrl(input: Input): string {
  const args = [
    serviceName,
    input.apiKey,
    "json",
    input.lang,
    input.startCount,
    input.endCount,

    input.word,
  ];
  return concatUrl(args);
}

export async function request(input: Input) {
  return await requestInner(buildUrl(input), serviceName);
}

export interface Input extends BaseInput {
  /**
   * @summary 용어
   * @example 소비자동향지수
   */
  word: string;
}

/**
 * @summary 통계 용어 사전
 */
export interface StatisticWordEntry {
  /**
   * @summary 용어
   * @example "소비자동향지수"
   */
  WORD: string;

  /**
   * @summary 용어설명 */
  CONTENT: string;
}
