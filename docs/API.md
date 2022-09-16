pascal-utils

# pascal-utils

## Table of contents

### Classes

- [CompilationFailedError](classes/CompilationFailedError.md)
- [CompilerNotFoundError](classes/CompilerNotFoundError.md)

### Compilation Functions

- [compile](API.md#compile)

### Compiler Detection Functions

- [checkCompiler](API.md#checkcompiler)

## Compilation Functions

### compile

▸ **compile**(`inputFile`, `outputFile`): `Promise`<{ `file`: `string`  }\>

Compiles a Pascal source file.

**`Throws`**

[CompilationFailedError](classes/CompilationFailedError.md) if compilation fails.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inputFile` | `string` | Source file to compile. |
| `outputFile` | `string` | Output file name (or path). |

#### Returns

`Promise`<{ `file`: `string`  }\>

#### Defined in

[src/compile.ts:12](https://github.com/synthetic-borealis/pascal-utils.js/blob/9699703/src/compile.ts#L12)

___

## Compiler Detection Functions

### checkCompiler

▸ **checkCompiler**(`compilerName?`): `Promise`<{ `version`: `string`  }\>

Checks whether the Free Pascal compiler is present in the system path.

**`Throws`**

[CompilerNotFoundError](classes/CompilerNotFoundError.md) if no compiler is found.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `compilerName` | `string` | `'fpc'` | The name of the compiler executable. |

#### Returns

`Promise`<{ `version`: `string`  }\>

#### Defined in

[src/checkCompiler.ts:12](https://github.com/synthetic-borealis/pascal-utils.js/blob/9699703/src/checkCompiler.ts#L12)
