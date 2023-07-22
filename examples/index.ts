import {
  StatisticTableList,
  StatisticWord,
  StatisticItemList,
  StatisticSearch,
  KeyStatisticList,
  StatisticMeta,
} from "../src/index.js";

const apiKey = process.argv[process.argv.length - 1];

const lang = "kr";
const startCount = 1;
const endCount = 10;

const skel = {
  apiKey,
  lang,
  startCount,
  endCount,
} as const;

const fn_statisticTableList = async () => {
  const result = await StatisticTableList.request({
    ...skel,
    statCode: "102Y004",
  });
  console.log(result);
};

const fn_statisticWord = async () => {
  const result = await StatisticWord.request({
    ...skel,
    word: "소비자동향지수",
  });
  console.log(result);
};

const fn_statisticItemList = async () => {
  const result = await StatisticItemList.request({
    ...skel,
    statCode: "601Y002",
  });
  console.log(result);
};

const fn_statisticSearch = async () => {
  const result = await StatisticSearch.request({
    ...skel,
    statCode: "200Y001",
    cycle: "A",
    startTime: "2015",
    endTime: "2021",
    itemCode1: "10101",
  });
  console.log(result);
};

const fn_keyStatisticList = async () => {
  const result = await KeyStatisticList.request({
    ...skel,
  });
  console.log(result);
};

const fn_statisticMeta = async () => {
  const result = await StatisticMeta.request({
    ...skel,
    meta: "경제심리지수",
  });
  console.log(result);
};

// await fn_statisticTableList();
// await fn_statisticWord();
// await fn_statisticItemList();
// await fn_statisticSearch();
// await fn_keyStatisticList();
await fn_statisticMeta();
