[handy-typescript](../README.md) / [Modules](../modules.md) / [utility/assert](../modules/utility_assert.md) / AssertionError

# Class: AssertionError

[utility/assert](../modules/utility_assert.md).AssertionError

error of type assertion

## Hierarchy

- *Error*

  ↳ **AssertionError**

## Table of contents

### Constructors

- [constructor](utility_assert.assertionerror.md#constructor)

### Properties

- [message](utility_assert.assertionerror.md#message)
- [name](utility_assert.assertionerror.md#name)
- [stack](utility_assert.assertionerror.md#stack)
- [prepareStackTrace](utility_assert.assertionerror.md#preparestacktrace)
- [stackTraceLimit](utility_assert.assertionerror.md#stacktracelimit)

### Methods

- [captureStackTrace](utility_assert.assertionerror.md#capturestacktrace)

## Constructors

### constructor

\+ **new AssertionError**(`message?`: *string*): [*AssertionError*](utility_assert.assertionerror.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | *string* |

**Returns:** [*AssertionError*](utility_assert.assertionerror.md)

Inherited from: Error.constructor

Defined in: node_modules/typescript/lib/lib.es5.d.ts:978

## Properties

### message

• **message**: *string*

Inherited from: Error.message

Defined in: node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: *string*

Inherited from: Error.name

Defined in: node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: *string*

Inherited from: Error.stack

Defined in: node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: Error, `stackTraces`: CallSite[]) => *any*

Optional override for formatting stack traces

**`see`** https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Type declaration

▸ (`err`: Error, `stackTraces`: CallSite[]): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | Error |
| `stackTraces` | CallSite[] |

**Returns:** *any*

Inherited from: Error.prepareStackTrace

Defined in: node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: *number*

Inherited from: Error.stackTraceLimit

Defined in: node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`: *object*, `constructorOpt?`: Function): *void*

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | *object* |
| `constructorOpt?` | Function |

**Returns:** *void*

Inherited from: Error.captureStackTrace

Defined in: node_modules/@types/node/globals.d.ts:4
