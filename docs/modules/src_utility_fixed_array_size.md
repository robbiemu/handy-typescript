[handy-typescript](../README.md) / [Modules](../modules.md) / src/utility/fixed-array-size

# Module: src/utility/fixed-array-size

## Table of contents

### Type aliases

- [FixedSizeArray](src_utility_fixed_array_size.md#fixedsizearray)

## Type aliases

### FixedSizeArray

Ƭ **FixedSizeArray**<N, T, M\>: { readonly[k in M]: any} & { `length`: N  } & *ReadonlyArray*<T\>

simple fixed-size array type for typescript

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `N` | *number* | - |
| `T` | - | - |
| `M` | *string* | ``"0"`` |

Defined in: [src/utility/fixed-array-size.ts:5](https://github.com/robbiemu/handy-typescript/blob/af2e72e/src/utility/fixed-array-size.ts#L5)
