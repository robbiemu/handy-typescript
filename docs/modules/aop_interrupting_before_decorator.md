[handy-typescript](../README.md) / [Modules](../modules.md) / aop/interrupting-before.decorator

# Module: aop/interrupting-before.decorator

## Table of contents

### Functions

- [InterruptingBefore](aop_interrupting_before_decorator.md#interruptingbefore)

## Functions

### InterruptingBefore

▸ **InterruptingBefore**(`before`: Function): *function*

decorator that executes arbitrary code before the underlying method. the function executed can
optionally trigger the original method after, or interrupt its execution. it may opt to replace
the parameters with an [AopDecoratorPayload](../interfaces/aop_aop_decorator_payload_interface.aopdecoratorpayload.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `before` | Function | method to optionally interrup t and execute before the method TODO - add support for accessors |

**Returns:** (`target`: *Partial*<(...`args`: *any*[]) => *any*\>, `propertyKey`: *string*, `descriptor`: PropertyDescriptor) => *void*

Defined in: [src/aop/interrupting-before.decorator.ts:11](https://github.com/robbiemu/handy-typescript/blob/936fff6/src/aop/interrupting-before.decorator.ts#L11)
