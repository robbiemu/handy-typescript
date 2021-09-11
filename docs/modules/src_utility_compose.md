[handy-typescript](../README.md) / [Modules](../modules.md) / src/utility/compose

# Module: src/utility/compose

## Table of contents

### Functions

- [compose](src_utility_compose.md#compose)

## Functions

### compose

▸ **compose**(...`fns`: Function[]): *function*

compose an ordered list of execution

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...fns` | Function[] | functions to execute |

**Returns:** () => *void*

a function taht will call each fn in turn

Defined in: [src/utility/compose.ts:6](https://github.com/robbiemu/handy-typescript/blob/8d0f93c/src/utility/compose.ts#L6)
