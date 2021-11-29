[handy-typescript](../README.md) / [Modules](../modules.md) / [utility/entry](../modules/utility_entry.md) / Entry

# Class: Entry

[utility/entry](../modules/utility_entry.md).Entry

**`description`** helper methods for working with entries

## Table of contents

### Constructors

- [constructor](utility_entry.entry.md#constructor)

### Methods

- [keyOf](utility_entry.entry.md#keyof)
- [maxKey](utility_entry.entry.md#maxkey)
- [maxKeys](utility_entry.entry.md#maxkeys)
- [valueOf](utility_entry.entry.md#valueof)

## Constructors

### constructor

\+ **new Entry**(): [*Entry*](utility_entry.entry.md)

**Returns:** [*Entry*](utility_entry.entry.md)

## Methods

### keyOf

▸ `Static` **keyOf**<K, V\>(`entry`: [*FixedSizeArray*](../modules/utility_fixed_array_size.md#fixedsizearray)<``2``, K & V, ``"0"``\>): K

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
| `entry` | [*FixedSizeArray*](../modules/utility_fixed_array_size.md#fixedsizearray)<``2``, K & V, ``"0"``\> |

**Returns:** K

the key

Defined in: [src/utility/entry.ts:15](https://github.com/robbiemu/handy-typescript/blob/84bdd7b/src/utility/entry.ts#L15)

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

Defined in: [src/utility/entry.ts:35](https://github.com/robbiemu/handy-typescript/blob/84bdd7b/src/utility/entry.ts#L35)

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

Defined in: [src/utility/entry.ts:59](https://github.com/robbiemu/handy-typescript/blob/84bdd7b/src/utility/entry.ts#L59)

___

### valueOf

▸ `Static` **valueOf**<K, V\>(`entry`: [*FixedSizeArray*](../modules/utility_fixed_array_size.md#fixedsizearray)<``2``, K & V, ``"0"``\>): V

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
| `entry` | [*FixedSizeArray*](../modules/utility_fixed_array_size.md#fixedsizearray)<``2``, K & V, ``"0"``\> |

**Returns:** V

the value

Defined in: [src/utility/entry.ts:25](https://github.com/robbiemu/handy-typescript/blob/84bdd7b/src/utility/entry.ts#L25)
