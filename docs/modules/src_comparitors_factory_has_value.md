[handy-typescript](../README.md) / [Modules](../modules.md) / src/comparitors/factory-has-value

# Module: src/comparitors/factory-has-value

## Table of contents

### Functions

- [factoryHasValue](src_comparitors_factory_has_value.md#factoryhasvalue)

## Functions

### factoryHasValue

▸ **factoryHasValue**(`property`: *string*, `evaluator?`: Function): *function*

generate a comparator that looks for existance of a value at a property
example:
```typescript
const cases = [ {a:2}, {a:3}, {a:4} ]
const isOdd = factoryHasValue('a', () => a%2)
assert(cases.some(isOdd))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | *string* | that is required on the comparator |
| `evaluator` | Function | that is called in the comparator, on the property, to determine the matching of the value |

**Returns:** (`value`: { [prop: string]: *any*;  }) => *any*

comparator

Defined in: src/comparitors/factory-has-value.ts:15