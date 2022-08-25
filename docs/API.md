## Classes

<dl>
<dt><a href="#CompilationFailedError">CompilationFailedError</a></dt>
<dd></dd>
<dt><a href="#CompilerNotFoundError">CompilerNotFoundError</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#checkCompiler">checkCompiler()</a> ⇒ <code>Promise.&lt;{version: string}&gt;</code></dt>
<dd><p>Checks whether the Free Pascal compiler is present in the system path.</p>
</dd>
<dt><a href="#compile">compile(inputFile, outputFile)</a> ⇒ <code>Promise.&lt;{file: string}&gt;</code></dt>
<dd><p>Compiles a Pascal source file.</p>
</dd>
</dl>

<a name="CompilationFailedError"></a>

## CompilationFailedError
**Kind**: global class  
<a name="new_CompilationFailedError_new"></a>

### new CompilationFailedError(fileName)
CompilationFailedError constructor.


| Param | Type | Description |
| --- | --- | --- |
| fileName | <code>string</code> | Source file that caused the error. |

<a name="CompilerNotFoundError"></a>

## CompilerNotFoundError
**Kind**: global class  
<a name="new_CompilerNotFoundError_new"></a>

### new CompilerNotFoundError()
CompilerNotFoundError constructor.

<a name="checkCompiler"></a>

## checkCompiler() ⇒ <code>Promise.&lt;{version: string}&gt;</code>
Checks whether the Free Pascal compiler is present in the system path.

**Kind**: global function  
<a name="compile"></a>

## compile(inputFile, outputFile) ⇒ <code>Promise.&lt;{file: string}&gt;</code>
Compiles a Pascal source file.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| inputFile | <code>string</code> | Source file to compile. |
| outputFile | <code>string</code> | Output file name (or path). |

