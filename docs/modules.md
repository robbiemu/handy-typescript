[handy-typescript](README.md) / Modules

# handy-typescript

## Table of contents

### Classes

- [Andable](classes/Andable.md)
- [AssertionError](classes/AssertionError.md)
- [BetweenBuilder](classes/BetweenBuilder.md)
- [Entry](classes/Entry.md)
- [List](classes/List.md)

### Interfaces

- [AopDecoratorPayload](interfaces/AopDecoratorPayload.md)
- [Constructable](interfaces/Constructable.md)
- [DummyableConfig](interfaces/DummyableConfig.md)
- [LogMethodsConfig](interfaces/LogMethodsConfig.md)
- [Mixin](interfaces/Mixin.md)
- [Stateful](interfaces/Stateful.md)

### Type Aliases

- [ArrowFunction](modules.md#arrowfunction)
- [Comparator](modules.md#comparator)
- [Constructor](modules.md#constructor)
- [Dictionary](modules.md#dictionary)
- [DummyableFactoryResponse](modules.md#dummyablefactoryresponse)
- [FixedSizeArray](modules.md#fixedsizearray)
- [Reducer](modules.md#reducer)
- [StrictConstructor](modules.md#strictconstructor)

### Variables

- [generators](modules.md#generators)

### Functions

- [After](modules.md#after)
- [Before](modules.md#before)
- [Dummyable](modules.md#dummyable)
- [InterruptingBefore](modules.md#interruptingbefore)
- [LogMethods](modules.md#logmethods)
- [Mixin](modules.md#mixin)
- [Stateful](modules.md#stateful)
- [add](modules.md#add)
- [assert](modules.md#assert)
- [cleanStringify](modules.md#cleanstringify)
- [combinations](modules.md#combinations)
- [compose](modules.md#compose)
- [copyWithoutCircularReferences](modules.md#copywithoutcircularreferences)
- [count](modules.md#count)
- [divide](modules.md#divide)
- [emitPropertyChange](modules.md#emitpropertychange)
- [factoryDummyableConfig](modules.md#factorydummyableconfig)
- [factoryHasProperty](modules.md#factoryhasproperty)
- [factoryHasValue](modules.md#factoryhasvalue)
- [is](modules.md#is)
- [isDefined](modules.md#isdefined)
- [isNullOrUndefined](modules.md#isnullorundefined)
- [isNumber](modules.md#isnumber)
- [isNumeric](modules.md#isnumeric)
- [mean](modules.md#mean)
- [modulo](modules.md#modulo)
- [multiply](modules.md#multiply)
- [power](modules.md#power)
- [randomInt](modules.md#randomint)
- [staticImplements](modules.md#staticimplements)
- [subtract](modules.md#subtract)
- [sum](modules.md#sum)
- [take](modules.md#take)
- [toCamelCase](modules.md#tocamelcase)
- [zip](modules.md#zip)

## Type Aliases

### ArrowFunction

Ƭ **ArrowFunction**<`Params`, `T`\>: () => `T` \| (...`args`: `Params`) => `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Params` | extends `unknown`[] |
| `T` | `T` |

#### Defined in

[src/types/arrow-function.ts:2](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/types/arrow-function.ts#L2)

___

### Comparator

Ƭ **Comparator**<`T`\>: (`value`: `T`, `index?`: `number`, `array?`: `T`[]) => `boolean` \| (`value`: `T`, `index?`: `number`, `array?`: `T`[]) => value is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/types/arrow-function.ts:4](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/types/arrow-function.ts#L4)

___

### Constructor

Ƭ **Constructor**: `Partial`<(...`args`: `any`[]) => `any`\>

Constructor - a Class

#### Defined in

[src/types/constructor.ts:4](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/types/constructor.ts#L4)

___

### Dictionary

Ƭ **Dictionary**<`T`\>: `Object`

Dictionary - key-value pairs

#### Type parameters

| Name | Description |
| :------ | :------ |
| `T` | value type |

#### Index signature

▪ [key: `string`]: `T`

#### Defined in

[src/types/dictionary.ts:5](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/types/dictionary.ts#L5)

___

### DummyableFactoryResponse

Ƭ **DummyableFactoryResponse**: `Function` & { `originalMethod?`: `Function`  }

#### Defined in

[src/decorators/dummyable.decorator.ts:66](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/decorators/dummyable.decorator.ts#L66)

___

### FixedSizeArray

Ƭ **FixedSizeArray**<`N`, `T`, `M`\>: { readonly [k in M]: any } & { `length`: `N`  } & `ReadonlyArray`<`T`\>

simple fixed-size array type for typescript

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `number` |
| `T` | `T` |
| `M` | extends `string` = ``"0"`` |

#### Defined in

[src/utility/fixed-array-size.ts:5](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/fixed-array-size.ts#L5)

___

### Reducer

Ƭ **Reducer**<`T`\>: (`previousValue`: `any`, `currentValue`: `any`, `currentIndex`: `number`, `array`: `any`[]) => `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

▸ (`previousValue`, `currentValue`, `currentIndex`, `array`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `previousValue` | `any` |
| `currentValue` | `any` |
| `currentIndex` | `number` |
| `array` | `any`[] |

##### Returns

`T`

#### Defined in

[src/types/arrow-function.ts:6](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/types/arrow-function.ts#L6)

___

### StrictConstructor

Ƭ **StrictConstructor**: (...`args`: `any`[]) => `any`

#### Type declaration

• **new StrictConstructor**(`...args`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `any`[] |

##### Returns

`any`

#### Defined in

[src/types/constructor.ts:5](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/types/constructor.ts#L5)

## Variables

### generators

• `Const` **generators**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `combinations` | <T\>(`set`: `T`[], `k`: `number`) => `Generator`<`T`[], `T`[], `undefined`\> |
| `range` | (`first`: `number`, `last?`: `number`, `byFn`: [`ArrowFunction`](modules.md#arrowfunction)<`any`, `number`\>) => `Generator`<`number`\> |

#### Defined in

[src/utility/math-generators.ts:42](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/math-generators.ts#L42)

## Functions

### After

▸ **After**(`afterFunction`): (`_targetClass`: `Partial`<(...`args`: `any`[]) => `any`\>, `_propertyKey`: `string` \| `symbol`, `descriptor`: `PropertyDescriptor`) => `PropertyDescriptor`

decorator execute code _after_ method completes

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `afterFunction` | `Function` | method to decorate TODO - add support for accessors |

#### Returns

`fn`

▸ (`_targetClass`, `_propertyKey`, `descriptor`): `PropertyDescriptor`

##### Parameters

| Name | Type |
| :------ | :------ |
| `_targetClass` | `Partial`<(...`args`: `any`[]) => `any`\> |
| `_propertyKey` | `string` \| `symbol` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`PropertyDescriptor`

#### Defined in

[src/aop/after.decorator.ts:8](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/aop/after.decorator.ts#L8)

___

### Before

▸ **Before**(`beforeFunction`): (`_targetClass`: `Partial`<(...`args`: `any`[]) => `any`\>, `_propertyKey`: `string` \| `symbol`, `descriptor`: `PropertyDescriptor`) => `PropertyDescriptor`

**`Function`**

Before

**`Description`**

decorator to execute code before method execution

**`Todo`**

add support for accessors

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `beforeFunction` | `Function` | method to decorate |

#### Returns

`fn`

▸ (`_targetClass`, `_propertyKey`, `descriptor`): `PropertyDescriptor`

##### Parameters

| Name | Type |
| :------ | :------ |
| `_targetClass` | `Partial`<(...`args`: `any`[]) => `any`\> |
| `_propertyKey` | `string` \| `symbol` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`PropertyDescriptor`

#### Defined in

[src/aop/before.decorator.ts:9](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/aop/before.decorator.ts#L9)

___

### Dummyable

▸ **Dummyable**(`conf`): (`_targetClass`: `Partial`<(...`args`: `any`[]) => `any`\>, `propertyKey`: `string` \| `symbol`, `descriptor`: `PropertyDescriptor`) => `PropertyDescriptor`

decorator that can replace and reuse a method

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | [`DummyableConfig`](interfaces/DummyableConfig.md) | DummyableConfig |

#### Returns

`fn`

▸ (`_targetClass`, `propertyKey`, `descriptor`): `PropertyDescriptor`

##### Parameters

| Name | Type |
| :------ | :------ |
| `_targetClass` | `Partial`<(...`args`: `any`[]) => `any`\> |
| `propertyKey` | `string` \| `symbol` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`PropertyDescriptor`

#### Defined in

[src/decorators/dummyable.decorator.ts:7](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/decorators/dummyable.decorator.ts#L7)

___

### InterruptingBefore

▸ **InterruptingBefore**(`before`): (`target`: `Partial`<(...`args`: `any`[]) => `any`\>, `propertyKey`: `string`, `descriptor`: `PropertyDescriptor`) => `void`

decorator that executes arbitrary code before the underlying method. the function executed can
optionally trigger the original method after, or interrupt its execution. it may opt to replace
the parameters with an [AopDecoratorPayload](interfaces/AopDecoratorPayload.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `before` | `Function` | method to optionally interrup t and execute before the method TODO - add support for accessors |

#### Returns

`fn`

▸ (`target`, `propertyKey`, `descriptor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Partial`<(...`args`: `any`[]) => `any`\> |
| `propertyKey` | `string` |
| `descriptor` | `PropertyDescriptor` |

##### Returns

`void`

#### Defined in

[src/aop/interrupting-before.decorator.ts:11](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/aop/interrupting-before.decorator.ts#L11)

___

### LogMethods

▸ **LogMethods**(`config?`): (`target`: `any`) => `any`

decorator to log method calls and the paramters passed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | [`LogMethodsConfig`](interfaces/LogMethodsConfig.md) | logging configuration |

#### Returns

`fn`

▸ (`target`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |

##### Returns

`any`

#### Defined in

[src/decorators/log-methods.decorator.ts:19](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/decorators/log-methods.decorator.ts#L19)

___

### Mixin

▸ **Mixin**(`...classes`): `ClassDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...classes` | `Function`[] |

#### Returns

`ClassDecorator`

#### Defined in

[src/decorators/mixin.decorator.ts:25](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/decorators/mixin.decorator.ts#L25)

___

### Stateful

▸ **Stateful**<`T`\>(): `ClassDecorator`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`ClassDecorator`

#### Defined in

[src/decorators/stateful.decorator.ts:27](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/decorators/stateful.decorator.ts#L27)

___

### add

▸ **add**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`number`

#### Defined in

[src/utility/math-lambdas.ts:7](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/math-lambdas.ts#L7)

___

### assert

▸ **assert**(`condition`, `msg?`): asserts condition

assert a condition or throw

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `condition` | `any` | boolean to assert |
| `msg?` | `string` | optional message to throw on error |

#### Returns

asserts condition

#### Defined in

[src/utility/assert.ts:11](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/assert.ts#L11)

___

### cleanStringify

▸ **cleanStringify**(`item`): `string`

stringify possibly circular references

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `item` | `any` | value to stringify cleanly |

#### Returns

`string`

json-like string without circular references

#### Defined in

[src/utility/clean-stringify.ts:8](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/clean-stringify.ts#L8)

___

### combinations

▸ **combinations**<`T`\>(`set`, `k`): `T`[][]

**`Function`**

combinations

**`Description`**

derrive combinations of length k from a set

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `set` | `T`[] | elements to derrive combinations of |
| `k` | `number` | number of combinations |

#### Returns

`T`[][]

an array of k-lemngth choices from the set

#### Defined in

[src/utility/math-lambdas.ts:29](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/math-lambdas.ts#L29)

___

### compose

▸ **compose**(`...fns`): () => `void`

**`Function`**

compose

**`Description`**

compose an ordered list of execution from current context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...fns` | `Function`[] | functions to execute |

#### Returns

`fn`

a function taht will call each fn in turn

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/utility/compose.ts:7](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/compose.ts#L7)

___

### copyWithoutCircularReferences

▸ **copyWithoutCircularReferences**(`references`, `object`): `Object`

recursive function to build a copy of an object with '###_Circular_###' replacing circular references

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `references` | `any`[] | the list of references so far encountered |
| `object` | `any` | the object copied |

#### Returns

`Object`

copy of an object without circular references

#### Defined in

[src/utility/clean-stringify.ts:21](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/clean-stringify.ts#L21)

___

### count

▸ **count**<`T`\>(`p`, `c`): `Map`<`T`, `number`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Map`<`T`, `number`\> |
| `c` | `T` |

#### Returns

`Map`<`T`, `number`\>

#### Defined in

[src/utility/math-lambdas.ts:1](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/math-lambdas.ts#L1)

___

### divide

▸ **divide**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`number`

#### Defined in

[src/utility/math-lambdas.ts:10](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/math-lambdas.ts#L10)

___

### emitPropertyChange

▸ **emitPropertyChange**(`property`): (`this`: `StatefulSubject`) => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `string` |

#### Returns

`fn`

▸ (`this`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `StatefulSubject` |

##### Returns

`void`

#### Defined in

[src/decorators/stateful.decorator.ts:43](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/decorators/stateful.decorator.ts#L43)

___

### factoryDummyableConfig

▸ **factoryDummyableConfig**(`conf`): [`DummyableConfig`](interfaces/DummyableConfig.md)

(internal) function to generate a compliant conf body from a partial one

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `conf` | `Partial`<[`DummyableConfig`](interfaces/DummyableConfig.md)\> | Partial<DummyableConfig> |

#### Returns

[`DummyableConfig`](interfaces/DummyableConfig.md)

compliant Dummyable conf parameter

#### Defined in

[src/decorators/dummyable.decorator.ts:37](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/decorators/dummyable.decorator.ts#L37)

___

### factoryHasProperty

▸ **factoryHasProperty**(`property`): (`value`: { `[prop: string]`: `any`;  }) => `boolean`

generate a comparator that looks for existance of a property
example:
```typescript
const cases = [ {a:2}, {a:3, 'dummy-data': true}, {a:4} ]
const hasDummyData = factoryHasProperty('dummy-data')
assert(cases.some(hasDummyData))
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | that is required on the comparator |

#### Returns

`fn`

comparator

▸ (`value`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Object` |

##### Returns

`boolean`

#### Defined in

[src/comparitors/factory-has-property.ts:12](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/comparitors/factory-has-property.ts#L12)

___

### factoryHasValue

▸ **factoryHasValue**(`property`, `evaluator?`): (`value`: { `[prop: string]`: `any`;  }) => `boolean`

generate a comparator that looks for existance of a value at a property
example:
```typescript
const cases = [ {a:2}, {a:3}, {a:4} ]
const isOdd = factoryHasValue('a', () => a%2)
assert(cases.some(isOdd))
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `property` | `string` | `undefined` | that is required on the comparator |
| `evaluator` | `Function` | `isDefined` | that is called in the comparator, on the property, to determine the matching of the value |

#### Returns

`fn`

comparator

▸ (`value`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `Object` |

##### Returns

`boolean`

#### Defined in

[src/comparitors/factory-has-value.ts:15](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/comparitors/factory-has-value.ts#L15)

___

### is

▸ **is**(`o`): (`x`: `any`) => `boolean`

**`Function`**

is

**`Description`**

factory pattern for creating custom "is"-type comparators

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `o` | `any` | pattern (variable) to compare to |

#### Returns

`fn`

a comparator that returns true if the input object is equal to the pattern

▸ (`x`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `any` |

##### Returns

`boolean`

#### Defined in

[src/comparitors/is.ts:8](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/comparitors/is.ts#L8)

___

### isDefined

▸ **isDefined**(`value`): `boolean`

comparitor to find defined values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | expected to be not null or undefined |

#### Returns

`boolean`

#### Defined in

[src/comparitors/is-defined.ts:6](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/comparitors/is-defined.ts#L6)

___

### isNullOrUndefined

▸ **isNullOrUndefined**(`value`): `boolean`

comparitor to find not defined values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | expected to be null or undefined |

#### Returns

`boolean`

#### Defined in

[src/comparitors/is-null-or-undefined.ts:6](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/comparitors/is-null-or-undefined.ts#L6)

___

### isNumber

▸ **isNumber**(`value`): `boolean`

comparitor to find number values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | expected to be number |

#### Returns

`boolean`

#### Defined in

[src/comparitors/is-number.ts:6](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/comparitors/is-number.ts#L6)

___

### isNumeric

▸ **isNumeric**(`value`): `boolean`

comparitor to find numeric values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `any` | expected to be numeric |

#### Returns

`boolean`

#### Defined in

[src/comparitors/is-numeric.ts:6](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/comparitors/is-numeric.ts#L6)

___

### mean

▸ **mean**(`o`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `number`[] |

#### Returns

`number`

#### Defined in

[src/utility/math-lambdas.ts:18](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/math-lambdas.ts#L18)

___

### modulo

▸ **modulo**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`number`

#### Defined in

[src/utility/math-lambdas.ts:11](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/math-lambdas.ts#L11)

___

### multiply

▸ **multiply**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`number`

#### Defined in

[src/utility/math-lambdas.ts:9](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/math-lambdas.ts#L9)

___

### power

▸ **power**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`number`

#### Defined in

[src/utility/math-lambdas.ts:12](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/math-lambdas.ts#L12)

___

### randomInt

▸ **randomInt**(`min`, `max`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Defined in

[src/utility/random-int.ts:2](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/random-int.ts#L2)

___

### staticImplements

▸ **staticImplements**<`T`\>(): `Function`

simple static implementation type checking for typescript

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

`Function`

#### Defined in

[src/utility/static-implements.ts:4](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/static-implements.ts#L4)

___

### subtract

▸ **subtract**(`a`, `b`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |

#### Returns

`number`

#### Defined in

[src/utility/math-lambdas.ts:8](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/math-lambdas.ts#L8)

___

### sum

▸ **sum**(`o`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o` | `number`[] |

#### Returns

`number`

#### Defined in

[src/utility/math-lambdas.ts:14](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/math-lambdas.ts#L14)

___

### take

▸ **take**<`T`\>(`num`, `iter`): `IterableIterator`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |
| `iter` | `IterableIterator`<`T`\> |

#### Returns

`IterableIterator`<`T`\>

#### Defined in

[src/utility/take.ts:1](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/take.ts#L1)

___

### toCamelCase

▸ **toCamelCase**(`str?`): `string`

convert a string of whole words to camel case

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `str` | `string` | `''` | whole words to camel case |

#### Returns

`string`

camel cased string

#### Defined in

[src/utility/to-camel-case.ts:6](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/to-camel-case.ts#L6)

___

### zip

▸ **zip**(`...iterables`): `Object`

**`Method`**

zip
usage:
const zipped = zip(['a', 'b', 'c'], ['d', 'e', 'f', 'g']);
for (const x of zipped) {
    console.log(x);
}
// Output:
// ['a', 'd']
// ['b', 'e']
// ['c', 'f']

TODO -- WHAT return type is this?

**`Src`**

https://exploringjs.com/es6/ch_iteration.html

#### Parameters

| Name | Type |
| :------ | :------ |
| `...iterables` | `any`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `[iterator]` | () => `any` |
| `next` | () => { `done`: `undefined` = true; `value`: `any`[]  } \| { `done`: `boolean` = true; `value`: `undefined`  } |

#### Defined in

[src/utility/zip.ts:17](https://github.com/robbiemu/handy-typescript/blob/81cc3ca/src/utility/zip.ts#L17)
