[handy-typescript](../README.md) / [Modules](../modules.md) / src/aop/interrupting-before.decorator

# Module: src/aop/interrupting-before.decorator

## Table of contents

### Functions

- [InterruptingBefore](src_aop_interrupting_before_decorator.md#interruptingbefore)

## Functions

### InterruptingBefore

▸ **InterruptingBefore**(`before`: Function): *function*

decorator that executes arbitrary code before the underlying method. the function executed can
optionally trigger the original method after, or interrupt its execution. it may opt to replace
the parameters with an [AopDecoratorPayload](../interfaces/src_aop_aop_decorator_payload_interface.aopdecoratorpayload.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `before` | Function | method to optionally interrup t and execute before the method |

**Returns:** (`target`: *any*, `propertyKey`: *string*, `descriptor`: PropertyDescriptor) => *void*

Defined in: src/aop/interrupting-before.decorator.ts:9