---
layout: default
title: Short code
description: "This topic provides short, simple codes for common tasks."
---

## Await with promise

```js
/**
 *
 * @param {number} ms Use the unit is milliseconds
 */
function awaitWithPromise(ms){
  return new Promise((resolve) => setTimeout(resolve, ms));
}
```

[back](./) | [home](/)
