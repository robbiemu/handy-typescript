[handy-typescript](../README.md) / [Modules](../modules.md) / src/utility/andable

# Module: src/utility/andable

## Table of contents

### Classes

- [AndableUniverse](../classes/src_utility_andable.andableuniverse.md)

### Type aliases

- [Andable](src_utility_andable.md#andable)
- [AndableFunction](src_utility_andable.md#andablefunction)

### Functions

- [andable](src_utility_andable.md#andable)

## Type aliases

### Andable

Ƭ **Andable**<T\>: T & { [key: string]: *any*;  }

#### Type parameters

| Name |
| :------ |
| `T` |

Defined in: [src/utility/andable.ts:3](https://github.com/robbiemu/handy-typescript/blob/8d0f93c/src/utility/andable.ts#L3)

___

### AndableFunction

Ƭ **AndableFunction**: Function & { `after`: Function  }

Defined in: [src/utility/andable.ts:5](https://github.com/robbiemu/handy-typescript/blob/8d0f93c/src/utility/andable.ts#L5)

## Functions

### andable

▸ **andable**(...`keys`: *string*[]): [*AndableFunction*](src_utility_andable.md#andablefunction)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...keys` | *string*[] |

**Returns:** [*AndableFunction*](src_utility_andable.md#andablefunction)

Defined in: [src/utility/andable.ts:7](https://github.com/robbiemu/handy-typescript/blob/8d0f93c/src/utility/andable.ts#L7)
