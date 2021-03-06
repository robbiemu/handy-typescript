[handy-typescript](../README.md) / [Modules](../modules.md) / utility/clean-stringify

# Module: utility/clean-stringify

## Table of contents

### Functions

- [cleanStringify](utility_clean_stringify.md#cleanstringify)
- [copyWithoutCircularReferences](utility_clean_stringify.md#copywithoutcircularreferences)

## Functions

### cleanStringify

▸ **cleanStringify**(`item`: *any*): *string*

stringify possibly circular references

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | *any* | value to stringify cleanly |

**Returns:** *string*

json-like string without circular references

Defined in: [src/utility/clean-stringify.ts:8](https://github.com/robbiemu/handy-typescript/blob/936fff6/src/utility/clean-stringify.ts#L8)

___

### copyWithoutCircularReferences

▸ **copyWithoutCircularReferences**(`references`: *any*[], `object`: *any*): Object

recursive function to build a copy of an object with '###_Circular_###' replacing circular references

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `references` | *any*[] | the list of references so far encountered |
| `object` | *any* | the object copied |

**Returns:** Object

copy of an object without circular references

Defined in: [src/utility/clean-stringify.ts:21](https://github.com/robbiemu/handy-typescript/blob/936fff6/src/utility/clean-stringify.ts#L21)
