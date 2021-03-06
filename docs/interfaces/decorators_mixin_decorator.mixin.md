[handy-typescript](../README.md) / [Modules](../modules.md) / [decorators/mixin.decorator](../modules/decorators_mixin_decorator.md) / Mixin

# Interface: Mixin

[decorators/mixin.decorator](../modules/decorators_mixin_decorator.md).Mixin

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

**`param`** classes to mix in to the decorated class

## Table of contents

### Constructors

- [constructor](decorators_mixin_decorator.mixin.md#constructor)

### Properties

- [postConstructor](decorators_mixin_decorator.mixin.md#postconstructor)

## Constructors

### constructor

• **constructor**: *object*

## Properties

### postConstructor

• `Optional` **postConstructor**: Function[]

Defined in: [src/decorators/mixin.decorator.ts:22](https://github.com/robbiemu/handy-typescript/blob/936fff6/src/decorators/mixin.decorator.ts#L22)
