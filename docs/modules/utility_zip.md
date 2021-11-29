[handy-typescript](../README.md) / [Modules](../modules.md) / utility/zip

# Module: utility/zip

## Table of contents

### Functions

- [zip](utility_zip.md#zip)

## Functions

### zip

▸ **zip**(...`iterables`: *any*[]): *object*

**`method`** zip
usage:
const zipped = zip(['a', 'b', 'c'], ['d', 'e', 'f', 'g']);
for (const x of zipped) {
    console.log(x);
}
// Output:
// ['a', 'd']
// ['b', 'e']
// ['c', 'f']

TODO -- WHAT return type is this?

**`src`** https://exploringjs.com/es6/ch_iteration.html

#### Parameters

| Name | Type |
| :------ | :------ |
| `...iterables` | *any*[] |

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `[Symbol.iterator]` | () => *any* |
| `next` | () => { `done`: *undefined* = true; `value`: *any*[]  } \| { `done`: *boolean* = true; `value`: *undefined*  } |

Defined in: [src/utility/zip.ts:17](https://github.com/robbiemu/handy-typescript/blob/0ef0b5c/src/utility/zip.ts#L17)
