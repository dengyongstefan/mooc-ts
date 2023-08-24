interface Customer {
    name: string;
    age: string;
    level: string;
}

type Ckeys1 = keyof Customer

type keys<T> = T extends any? T:never
type Ckeys = keys<keyof Customer>

export {}

