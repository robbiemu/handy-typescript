[handy-typescript](../README.md) / [Modules](../modules.md) / src/utility/math-generators

# Module: src/utility/math-generators

## Table of contents

### Functions

- [combinations](src_utility_math_generators.md#combinations)
- [range](src_utility_math_generators.md#range)

## Functions

### combinations

▸ **combinations**<T\>(`set`: T[], `k`: *number*): *Generator*<T[], T[], undefined\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `set` | T[] |
| `k` | *number* |

**Returns:** *Generator*<T[], T[], undefined\>

Defined in: [src/utility/math-generators.ts:3](https://github.com/robbiemu/handy-typescript/blob/02d2b30/src/utility/math-generators.ts#L3)

___

### range

▸ **range**(`first`: *number*, `last?`: *number*, `byFn?`: [*ArrowFunction*](types_arrow_function.md#arrowfunction)<any, number\>): *Generator*<number\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `first` | *number* |
| `last?` | *number* |
| `byFn` | [*ArrowFunction*](types_arrow_function.md#arrowfunction)<any, number\> |

**Returns:** *Generator*<number\>

Defined in: [src/utility/math-generators.ts:24](https://github.com/robbiemu/handy-typescript/blob/02d2b30/src/utility/math-generators.ts#L24)
