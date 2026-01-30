# Yauiselib (Library)
random Package for Node.js (CJS / ESM). Yauise-Lib, Yauise name is from my friend, very very good person and more. Lib for stuff i create into multiple modules in one single package.

## API
cout function:
  - [cout()](https://github.com/UocDev/Yauiselib#cout())
  - [coutint()](https://github.com/UocDev/Yauiselib#coutint())



#### cout()
`cout()` function is like `console.log()` but more shorter. `cout()` only accept string only, if you use non-string it will throw error.
```js
import { cout } from '@uocdev/yauiselib';

cout("hello world "):
```

#### coutint()
like `cout()` but for integer (Number), it same like `cout()` only accept integer type, if non-int it will throw error.
```js
import { coutint } from '@uocdev/yauiselib';

coutint(18, 2.29, 19);
```

#### randomInt()
`randomInt()` is function to generate random numbers (ints) based on range, here for example:
```js
import { randomInt, coutint } from '@uocdev/yauiselib';

const value = randomInt(28);
coutint(value);
```
