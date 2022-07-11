- [«UnhandledMatchError](class.unhandledmatcherror.md)
- [Вбудовані інтерфейси та класи »](reserved.interfaces.md)

- [PHP Manual](index.md)
- [Предвизначені винятки](reserved.exceptions.md)
- FiberError

# FiberError

(PHP 8 \>u003d 8.1.0)

## Вступ

**FiberError** викидає, якщо в об'єкті [Fiber](class.fiber.md)
виконується неприпустима операція.

## Огляд класів

final class **FiberError** extends [Error](class.error.md) {

/\* Наслідувані властивості \*/

protected string `$message` u003d "";

private string `$string` u003d "";

protected int `$code`;

protected string `$file` u003d "";

protected int `$line`;

private array `$trace` u003d \[\];

private ?[Throwable](class.throwable.md) `$previous` u003d null;

/\* Методи \*/

/\* Наслідувані методи \*/

final public [Error::getMessage](error.getmessage.md)(): string

final public [Error::getPrevious](error.getprevious.md)():
?[Throwable](class.throwable.md)

final public [Error::getCode](error.getcode.md)(): int

final public [Error::getFile](error.getfile.md)(): string

final public [Error::getLine](error.getline.md)(): int

final public [Error::getTrace](error.gettrace.md)(): array

final public [Error::getTraceAsString](error.gettraceasstring.md)():
string

public [Error::\_\_toString](error.tostring.md)(): string

private [Error::\_\_clone](error.clone.md)(): void

}
