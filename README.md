# conditional-map

```javascript
import pMemoize from 'p-memoize';
import ConditionalMap from './ConditionalMap';

const fixture = async () => index++;
const condition = (value: number) => value % 2 !== 0;
const memoized = pMemoize(fixture, {
    cache: new ConditionalMap(condition)
});

memoized().then(() => console.log(value)) // 0
memoized().then(() => console.log(value)) // 1
memoized().then(() => console.log(value)) // 1
```

To install dependency:

```bash
npm install conditional-map
```
