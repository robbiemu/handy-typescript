[handy-typescript](../README.md) / [Modules](../modules.md) / comparitors/factory-has-property

# Module: comparitors/factory-has-property

## Table of contents

### Functions

- [factoryHasProperty](comparitors_factory_has_property.md#factoryhasproperty)

## Functions

### factoryHasProperty

▸ **factoryHasProperty**(`property`: *string*): *function*

generate a comparator that looks for existance of a property
example:
```typescript
const cases = [ {a:2}, {a:3, 'dummy-data': true}, {a:4} ]
const hasDummyData = factoryHasProperty('dummy-data')
assert(cases.some(hasDummyData))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | *string* | that is required on the comparator |

**Returns:** (`value`: { [prop: string]: *any*;  }) => *boolean*

comparator

Defined in: [src/comparitors/factory-has-property.ts:12](https://github.com/robbiemu/handy-typescript/blob/936fff6/src/comparitors/factory-has-property.ts#L12)
