# conditional-map

You can use it with [p-memoize](https://github.com/sindresorhus/p-memoize) to control caching by result

## Install

```bash
npm install conditional-map
```

## Usage

```javascript
import pMemoize from 'p-memoize';
import ConditionalMap from 'conditional-map';

const fixture = async () => index++;
const condition = (value: number) => value % 2 !== 0;
const memoized = pMemoize(fixture, {
    cache: new ConditionalMap(condition)
});

memoized().then(() => console.log(value)) // 0
memoized().then(() => console.log(value)) // 1
memoized().then(() => console.log(value)) // 1
```
