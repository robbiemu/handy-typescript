[handy-typescript](../README.md) / [Modules](../modules.md) / [src/utility/list](../modules/src_utility_list.md) / List

# Class: List<T\>

[src/utility/list](../modules/src_utility_list.md).List

**`description`** helper methods on Arrays, without polluting the Array object

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- *Array*

  ↳ **List**

## Table of contents

### Constructors

- [constructor](src_utility_list.list.md#constructor)

### Properties

- [length](src_utility_list.list.md#length)
- [[Symbol.species]](src_utility_list.list.md#[symbol.species])

### Accessors

- [first](src_utility_list.list.md#first)
- [last](src_utility_list.list.md#last)

### Methods

- [[Symbol.iterator]](src_utility_list.list.md#[symbol.iterator])
- [[Symbol.unscopables]](src_utility_list.list.md#[symbol.unscopables])
- [and](src_utility_list.list.md#and)
- [aperture](src_utility_list.list.md#aperture)
- [between](src_utility_list.list.md#between)
- [concat](src_utility_list.list.md#concat)
- [copyWithin](src_utility_list.list.md#copywithin)
- [count](src_utility_list.list.md#count)
- [entries](src_utility_list.list.md#entries)
- [every](src_utility_list.list.md#every)
- [fill](src_utility_list.list.md#fill)
- [filter](src_utility_list.list.md#filter)
- [find](src_utility_list.list.md#find)
- [findIndex](src_utility_list.list.md#findindex)
- [flat](src_utility_list.list.md#flat)
- [flatMap](src_utility_list.list.md#flatmap)
- [forEach](src_utility_list.list.md#foreach)
- [includes](src_utility_list.list.md#includes)
- [indexOf](src_utility_list.list.md#indexof)
- [join](src_utility_list.list.md#join)
- [keys](src_utility_list.list.md#keys)
- [lastIndexOf](src_utility_list.list.md#lastindexof)
- [map](src_utility_list.list.md#map)
- [mean](src_utility_list.list.md#mean)
- [median](src_utility_list.list.md#median)
- [mode](src_utility_list.list.md#mode)
- [oneOf](src_utility_list.list.md#oneof)
- [pop](src_utility_list.list.md#pop)
- [push](src_utility_list.list.md#push)
- [reduce](src_utility_list.list.md#reduce)
- [reduceRight](src_utility_list.list.md#reduceright)
- [remove](src_utility_list.list.md#remove)
- [reverse](src_utility_list.list.md#reverse)
- [shift](src_utility_list.list.md#shift)
- [shuffle](src_utility_list.list.md#shuffle)
- [slice](src_utility_list.list.md#slice)
- [some](src_utility_list.list.md#some)
- [sort](src_utility_list.list.md#sort)
- [splice](src_utility_list.list.md#splice)
- [sum](src_utility_list.list.md#sum)
- [toLocaleString](src_utility_list.list.md#tolocalestring)
- [toString](src_utility_list.list.md#tostring)
- [unshift](src_utility_list.list.md#unshift)
- [until](src_utility_list.list.md#until)
- [values](src_utility_list.list.md#values)
- [from](src_utility_list.list.md#from)
- [isArray](src_utility_list.list.md#isarray)
- [of](src_utility_list.list.md#of)

## Constructors

### constructor

\+ **new List**<T\>(`arrayLength?`: *number*): [*List*](src_utility_list.list.md)<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arrayLength?` | *number* |

**Returns:** [*List*](src_utility_list.list.md)<T\>

Inherited from: Array.constructor

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1404

## Properties

### length

• **length**: *number*

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

Inherited from: Array.length

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1224

___

### [Symbol.species]

▪ `Static` `Readonly` **[Symbol.species]**: ArrayConstructor

Inherited from: Array.\_\_@species

Defined in: node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:314

## Accessors

### first

• get **first**(): T

**`property`** first Accessor

**`description`** first element in the list

**Returns:** T

Defined in: [src/utility/list.ts:39](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L39)

___

### last

• get **last**(): T

**`property`** last Accessor

**`description`** last element in the list

**Returns:** T

Defined in: [src/utility/list.ts:31](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L31)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator*<any\>

Iterator

**Returns:** *IterableIterator*<any\>

Inherited from: Array.\_\_@iterator

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:60

___

### [Symbol.unscopables]

▸ **[Symbol.unscopables]**(): *object*

Returns an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

**Returns:** *object*

| Name | Type |
| :------ | :------ |
| `copyWithin` | *boolean* |
| `entries` | *boolean* |
| `fill` | *boolean* |
| `find` | *boolean* |
| `findIndex` | *boolean* |
| `keys` | *boolean* |
| `values` | *boolean* |

Inherited from: Array.\_\_@unscopables

Defined in: node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:99

___

### and

▸ **and**(`end`: T, `start?`: T): [*List*](src_utility_list.list.md)<T\>

**`method`** and

**`description`** completion of a between call

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `end` | T | the end of the range delimiting the subset |
| `start?` | T | - |

**Returns:** [*List*](src_utility_list.list.md)<T\>

elements in the list that are comparably
between the wtart and the end of the list

Defined in: [src/utility/list.ts:153](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L153)

___

### aperture

▸ **aperture**(`n`: *number*): [*List*](src_utility_list.list.md)<[*List*](src_utility_list.list.md)<T\>\>

**`method`** aperture

**`description`** Returns a new list, composed of n-tuples of consecutive elements.
Note: inspired by, and perhaps copied from Ramda

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | *number* | number of elements to group by |

**Returns:** [*List*](src_utility_list.list.md)<[*List*](src_utility_list.list.md)<T\>\>

list of lists of (up to) n elements

Defined in: [src/utility/list.ts:50](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L50)

___

### between

▸ **between**(`start`: T, `end?`: T): [*List*](src_utility_list.list.md)<T\>

**`method`** between

**`description`** return a subset of elements by their sort ordering

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | T | the start of the range |
| `end?` | T | the end of the range |

**Returns:** [*List*](src_utility_list.list.md)<T\>

elements in the list that are comparably
between the wtart and the end of the list
Note: can be used in two forms: `list.between(start, end)`and
`list.between(start).and(end)`

Defined in: [src/utility/list.ts:138](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L138)

___

### concat

▸ **concat**(...`items`: *ConcatArray*<any\>[]): *any*[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | *ConcatArray*<any\>[] | Additional arrays and/or items to add to the end of the array. |

**Returns:** *any*[]

Inherited from: Array.concat

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1248

▸ **concat**(...`items`: *any*[]): *any*[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | *any*[] | Additional arrays and/or items to add to the end of the array. |

**Returns:** *any*[]

Inherited from: Array.concat

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1254

___

### copyWithin

▸ **copyWithin**(`target`: *number*, `start`: *number*, `end?`: *number*): [*List*](src_utility_list.list.md)<T\>

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | *number* | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | *number* | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | *number* | If not specified, length of the this object is used as its default value. |

**Returns:** [*List*](src_utility_list.list.md)<T\>

Inherited from: Array.copyWithin

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:64

___

### count

▸ **count**(): *Map*<T, number\>

**`method`** count

**Returns:** *Map*<T, number\>

a map of elements to the tally of their occurance

Defined in: [src/utility/list.ts:123](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L123)

___

### entries

▸ **entries**(): *IterableIterator*<[*number*, *any*]\>

Returns an iterable of key, value pairs for every entry in the array

**Returns:** *IterableIterator*<[*number*, *any*]\>

Inherited from: Array.entries

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:65

___

### every

▸ **every**<S\>(`predicate`: (`value`: *any*, `index`: *number*, `array`: *any*[]) => value is S, `thisArg?`: *any*): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | *any* |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: *any*, `index`: *number*, `array`: *any*[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | *any* | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** this is S[]

Inherited from: Array.every

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1331

▸ **every**(`predicate`: (`value`: *any*, `index`: *number*, `array`: *any*[]) => *unknown*, `thisArg?`: *any*): *boolean*

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: *any*, `index`: *number*, `array`: *any*[]) => *unknown* | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | *any* | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** *boolean*

Inherited from: Array.every

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1340

___

### fill

▸ **fill**(`value`: *any*, `start?`: *number*, `end?`: *number*): [*List*](src_utility_list.list.md)<T\>

Returns the this object after filling the section identified by start and end with value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | *any* | value to fill array section with |
| `start?` | *number* | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | *number* | index to stop filling the array at. If end is negative, it is treated as length+end. |

**Returns:** [*List*](src_utility_list.list.md)<T\>

Inherited from: Array.fill

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:53

___

### filter

▸ **filter**<T\>(`lambda`: [*Comparator*](../modules/types_arrow_function.md#comparator)<T\>): [*List*](src_utility_list.list.md)<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `lambda` | [*Comparator*](../modules/types_arrow_function.md#comparator)<T\> |

**Returns:** [*List*](src_utility_list.list.md)<T\>

Overrides: Array.filter

Defined in: [src/utility/list.ts:19](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L19)

___

### find

▸ **find**<S\>(`predicate`: (`value`: *any*, `index`: *number*, `obj`: *any*[]) => value is S, `thisArg?`: *any*): S

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | *any* |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: *any*, `index`: *number*, `obj`: *any*[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | *any* | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

**Returns:** S

Inherited from: Array.find

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:31

▸ **find**(`predicate`: (`value`: *any*, `index`: *number*, `obj`: *any*[]) => *unknown*, `thisArg?`: *any*): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: *any*, `index`: *number*, `obj`: *any*[]) => *unknown* |
| `thisArg?` | *any* |

**Returns:** *any*

Inherited from: Array.find

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:32

___

### findIndex

▸ **findIndex**(`predicate`: (`value`: *any*, `index`: *number*, `obj`: *any*[]) => *unknown*, `thisArg?`: *any*): *number*

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: *any*, `index`: *number*, `obj`: *any*[]) => *unknown* | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | *any* | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

**Returns:** *number*

Inherited from: Array.findIndex

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:43

___

### flat

▸ **flat**<A, D\>(`depth?`: D): *FlatArray*<A, D\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `A` | - | - |
| `D` | *number* | ``1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `depth?` | D | The maximum recursion depth |

**Returns:** *FlatArray*<A, D\>[]

Inherited from: Array.flat

Defined in: node_modules/typescript/lib/lib.es2019.array.d.ts:81

___

### flatMap

▸ **flatMap**<U, This\>(`callback`: (`value`: *any*, `index`: *number*, `array`: *any*[]) => U \| readonly U[], `thisArg?`: This): U[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Default |
| :------ | :------ |
| `U` | - |
| `This` | *undefined* |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`value`: *any*, `index`: *number*, `array`: *any*[]) => U \| readonly U[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | This | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** U[]

Inherited from: Array.flatMap

Defined in: node_modules/typescript/lib/lib.es2019.array.d.ts:70

___

### forEach

▸ **forEach**(`callbackfn`: (`value`: *any*, `index`: *number*, `array`: *any*[]) => *void*, `thisArg?`: *any*): *void*

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: *any*, `index`: *number*, `array`: *any*[]) => *void* | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | *any* | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** *void*

Inherited from: Array.forEach

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1355

___

### includes

▸ **includes**(`searchElement`: *any*, `fromIndex?`: *number*): *boolean*

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | *any* | The element to search for. |
| `fromIndex?` | *number* | The position in this array at which to begin searching for searchElement. |

**Returns:** *boolean*

Inherited from: Array.includes

Defined in: node_modules/typescript/lib/lib.es2016.array.include.d.ts:27

___

### indexOf

▸ **indexOf**(`searchElement`: *any*, `fromIndex?`: *number*): *number*

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | *any* | The value to locate in the array. |
| `fromIndex?` | *number* | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

**Returns:** *number*

Inherited from: Array.indexOf

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1316

___

### join

▸ **join**(`separator?`: *string*): *string*

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | *string* | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

**Returns:** *string*

Inherited from: Array.join

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1259

___

### keys

▸ **keys**(): *IterableIterator*<number\>

Returns an iterable of keys in the array

**Returns:** *IterableIterator*<number\>

Inherited from: Array.keys

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:70

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`: *any*, `fromIndex?`: *number*): *number*

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | *any* | The value to locate in the array. |
| `fromIndex?` | *number* | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

**Returns:** *number*

Inherited from: Array.lastIndexOf

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1322

___

### map

▸ **map**<U\>(`callbackfn`: (`value`: *any*, `index`: *number*, `array`: *any*[]) => U, `thisArg?`: *any*): U[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: *any*, `index`: *number*, `array`: *any*[]) => U | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | *any* | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** U[]

Inherited from: Array.map

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1361

___

### mean

▸ **mean**(): *number*

**`method`** mean

**`description`** calculates the mean of the list

**Returns:** *number*

the mean of a (numeric) list

Defined in: [src/utility/list.ts:72](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L72)

___

### median

▸ **median**(): *number* \| [*List*](src_utility_list.list.md)<T\>

**`method`** median

**`description`** calculates the median of the list

**Returns:** *number* \| [*List*](src_utility_list.list.md)<T\>

the median of the list

Defined in: [src/utility/list.ts:81](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L81)

___

### mode

▸ **mode**(`multimodal?`: *boolean*): T

**`method`** mode

**`description`** calculates the mode of the list

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `multimodal` | *boolean* | false | in the case of ties, return them all |

**Returns:** T

the most frequently occuring element(s) in the list

Defined in: [src/utility/list.ts:103](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L103)

___

### oneOf

▸ **oneOf**(): T

**`method`** onOf

**`description`** get a random element from the list

**Returns:** T

an element of the list

Defined in: [src/utility/list.ts:187](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L187)

___

### pop

▸ **pop**(): *any*

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

**Returns:** *any*

Inherited from: Array.pop

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1237

___

### push

▸ **push**(...`items`: *any*[]): *number*

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | *any*[] | New elements to add to the array. |

**Returns:** *number*

Inherited from: Array.push

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1242

___

### reduce

▸ **reduce**(`callbackfn`: (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => *any*): *any*

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => *any* | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

**Returns:** *any*

Inherited from: Array.reduce

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1379

▸ **reduce**(`callbackfn`: (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => *any*, `initialValue`: *any*): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => *any* |
| `initialValue` | *any* |

**Returns:** *any*

Inherited from: Array.reduce

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1380

▸ **reduce**<U\>(`callbackfn`: (`previousValue`: U, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => U, `initialValue`: U): U

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: U, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => U | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | U | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

**Returns:** U

Inherited from: Array.reduce

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1386

___

### reduceRight

▸ **reduceRight**(`callbackfn`: (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => *any*): *any*

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => *any* | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

**Returns:** *any*

Inherited from: Array.reduceRight

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1392

▸ **reduceRight**(`callbackfn`: (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => *any*, `initialValue`: *any*): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: *any*, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => *any* |
| `initialValue` | *any* |

**Returns:** *any*

Inherited from: Array.reduceRight

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1393

▸ **reduceRight**<U\>(`callbackfn`: (`previousValue`: U, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => U, `initialValue`: U): U

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: U, `currentValue`: *any*, `currentIndex`: *number*, `array`: *any*[]) => U | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | U | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

**Returns:** U

Inherited from: Array.reduceRight

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1399

___

### remove

▸ **remove**(`n`: T): T

**`method`** remove

**`description`** removes an element from the list

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `n` | T | element to remove |

**Returns:** T

the element

Defined in: [src/utility/list.ts:197](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L197)

___

### reverse

▸ **reverse**(): *any*[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

**Returns:** *any*[]

Inherited from: Array.reverse

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1264

___

### shift

▸ **shift**(): *any*

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

**Returns:** *any*

Inherited from: Array.shift

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1269

___

### shuffle

▸ **shuffle**(): *void*

**`method`** shuffle

**`description`** shuffle the list

**Returns:** *void*

Defined in: [src/utility/list.ts:173](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L173)

___

### slice

▸ **slice**<T\>(`start?`: *number*, `end?`: *number*): [*List*](src_utility_list.list.md)<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | *number* |
| `end?` | *number* |

**Returns:** [*List*](src_utility_list.list.md)<T\>

Overrides: Array.slice

Defined in: [src/utility/list.ts:23](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L23)

___

### some

▸ **some**(`predicate`: (`value`: *any*, `index`: *number*, `array`: *any*[]) => *unknown*, `thisArg?`: *any*): *boolean*

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: *any*, `index`: *number*, `array`: *any*[]) => *unknown* | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | *any* | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** *boolean*

Inherited from: Array.some

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1349

___

### sort

▸ **sort**(`compareFn?`: (`a`: *any*, `b`: *any*) => *number*): [*List*](src_utility_list.list.md)<T\>

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: *any*, `b`: *any*) => *number* | Function used to determine the order of the elements. It is expected to return a negative value if first argument is less than second argument, zero if they're equal and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

**Returns:** [*List*](src_utility_list.list.md)<T\>

Inherited from: Array.sort

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1290

___

### splice

▸ **splice**(`start`: *number*, `deleteCount?`: *number*): *any*[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | *number* | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | *number* | The number of elements to remove. |

**Returns:** *any*[]

An array containing the elements that were deleted.

Inherited from: Array.splice

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1297

▸ **splice**(`start`: *number*, `deleteCount`: *number*, ...`items`: *any*[]): *any*[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | *number* | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | *number* | The number of elements to remove. |
| `...items` | *any*[] | Elements to insert into the array in place of the deleted elements. |

**Returns:** *any*[]

An array containing the elements that were deleted.

Inherited from: Array.splice

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1305

___

### sum

▸ **sum**(): *number*

**`method`** sum

**`description`** sums a list

**Returns:** *number*

the sum of the lest, as per the + operator

Defined in: [src/utility/list.ts:63](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L63)

___

### toLocaleString

▸ **toLocaleString**(): *string*

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** *string*

Inherited from: Array.toLocaleString

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1232

___

### toString

▸ **toString**(): *string*

Returns a string representation of an array.

**Returns:** *string*

Inherited from: Array.toString

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1228

___

### unshift

▸ **unshift**(...`items`: *any*[]): *number*

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | *any*[] | Elements to insert at the start of the array. |

**Returns:** *number*

Inherited from: Array.unshift

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1310

___

### until

▸ **until**(`value`: T): [*List*](src_utility_list.list.md)<T\>

**`method`** until

**`description`** values from the start until a value

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | T | the value after the last value in the desired subset |

**Returns:** [*List*](src_utility_list.list.md)<T\>

a subet of of elements of the list

Defined in: [src/utility/list.ts:164](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L164)

___

### values

▸ **values**(): *IterableIterator*<any\>

Returns an iterable of values in the array

**Returns:** *IterableIterator*<any\>

Inherited from: Array.values

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:75

___

### from

▸ `Static` **from**<T\>(`iter`: *ArrayLike*<T\>): [*List*](src_utility_list.list.md)<T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `iter` | *ArrayLike*<T\> |

**Returns:** [*List*](src_utility_list.list.md)<T\>

Overrides: Array.from

Defined in: [src/utility/list.ts:15](https://github.com/robbiemu/handy-typescript/blob/1dd3e37/src/utility/list.ts#L15)

___

### isArray

▸ `Static` **isArray**(`arg`: *any*): arg is any[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | *any* |

**Returns:** arg is any[]

Inherited from: Array.isArray

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1411

___

### of

▸ `Static` **of**<T\>(...`items`: T[]): T[]

Returns a new array from a set of elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | T[] | A set of elements to include in the new array object. |

**Returns:** T[]

Inherited from: Array.of

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:86
