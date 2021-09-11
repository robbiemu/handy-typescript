[handy-typescript](../README.md) / [Modules](../modules.md) / src/aop/after.decorator

# Module: src/aop/after.decorator

## Table of contents

### Functions

- [After](src_aop_after_decorator.md#after)

## Functions

### After

▸ **After**(`afterFunction`: Function): *function*

decorator execute code _after_ method completes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `afterFunction` | Function | method to decorate |

**Returns:** (`_targetClass`: *Partial*<(...`args`: *any*[]) => *any*\>, `_propertyKey`: *string* \| *symbol*, `descriptor`: PropertyDescriptor) => PropertyDescriptor

Defined in: [src/aop/after.decorator.ts:5](https://github.com/robbiemu/handy-typescript/blob/8d0f93c/src/aop/after.decorator.ts#L5)
