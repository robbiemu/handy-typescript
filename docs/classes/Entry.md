[@robbiemu/handy-typescript](../README.md) / [Modules](../modules.md) / Entry

# Class: Entry

**`Description`**

helper methods for working with entries

## Table of contents

### Constructors

- [constructor](Entry.md#constructor)

### Methods

- [keyOf](Entry.md#keyof)
- [maxKey](Entry.md#maxkey)
- [maxKeys](Entry.md#maxkeys)
- [valueOf](Entry.md#valueof)

## Constructors

### constructor

• **new Entry**()

## Methods

### keyOf

▸ `Static` **keyOf**<`K`, `V`\>(`entry`): `K`

**`Static`**

**`Method`**

keyOf the key of an entry

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | [`FixedSizeArray`](../modules.md#fixedsizearray)<``2``, `K` & `V`, ``"0"``\> |

#### Returns

`K`

the key

#### Defined in

[src/utility/entry.ts:15](https://github.com/robbiemu/handy-typescript/blob/3b5a4e9/src/utility/entry.ts#L15)

___

### maxKey

▸ `Static` **maxKey**<`K`, `V`\>(`transformer?`): [[`Reducer`](../modules.md#reducer)<`K`\>, ``null``]

**`Static`**

**`Method`**

maxKey

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transformer?` | `Function` | a helper function to traverse entries to comparing which is max, by default by comparing the keys |

#### Returns

[[`Reducer`](../modules.md#reducer)<`K`\>, ``null``]

helper args to the reduce function which produces the max key according to the greater-than operator on the transformed entry

#### Defined in

[src/utility/entry.ts:35](https://github.com/robbiemu/handy-typescript/blob/3b5a4e9/src/utility/entry.ts#L35)

___

### maxKeys

▸ `Static` **maxKeys**<`K`, `V`\>(`transformer?`): [[`Reducer`](../modules.md#reducer)<`K`\>, ``null``]

**`Static`**

**`Method`**

maxKeys

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transformer?` | `Function` | a helper function to traverse entries to comparing which is max, by default by comparing the keys |

#### Returns

[[`Reducer`](../modules.md#reducer)<`K`\>, ``null``]

helper args to the reduce function which produces all maximal keys according to the greater-than operator on the transformed entry

#### Defined in

[src/utility/entry.ts:59](https://github.com/robbiemu/handy-typescript/blob/3b5a4e9/src/utility/entry.ts#L59)

___

### valueOf

▸ `Static` **valueOf**<`K`, `V`\>(`entry`): `V`

**`Static`**

**`Method`**

valueOf the value of an entry

#### Type parameters

| Name |
| :------ |
| `K` |
| `V` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `entry` | [`FixedSizeArray`](../modules.md#fixedsizearray)<``2``, `K` & `V`, ``"0"``\> |

#### Returns

`V`

the value

#### Defined in

[src/utility/entry.ts:25](https://github.com/robbiemu/handy-typescript/blob/3b5a4e9/src/utility/entry.ts#L25)
