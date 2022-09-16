[pascal-utils](../API.md) / CompilationFailedError

# Class: CompilationFailedError

## Hierarchy

- `Error`

  ↳ **`CompilationFailedError`**

## Table of contents

### Constructors

- [constructor](CompilationFailedError.md#constructor)

### Properties

- [message](CompilationFailedError.md#message)
- [name](CompilationFailedError.md#name)
- [stack](CompilationFailedError.md#stack)
- [prepareStackTrace](CompilationFailedError.md#preparestacktrace)
- [stackTraceLimit](CompilationFailedError.md#stacktracelimit)

### Methods

- [captureStackTrace](CompilationFailedError.md#capturestacktrace)

## Constructors

### constructor

• **new CompilationFailedError**(`fileName`)

CompilationFailedError constructor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fileName` | `string` | Source file in which the error occurred. |

#### Overrides

Error.constructor

#### Defined in

[src/errors/compilationFailedError.ts:6](https://github.com/synthetic-borealis/pascal-utils.js/blob/9699703/src/errors/compilationFailedError.ts#L6)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1041

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1040

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1042

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
