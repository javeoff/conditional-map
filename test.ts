import pMemoize from 'p-memoize';
import test from 'ava';
import ConditionalMap from './index.js';

test('saving by condition', async (t) => {
    let index = 0;
    const fixture = async () => index++;
    const condition = (value: number) => value % 2 !== 0;
    const memoized = pMemoize(fixture, {
        cache: new ConditionalMap(condition)
    });
    t.is(await memoized(), 0);
    t.is(await memoized(), 1);
    t.is(await memoized(), 1);
    // @ts-expect-error Argument type does not match
    t.is(await memoized(undefined), 1);
    // @ts-expect-error Argument type does not match
    t.is(await memoized('foo'), 2);
    // @ts-expect-error Argument type does not match
    t.is(await memoized('foo'), 3);
    // @ts-expect-error Argument type does not match
    t.is(await memoized('foo'), 3);
    // @ts-expect-error Argument type does not match
    t.is(await memoized(null), 4);
    // @ts-expect-error Argument type does not match
    t.is(await memoized(null), 5);
    // @ts-expect-error Argument type does not match
    t.is(await memoized(null), 5);
})
