[@robbiemu/handy-typescript](../README.md) / [Modules](../modules.md) / DummyableConfig

# Interface: DummyableConfig

the config interface

## Table of contents

### Properties

- [factoryResponse](DummyableConfig.md#factoryresponse)
- [override](DummyableConfig.md#override)

## Properties

### factoryResponse

• **factoryResponse**: [`DummyableFactoryResponse`](../modules.md#dummyablefactoryresponse)

compile-time function that can replace the underlying method

#### Defined in

[src/decorators/dummyable.decorator.ts:63](https://github.com/robbiemu/handy-typescript/blob/9b19fc3/src/decorators/dummyable.decorator.ts#L63)

___

### override

• `Optional` **override**: `boolean`

conpile-time property to determine execution of dummyable vs the underlying method

#### Defined in

[src/decorators/dummyable.decorator.ts:57](https://github.com/robbiemu/handy-typescript/blob/9b19fc3/src/decorators/dummyable.decorator.ts#L57)
