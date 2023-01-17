[@robbiemu/handy-typescript](../README.md) / [Modules](../modules.md) / BetweenBuilder

# Class: BetweenBuilder

**`Description`**

general factory helper to populate a generator with a collection of values

## Table of contents

### Constructors

- [constructor](BetweenBuilder.md#constructor)

### Properties

- [arity](BetweenBuilder.md#arity)
- [bounds](BetweenBuilder.md#bounds)
- [generator](BetweenBuilder.md#generator)

### Methods

- [and](BetweenBuilder.md#and)
- [between](BetweenBuilder.md#between)
- [setBounds](BetweenBuilder.md#setbounds)
- [assertBeforeWithInitialValue](BetweenBuilder.md#assertbeforewithinitialvalue)
- [build](BetweenBuilder.md#build)
- [completeBefore](BetweenBuilder.md#completebefore)

## Constructors

### constructor

• **new BetweenBuilder**(`generator`, `arity`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | `Function` |
| `arity` | `number` |

#### Defined in

[src/utility/between-builder.ts:14](https://github.com/robbiemu/handy-typescript/blob/af807b2/src/utility/between-builder.ts#L14)

## Properties

### arity

• `Private` **arity**: `number`

#### Defined in

[src/utility/between-builder.ts:14](https://github.com/robbiemu/handy-typescript/blob/af807b2/src/utility/between-builder.ts#L14)

___

### bounds

• **bounds**: [`List`](List.md)<`unknown`\>

#### Defined in

[src/utility/between-builder.ts:12](https://github.com/robbiemu/handy-typescript/blob/af807b2/src/utility/between-builder.ts#L12)

___

### generator

• `Private` **generator**: `Function`

#### Defined in

[src/utility/between-builder.ts:14](https://github.com/robbiemu/handy-typescript/blob/af807b2/src/utility/between-builder.ts#L14)

## Methods

### and

▸ **and**(`this`, `value`): `any`

**`Method`**

and

**`Description`**

add a bound to the collection of bounds, optionally completing the factory setup by executing the generator function

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BetweenBuilder`](BetweenBuilder.md) |
| `value` | `unknown` |

#### Returns

`any`

either this BetweenBuilder or the result of the generator function if all bounds have been collected

#### Defined in

[src/utility/between-builder.ts:52](https://github.com/robbiemu/handy-typescript/blob/af807b2/src/utility/between-builder.ts#L52)

___

### between

▸ **between**(`value`): [`BetweenBuilder`](BetweenBuilder.md)

**`Method`**

between

**`Description`**

add a bound to the collection of bounds, optionally completing the factory setup by executing the generator function

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

[`BetweenBuilder`](BetweenBuilder.md)

either this BetweenBuilder or the result of the generator function if all bounds have been collected

#### Defined in

[src/utility/between-builder.ts:65](https://github.com/robbiemu/handy-typescript/blob/af807b2/src/utility/between-builder.ts#L65)

___

### setBounds

▸ **setBounds**(`bounds`): [`BetweenBuilder`](BetweenBuilder.md)

**`Method`**

bounds

**`Description`**

add bounds to the collection of bounds, optionally completing the factory setup by executing the generator function

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | `unknown`[] |

#### Returns

[`BetweenBuilder`](BetweenBuilder.md)

either this BetweenBuilder or the result of the generator function if all bounds have been collected

#### Defined in

[src/utility/between-builder.ts:78](https://github.com/robbiemu/handy-typescript/blob/af807b2/src/utility/between-builder.ts#L78)

___

### assertBeforeWithInitialValue

▸ `Static` **assertBeforeWithInitialValue**(`this`): `void`

**`Static`**

**`Method`**

assertBeforeWithInitialValue

**`Description`**

static psuedo-private method used in decorator to assert that the method is called after setting an initial value

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BetweenBuilder`](BetweenBuilder.md) |

#### Returns

`void`

#### Defined in

[src/utility/between-builder.ts:31](https://github.com/robbiemu/handy-typescript/blob/af807b2/src/utility/between-builder.ts#L31)

___

### build

▸ `Static` **build**(`generator`, `arity?`): [`BetweenBuilder`](BetweenBuilder.md)

**`Static`**

**`Method`**

build

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `generator` | `Function` | `undefined` | function accepting bounds |
| `arity` | `number` | `2` | - |

#### Returns

[`BetweenBuilder`](BetweenBuilder.md)

#### Defined in

[src/utility/between-builder.ts:22](https://github.com/robbiemu/handy-typescript/blob/af807b2/src/utility/between-builder.ts#L22)

___

### completeBefore

▸ `Static` **completeBefore**(`this`): `void`

**`Static`**

**`Method`**

completeBefore

**`Description`**

static psuedo-private method used in decorator to detect completion of setting the first value, deleting the between method

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`BetweenBuilder`](BetweenBuilder.md) |

#### Returns

`void`

#### Defined in

[src/utility/between-builder.ts:40](https://github.com/robbiemu/handy-typescript/blob/af807b2/src/utility/between-builder.ts#L40)
