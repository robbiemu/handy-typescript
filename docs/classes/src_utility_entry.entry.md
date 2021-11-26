[handy-typescript](../README.md) / [Modules](../modules.md) / [src/utility/entry](../modules/src_utility_entry.md) / Entry

# Class: Entry

[src/utility/entry](../modules/src_utility_entry.md).Entry

**`description`** helper methods for working with entries

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

**`static`**

**`method`** keyOf the key of an entry

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

the key

Defined in: [src/utility/entry.ts:14](https://github.com/robbiemu/handy-typescript/blob/064cc3a/src/utility/entry.ts#L14)

___

### maxKey

▸ `Static` **maxKey**<K, V\>(`transformer?`: Function): [[*Reducer*](../modules/types_arrow_function.md#reducer)<K\>, ``null``]

**`static`**

**`method`** maxKey

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transformer?` | Function | a helper function to traverse entries to comparing which is max, by default by comparing the keys |

**Returns:** [[*Reducer*](../modules/types_arrow_function.md#reducer)<K\>, ``null``]

helper args to the reduce function which produces the max key according to the greater-than operator on the transformed entry

Defined in: [src/utility/entry.ts:34](https://github.com/robbiemu/handy-typescript/blob/064cc3a/src/utility/entry.ts#L34)

___

### maxKeys

▸ `Static` **maxKeys**<K, V\>(`transformer?`: Function): [[*Reducer*](../modules/types_arrow_function.md#reducer)<K\>, ``null``]

**`static`**

**`method`** maxKeys

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transformer?` | Function | a helper function to traverse entries to comparing which is max, by default by comparing the keys |

**Returns:** [[*Reducer*](../modules/types_arrow_function.md#reducer)<K\>, ``null``]

helper args to the reduce function which produces all maximal keys according to the greater-than operator on the transformed entry

Defined in: [src/utility/entry.ts:58](https://github.com/robbiemu/handy-typescript/blob/064cc3a/src/utility/entry.ts#L58)

___

### valueOf

▸ `Static` **valueOf**<K, V\>(`entry`: [*FixedSizeArray*](../modules/src_utility_fixed_array_size.md#fixedsizearray)<``2``, K & V, ``"0"``\>): V

**`static`**

**`method`** valueOf the value of an entry

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

the value

Defined in: [src/utility/entry.ts:24](https://github.com/robbiemu/handy-typescript/blob/064cc3a/src/utility/entry.ts#L24)
