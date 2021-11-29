[handy-typescript](../README.md) / [Modules](../modules.md) / decorators/dummyable.decorator

# Module: decorators/dummyable.decorator

## Table of contents

### Interfaces

- [DummyableConfig](../interfaces/decorators_dummyable_decorator.dummyableconfig.md)

### Type aliases

- [DummyableFactoryResponse](decorators_dummyable_decorator.md#dummyablefactoryresponse)

### Functions

- [Dummyable](decorators_dummyable_decorator.md#dummyable)
- [factoryDummyableConfig](decorators_dummyable_decorator.md#factorydummyableconfig)

## Type aliases

### DummyableFactoryResponse

Ƭ **DummyableFactoryResponse**: Function & { `originalMethod?`: Function  }

Defined in: [src/decorators/dummyable.decorator.ts:66](https://github.com/robbiemu/handy-typescript/blob/5f4327e/src/decorators/dummyable.decorator.ts#L66)

## Functions

### Dummyable

▸ **Dummyable**(`conf`: [*DummyableConfig*](../interfaces/decorators_dummyable_decorator.dummyableconfig.md)): *function*

decorator that can replace and reuse a method

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | [*DummyableConfig*](../interfaces/decorators_dummyable_decorator.dummyableconfig.md) | DummyableConfig |

**Returns:** (`_targetClass`: *Partial*<(...`args`: *any*[]) => *any*\>, `propertyKey`: *string* \| *symbol*, `descriptor`: PropertyDescriptor) => PropertyDescriptor

Defined in: [src/decorators/dummyable.decorator.ts:7](https://github.com/robbiemu/handy-typescript/blob/5f4327e/src/decorators/dummyable.decorator.ts#L7)

___

### factoryDummyableConfig

▸ **factoryDummyableConfig**(`conf`: *Partial*<[*DummyableConfig*](../interfaces/decorators_dummyable_decorator.dummyableconfig.md)\>): [*DummyableConfig*](../interfaces/decorators_dummyable_decorator.dummyableconfig.md)

(internal) function to generate a compliant conf body from a partial one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | *Partial*<[*DummyableConfig*](../interfaces/decorators_dummyable_decorator.dummyableconfig.md)\> | Partial<DummyableConfig> |

**Returns:** [*DummyableConfig*](../interfaces/decorators_dummyable_decorator.dummyableconfig.md)

compliant Dummyable conf parameter

Defined in: [src/decorators/dummyable.decorator.ts:37](https://github.com/robbiemu/handy-typescript/blob/5f4327e/src/decorators/dummyable.decorator.ts#L37)
