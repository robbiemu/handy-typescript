[handy-typescript](../README.md) / [Modules](../modules.md) / Mixin

# Interface: Mixin

decorator to mixin behaviors
example:
```typescript
  abstract class Behavior {
    method() {}
  }

  interface Specimen extends Behavior {}

  @Mixin(Behavior)
  class Specimen {}

  //..

  const specimen = new Specimen()
  specimen.method()
```

**`Param`**

classes to mix in to the decorated class

## Table of contents

### Constructors

- [constructor](Mixin.md#constructor)

### Properties

- [postConstructor](Mixin.md#postconstructor)

## Constructors

### constructor

• **constructor**: `Object`

## Properties

### postConstructor

• `Optional` **postConstructor**: `Function`[]

#### Defined in

[src/decorators/mixin.decorator.ts:22](https://github.com/robbiemu/handy-typescript/blob/2b4364d/src/decorators/mixin.decorator.ts#L22)
