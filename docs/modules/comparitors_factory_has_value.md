[handy-typescript](../README.md) / [Modules](../modules.md) / comparitors/factory-has-value

# Module: comparitors/factory-has-value

## Table of contents

### Functions

- [factoryHasValue](comparitors_factory_has_value.md#factoryhasvalue)

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

**Returns:** (`value`: { [prop: string]: *any*;  }) => *boolean*

comparator

Defined in: [src/comparitors/factory-has-value.ts:15](https://github.com/robbiemu/handy-typescript/blob/3eaf458/src/comparitors/factory-has-value.ts#L15)
