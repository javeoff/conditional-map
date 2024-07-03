export default class ConditionalMap<K, V> extends Map<K, V> {
    private condition: (value: V) => boolean;

    constructor(condition: (value: V) => boolean, entries?: ReadonlyArray<[K, V]> | null) {
        super(entries);
        this.condition = condition;
    }

    set(key: K, value: V): this {
        if (this.condition(value)) {
            super.set(key, value);
        }

        return this;
    }
}
