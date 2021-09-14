[handy-typescript](../README.md) / [Modules](../modules.md) / types/arrow-function

# Module: types/arrow-function

## Table of contents

### Type aliases

- [ArrowFunction](types_arrow_function.md#arrowfunction)
- [Comparator](types_arrow_function.md#comparator)
- [Reducer](types_arrow_function.md#reducer)

## Type aliases

### ArrowFunction

Ƭ **ArrowFunction**<Params, T\>: () => T \| (...`args`: Params) => T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Params` | *unknown*[] |
| `T` | - |

Defined in: [types/arrow-function.d.ts:2](https://github.com/robbiemu/handy-typescript/blob/2cd4d26/types/arrow-function.d.ts#L2)

___

### Comparator

Ƭ **Comparator**<T\>: (`value`: T, `index?`: *number*, `array?`: T[]) => *boolean* \| (`value`: T, `index?`: *number*, `array?`: T[]) => value is T

#### Type parameters

| Name |
| :------ |
| `T` |

Defined in: [types/arrow-function.d.ts:4](https://github.com/robbiemu/handy-typescript/blob/2cd4d26/types/arrow-function.d.ts#L4)

___

### Reducer

Ƭ **Reducer**<T\>: (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]): T

#### Parameters

| Name | Type |
| :------ | :------ |
| `previousValue` | *any* |
| `currentValue` | *any* |
| `currentIndex` | *number* |
| `array` | *any*[] |

**Returns:** T

Defined in: [types/arrow-function.d.ts:6](https://github.com/robbiemu/handy-typescript/blob/2cd4d26/types/arrow-function.d.ts#L6)
