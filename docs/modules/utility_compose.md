[handy-typescript](../README.md) / [Modules](../modules.md) / utility/compose

# Module: utility/compose

## Table of contents

### Functions

- [compose](utility_compose.md#compose)

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

Defined in: [src/utility/compose.ts:7](https://github.com/robbiemu/handy-typescript/blob/0ef0b5c/src/utility/compose.ts#L7)
