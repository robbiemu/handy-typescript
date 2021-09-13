[handy-typescript](../README.md) / [Modules](../modules.md) / src/utility/zip

# Module: src/utility/zip

## Table of contents

### Functions

- [zip](src_utility_zip.md#zip)

## Functions

### zip

▸ **zip**(...`iterables`: *any*[]): *object*

zip
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

#### Parameters

| Name | Type |
| :------ | :------ |
| `...iterables` | *any*[] |

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `[Symbol.iterator]` | () => *any* |
| `next` | () => { `done`: *undefined* = true; `value`: *any*[]  } \| { `done`: *boolean* = true; `value`: *undefined*  } |

Defined in: [src/utility/zip.ts:15](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/zip.ts#L15)
