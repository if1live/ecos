import { describe, it, assert } from "vitest";
import {
  StatisticTableList,
  StatisticWord,
  StatisticItemList,
  StatisticSearch,
  KeyStatisticList,
  StatisticMeta,
} from "../src/index.js";

const apiKey = "sample";
const lang = "kr";

describe("StatisticTableList", () => {
  it("url", () => {
    const actual = StatisticTableList.buildUrl({
      apiKey,
      lang,
      startCount: 1,
      endCount: 10,
      statCode: "102Y004",
    });
    const expected =
      "https://ecos.bok.or.kr/api/StatisticTableList/sample/json/kr/1/10/102Y004";
    assert.equal(actual, expected);
  });
});

describe("StatisticWord", () => {
  it("url", () => {
    const actual = StatisticWord.buildUrl({
      apiKey,
      lang,
      startCount: 1,
      endCount: 10,
      word: "소비자동향지수",
    });
    const expected =
      "https://ecos.bok.or.kr/api/StatisticWord/sample/json/kr/1/10/소비자동향지수";
    assert.equal(actual, expected);
  });
});

describe("StatisticItemList", () => {
  it("url", () => {
    const actual = StatisticItemList.buildUrl({
      apiKey,
      lang,
      startCount: 1,
      endCount: 10,
      statCode: "601Y002",
    });
    const expected =
      "https://ecos.bok.or.kr/api/StatisticItemList/sample/json/kr/1/10/601Y002";
    assert.equal(actual, expected);
  });
});

describe("StatisticSearch", () => {
  it("url", () => {
    const actual = StatisticSearch.buildUrl({
      apiKey,
      lang,
      startCount: 1,
      endCount: 10,
      statCode: "200Y001",
      cycle: "A",
      startTime: "2015",
      endTime: "2021",
      itemCode1: "10101",
    });
    const expected =
      "https://ecos.bok.or.kr/api/StatisticSearch/sample/json/kr/1/10/200Y001/A/2015/2021/10101/?/?/?";
    assert.equal(actual, expected);
  });
});

describe("KeyStatisticList", () => {
  it("url", () => {
    const actual = KeyStatisticList.buildUrl({
      apiKey,
      lang,
      startCount: 1,
      endCount: 10,
    });
    const expected =
      "https://ecos.bok.or.kr/api/KeyStatisticList/sample/json/kr/1/10";
    assert.equal(actual, expected);
  });
});

describe("StatisticMeta", () => {
  it("url", () => {
    const actual = StatisticMeta.buildUrl({
      apiKey,
      lang,
      startCount: 1,
      endCount: 10,
      meta: "경제심리지수",
    });
    const expected =
      "https://ecos.bok.or.kr/api/StatisticMeta/sample/json/kr/1/10/경제심리지수";
    assert.equal(actual, expected);
  });
});
