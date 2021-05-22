[handy-typescript](../README.md) / [Modules](../modules.md) / src/utility/clean-stringify

# Module: src/utility/clean-stringify

## Table of contents

### Functions

- [cleanStringify](src_utility_clean_stringify.md#cleanstringify)
- [copyWithoutCircularReferences](src_utility_clean_stringify.md#copywithoutcircularreferences)

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

Defined in: src/utility/clean-stringify.ts:6

___

### copyWithoutCircularReferences

▸ **copyWithoutCircularReferences**(`references`: *any*, `object`: *any*): *object*

recursive function to build a copy of an object with '###_Circular_###' replacing circular references

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `references` | *any* | the list of references so far encountered |
| `object` | *any* | the object copied |

**Returns:** *object*

copy of an object without circular references

Defined in: src/utility/clean-stringify.ts:19
