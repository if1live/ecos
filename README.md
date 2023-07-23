# ecos

[![ci](https://github.com/if1live/ecos/actions/workflows/main.yml/badge.svg)](https://github.com/if1live/ecos/actions/workflows/main.yml)
[![NPM](https://img.shields.io/npm/v/%40if1live%2Fecos)](https://www.npmjs.com/package/@if1live/ecos)

Economic Statistics System of Bank of Korea (Open API Service)
https://ecos.bok.or.kr/api/#/

## install

```bash
pnpm i @if1live/ecos
```

```js
import {
  StatisticTableList,
  StatisticWord,
  StatisticItemList,
  StatisticSearch,
  KeyStatisticList,
  StatisticMeta,
} from "@if1live/ecos";

const result = await StatisticTableList.request({
  apiKey: 'TODO-ecos-api-key',
  lang: 'kr',
  startCount: 1,
  endCount: 10,
  statCode: "102Y004",
});
console.log(result);
```

## example

see `examples/index.ts`.

```bash
pnpm tsx ./examples/index.ts {api_key}
```
