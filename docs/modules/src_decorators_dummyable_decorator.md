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

Defined in: src/decorators/dummyable.decorator.ts:58

## Functions

### Dummyable

▸ **Dummyable**(`conf`: [*DummyableConfig*](../interfaces/src_decorators_dummyable_decorator.dummyableconfig.md)): *function*

decorator that can replace and reuse a method

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | [*DummyableConfig*](../interfaces/src_decorators_dummyable_decorator.dummyableconfig.md) | DummyableConfig |

**Returns:** (`_targetClass`: *any*, `propertyKey`: *string* \| *symbol*, `descriptor`: PropertyDescriptor) => PropertyDescriptor

Defined in: src/decorators/dummyable.decorator.ts:5

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

Defined in: src/decorators/dummyable.decorator.ts:31
