[handy-typescript](../README.md) / [Modules](../modules.md) / src/decorators/dummyable.decorator

# Module: src/decorators/dummyable.decorator

## Table of contents

### Interfaces

- [DummyableConfig](../interfaces/src_decorators_dummyable_decorator.dummyableconfig.md)

### Type aliases

- [DummyableFactoryResponse](src_decorators_dummyable_decorator.md#dummyablefactoryresponse)

### Functions

- [Dummyable](src_decorators_dummyable_decorator.md#dummyable)
- [factoryDummyableConfig](src_decorators_dummyable_decorator.md#factorydummyableconfig)

## Type aliases

### DummyableFactoryResponse

Ƭ **DummyableFactoryResponse**: Function & { `originalMethod?`: Function  }

Defined in: [src/decorators/dummyable.decorator.ts:64](https://github.com/robbiemu/handy-typescript/blob/8d0f93c/src/decorators/dummyable.decorator.ts#L64)

## Functions

### Dummyable

▸ **Dummyable**(`conf`: [*DummyableConfig*](../interfaces/src_decorators_dummyable_decorator.dummyableconfig.md)): *function*

decorator that can replace and reuse a method

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | [*DummyableConfig*](../interfaces/src_decorators_dummyable_decorator.dummyableconfig.md) | DummyableConfig |

**Returns:** (`_targetClass`: *Partial*<(...`args`: *any*[]) => *any*\>, `propertyKey`: *string* \| *symbol*, `descriptor`: PropertyDescriptor) => PropertyDescriptor

Defined in: [src/decorators/dummyable.decorator.ts:5](https://github.com/robbiemu/handy-typescript/blob/8d0f93c/src/decorators/dummyable.decorator.ts#L5)

___

### factoryDummyableConfig

▸ **factoryDummyableConfig**(`conf`: *Partial*<[*DummyableConfig*](../interfaces/src_decorators_dummyable_decorator.dummyableconfig.md)\>): [*DummyableConfig*](../interfaces/src_decorators_dummyable_decorator.dummyableconfig.md)

(internal) function to generate a compliant conf body from a partial one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | *Partial*<[*DummyableConfig*](../interfaces/src_decorators_dummyable_decorator.dummyableconfig.md)\> | Partial<DummyableConfig> |

**Returns:** [*DummyableConfig*](../interfaces/src_decorators_dummyable_decorator.dummyableconfig.md)

compliant Dummyable conf parameter

Defined in: [src/decorators/dummyable.decorator.ts:35](https://github.com/robbiemu/handy-typescript/blob/8d0f93c/src/decorators/dummyable.decorator.ts#L35)
