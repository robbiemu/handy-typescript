[handy-typescript](../README.md) / [Modules](../modules.md) / src/utility/compose

# Module: src/utility/compose

## Table of contents

### Functions

- [compose](src_utility_compose.md#compose)

## Functions

### compose

▸ **compose**(...`fns`: Function[]): *function*

**`function`** compose

**`description`** compose an ordered list of execution from current context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...fns` | Function[] | functions to execute |

**Returns:** () => *void*

a function taht will call each fn in turn

Defined in: [src/utility/compose.ts:7](https://github.com/robbiemu/handy-typescript/blob/8d5cf58/src/utility/compose.ts#L7)
