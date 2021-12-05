[handy-typescript](../README.md) / [Modules](../modules.md) / [utility/between-builder](../modules/utility_between_builder.md) / BetweenBuilder

# Class: BetweenBuilder

[utility/between-builder](../modules/utility_between_builder.md).BetweenBuilder

**`description`** general factory helper to populate a generator with a collection of values

## Table of contents

### Constructors

- [constructor](utility_between_builder.betweenbuilder.md#constructor)

### Properties

- [bounds](utility_between_builder.betweenbuilder.md#bounds)

### Methods

- [and](utility_between_builder.betweenbuilder.md#and)
- [between](utility_between_builder.betweenbuilder.md#between)
- [setBounds](utility_between_builder.betweenbuilder.md#setbounds)
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

Defined in: [src/utility/between-builder.ts:11](https://github.com/robbiemu/handy-typescript/blob/9919eaf/src/utility/between-builder.ts#L11)

## Properties

### bounds

• **bounds**: [*List*](utility_list.list.md)<unknown\>

Defined in: [src/utility/between-builder.ts:11](https://github.com/robbiemu/handy-typescript/blob/9919eaf/src/utility/between-builder.ts#L11)

## Methods

### and

▸ **and**(`value`: *unknown*): *any*

**`method`** and

**`description`** add a bound to the collection of bounds, optionally completing the factory setup by executing the generator function

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | *unknown* |

**Returns:** *any*

either this BetweenBuilder or the result of the generator function if all bounds have been collected

Defined in: [src/utility/between-builder.ts:52](https://github.com/robbiemu/handy-typescript/blob/9919eaf/src/utility/between-builder.ts#L52)

___

### between

▸ **between**(`value`: *unknown*): [*BetweenBuilder*](utility_between_builder.betweenbuilder.md)

**`method`** between

**`description`** add a bound to the collection of bounds, optionally completing the factory setup by executing the generator function

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | *unknown* |

**Returns:** [*BetweenBuilder*](utility_between_builder.betweenbuilder.md)

either this BetweenBuilder or the result of the generator function if all bounds have been collected

Defined in: [src/utility/between-builder.ts:65](https://github.com/robbiemu/handy-typescript/blob/9919eaf/src/utility/between-builder.ts#L65)

___

### setBounds

▸ **setBounds**(`bounds`: *unknown*[]): [*BetweenBuilder*](utility_between_builder.betweenbuilder.md)

**`method`** bounds

**`description`** add bounds to the collection of bounds, optionally completing the factory setup by executing the generator function

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | *unknown*[] |

**Returns:** [*BetweenBuilder*](utility_between_builder.betweenbuilder.md)

either this BetweenBuilder or the result of the generator function if all bounds have been collected

Defined in: [src/utility/between-builder.ts:77](https://github.com/robbiemu/handy-typescript/blob/9919eaf/src/utility/between-builder.ts#L77)

___

### assertBeforeWithInitialValue

▸ `Static` **assertBeforeWithInitialValue**(): *void*

**`static`**

**`method`** assertBeforeWithInitialValue

**`description`** static psuedo-private method used in decorator to assert that the method is called after setting an initial value

**Returns:** *void*

Defined in: [src/utility/between-builder.ts:30](https://github.com/robbiemu/handy-typescript/blob/9919eaf/src/utility/between-builder.ts#L30)

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

Defined in: [src/utility/between-builder.ts:21](https://github.com/robbiemu/handy-typescript/blob/9919eaf/src/utility/between-builder.ts#L21)

___

### completeBefore

▸ `Static` **completeBefore**(): *void*

**`static`**

**`method`** completeBefore

**`description`** static psuedo-private method used in decorator to detect completion of setting the first value, deleting the between method

**Returns:** *void*

Defined in: [src/utility/between-builder.ts:40](https://github.com/robbiemu/handy-typescript/blob/9919eaf/src/utility/between-builder.ts#L40)
