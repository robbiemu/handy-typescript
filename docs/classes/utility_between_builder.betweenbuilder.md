[handy-typescript](../README.md) / [Modules](../modules.md) / [utility/between-builder](../modules/utility_between_builder.md) / BetweenBuilder

# Class: BetweenBuilder

[utility/between-builder](../modules/utility_between_builder.md).BetweenBuilder

## Table of contents

### Constructors

- [constructor](utility_between_builder.betweenbuilder.md#constructor)

### Properties

- [bounds](utility_between_builder.betweenbuilder.md#bounds)

### Methods

- [and](utility_between_builder.betweenbuilder.md#and)
- [between](utility_between_builder.betweenbuilder.md#between)
- [betweenBounds](utility_between_builder.betweenbuilder.md#betweenbounds)
- [assertBeforeWithInitialValue](utility_between_builder.betweenbuilder.md#assertbeforewithinitialvalue)
- [build](utility_between_builder.betweenbuilder.md#build)
- [completeBefore](utility_between_builder.betweenbuilder.md#completebefore)

## Constructors

### constructor

\+ **new BetweenBuilder**(`generator`: Function, `arity`: *number*): [*BetweenBuilder*](utility_between_builder.betweenbuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | Function |
| `arity` | *number* |

**Returns:** [*BetweenBuilder*](utility_between_builder.betweenbuilder.md)

Defined in: [src/utility/between-builder.ts:7](https://github.com/robbiemu/handy-typescript/blob/53f59f0/src/utility/between-builder.ts#L7)

## Properties

### bounds

• **bounds**: [*List*](utility_list.list.md)<unknown\>

Defined in: [src/utility/between-builder.ts:7](https://github.com/robbiemu/handy-typescript/blob/53f59f0/src/utility/between-builder.ts#L7)

## Methods

### and

▸ **and**(`value`: *unknown*): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | *unknown* |

**Returns:** *any*

Defined in: [src/utility/between-builder.ts:32](https://github.com/robbiemu/handy-typescript/blob/53f59f0/src/utility/between-builder.ts#L32)

___

### between

▸ **between**(`value`: *unknown*): [*BetweenBuilder*](utility_between_builder.betweenbuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | *unknown* |

**Returns:** [*BetweenBuilder*](utility_between_builder.betweenbuilder.md)

Defined in: [src/utility/between-builder.ts:39](https://github.com/robbiemu/handy-typescript/blob/53f59f0/src/utility/between-builder.ts#L39)

___

### betweenBounds

▸ **betweenBounds**(`bounds`: *unknown*[]): [*BetweenBuilder*](utility_between_builder.betweenbuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | *unknown*[] |

**Returns:** [*BetweenBuilder*](utility_between_builder.betweenbuilder.md)

Defined in: [src/utility/between-builder.ts:45](https://github.com/robbiemu/handy-typescript/blob/53f59f0/src/utility/between-builder.ts#L45)

___

### assertBeforeWithInitialValue

▸ `Static` **assertBeforeWithInitialValue**(): *void*

**Returns:** *void*

Defined in: [src/utility/between-builder.ts:21](https://github.com/robbiemu/handy-typescript/blob/53f59f0/src/utility/between-builder.ts#L21)

___

### build

▸ `Static` **build**(`generator`: Function, `arity?`: *number*): [*BetweenBuilder*](utility_between_builder.betweenbuilder.md)

**`static`**

**`method`** build

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `generator` | Function | - | function accepting bounds |
| `arity` | *number* | 2 | - |

**Returns:** [*BetweenBuilder*](utility_between_builder.betweenbuilder.md)

Defined in: [src/utility/between-builder.ts:17](https://github.com/robbiemu/handy-typescript/blob/53f59f0/src/utility/between-builder.ts#L17)

___

### completeBefore

▸ `Static` **completeBefore**(): *void*

**Returns:** *void*

Defined in: [src/utility/between-builder.ts:26](https://github.com/robbiemu/handy-typescript/blob/53f59f0/src/utility/between-builder.ts#L26)
