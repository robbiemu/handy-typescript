[handy-typescript](../README.md) / [Modules](../modules.md) / aop/after.decorator

# Module: aop/after.decorator

## Table of contents

### Functions

- [After](aop_after_decorator.md#after)

## Functions

### After

▸ **After**(`afterFunction`: Function): *function*

decorator execute code _after_ method completes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `afterFunction` | Function | method to decorate TODO - add support for accessors |

**Returns:** (`_targetClass`: *Partial*<(...`args`: *any*[]) => *any*\>, `_propertyKey`: *string* \| *symbol*, `descriptor`: PropertyDescriptor) => PropertyDescriptor

Defined in: [src/aop/after.decorator.ts:8](https://github.com/robbiemu/handy-typescript/blob/84bdd7b/src/aop/after.decorator.ts#L8)
