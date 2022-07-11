- [« LuaSandboxErrorError](class.luasandboxerrorerror.md)
- [LuaSandboxMemoryError »](class.luasandboxmemoryerror.md)

- [PHP Manual](index.md)
- [LuaSandbox](book.luasandbox.md)
- Клас LuaSandboxFatalError

# Клас LuaSandboxFatalError

(PECL luasandbox \>u003d 1.0.0)

## Вступ

Невідловлювані винятки LuaSandbox.

Їх не можна відловити всередині Lua за допомогою `pcall()` або `xpcall()`.

## Огляд класів

class **LuaSandboxFatalError** extends
[LuaSandboxError](class.luasandboxerror.md) {

/\* Наслідувані властивості \*/

protected string `$message` u003d "";

private string `$string` u003d "";

protected int `$code`;

protected string `$file` u003d "";

protected int `$line`;

private array `$trace` u003d \[\];

private ?[Throwable](class.throwable.md) `$previous` u003d null;

/\* Наслідувані методи \*/

final public [Exception::getMessage](exception.getmessage.md)():
string

final public [Exception::getPrevious](exception.getprevious.md)():
?[Throwable](class.throwable.md)

final public [Exception::getCode](exception.getcode.md)(): int

final public [Exception::getFile](exception.getfile.md)(): string

final public [Exception::getLine](exception.getline.md)(): int

final public [Exception::getTrace](exception.gettrace.md)(): array

final public
[Exception::getTraceAsString](exception.gettraceasstring.md)(): string

public [Exception::\_\_toString](exception.tostring.md)(): string

private [Exception::\_\_clone](exception.clone.md)(): void

}
