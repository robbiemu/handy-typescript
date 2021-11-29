[handy-typescript](../README.md) / [Modules](../modules.md) / [decorators/dummyable.decorator](../modules/decorators_dummyable_decorator.md) / DummyableConfig

# Interface: DummyableConfig

[decorators/dummyable.decorator](../modules/decorators_dummyable_decorator.md).DummyableConfig

the config interface

## Table of contents

### Properties

- [factoryResponse](decorators_dummyable_decorator.dummyableconfig.md#factoryresponse)
- [override](decorators_dummyable_decorator.dummyableconfig.md#override)

## Properties

### factoryResponse

• **factoryResponse**: [*DummyableFactoryResponse*](../modules/decorators_dummyable_decorator.md#dummyablefactoryresponse)

compile-time function that can replace the underlying method

Defined in: [src/decorators/dummyable.decorator.ts:63](https://github.com/robbiemu/handy-typescript/blob/29caf49/src/decorators/dummyable.decorator.ts#L63)

___

### override

• `Optional` **override**: *boolean*

conpile-time property to determine execution of dummyable vs the underlying method

Defined in: [src/decorators/dummyable.decorator.ts:57](https://github.com/robbiemu/handy-typescript/blob/29caf49/src/decorators/dummyable.decorator.ts#L57)
