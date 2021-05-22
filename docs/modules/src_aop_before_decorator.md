[handy-typescript](../README.md) / [Modules](../modules.md) / src/aop/before.decorator

# Module: src/aop/before.decorator

## Table of contents

### Functions

- [Before](src_aop_before_decorator.md#before)

## Functions

### Before

▸ **Before**(`beforeFunction`: Function): *function*

decorator to execute code before method execution

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `beforeFunction` | Function | method to decorate |

**Returns:** (`_targetClass`: *any*, `_propertyKey`: *string* \| *symbol*, `descriptor`: PropertyDescriptor) => PropertyDescriptor

Defined in: src/aop/before.decorator.ts:5