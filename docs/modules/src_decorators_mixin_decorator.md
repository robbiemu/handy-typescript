[handy-typescript](../README.md) / [Modules](../modules.md) / src/decorators/mixin.decorator

# Module: src/decorators/mixin.decorator

## Table of contents

### Functions

- [Mixin](src_decorators_mixin_decorator.md#mixin)

## Functions

### Mixin

▸ **Mixin**(...`classes`: Function[]): ClassDecorator

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...classes` | Function[] | classes to mix in to the decorated class |

**Returns:** ClassDecorator

Defined in: [src/decorators/mixin.decorator.ts:21](https://github.com/robbiemu/handy-typescript/blob/59044bb/src/decorators/mixin.decorator.ts#L21)
