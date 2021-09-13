[handy-typescript](../README.md) / [Modules](../modules.md) / [src/utility/Entry](../modules/src_utility_entry.md) / Entry

# Class: Entry

[src/utility/Entry](../modules/src_utility_entry.md).Entry

## Table of contents

### Constructors

- [constructor](src_utility_entry.entry.md#constructor)

### Methods

- [keyOf](src_utility_entry.entry.md#keyof)
- [maxKey](src_utility_entry.entry.md#maxkey)
- [maxKeys](src_utility_entry.entry.md#maxkeys)
- [valueOf](src_utility_entry.entry.md#valueof)

## Constructors

### constructor

\+ **new Entry**(): [*Entry*](src_utility_entry.entry.md)

**Returns:** [*Entry*](src_utility_entry.entry.md)

## Methods

### keyOf

▸ `Static` **keyOf**<K, V\>(`entry`: [*FixedSizeArray*](../modules/src_utility_fixed_array_size.md#fixedsizearray)<``2``, K & V, ``"0"``\>): K

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | [*FixedSizeArray*](../modules/src_utility_fixed_array_size.md#fixedsizearray)<``2``, K & V, ``"0"``\> |

**Returns:** K

Defined in: src/utility/Entry.ts:4

___

### maxKey

▸ `Static` **maxKey**<K, V\>(`transformer?`: Function): [[*Reducer*](../modules/types_arrow_function.md#reducer)<K\>, ``null``]

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transformer?` | Function |

**Returns:** [[*Reducer*](../modules/types_arrow_function.md#reducer)<K\>, ``null``]

Defined in: src/utility/Entry.ts:12

___

### maxKeys

▸ `Static` **maxKeys**<K, V\>(`transformer?`: Function): [[*Reducer*](../modules/types_arrow_function.md#reducer)<K\>, ``null``]

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `transformer?` | Function |

**Returns:** [[*Reducer*](../modules/types_arrow_function.md#reducer)<K\>, ``null``]

Defined in: src/utility/Entry.ts:30

___

### valueOf

▸ `Static` **valueOf**<K, V\>(`entry`: [*FixedSizeArray*](../modules/src_utility_fixed_array_size.md#fixedsizearray)<``2``, K & V, ``"0"``\>): V

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | [*FixedSizeArray*](../modules/src_utility_fixed_array_size.md#fixedsizearray)<``2``, K & V, ``"0"``\> |

**Returns:** V

Defined in: src/utility/Entry.ts:8
