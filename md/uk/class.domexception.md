- [«
DOMEntityReference::\_\_construct](domentityreference.construct.md)
- [DOMImplementation »](class.domimplementation.md)

- [PHP Manual](index.md)
- [DOM](book.dom.md)
- Клас DOMException

# Клас DOMException

(PHP 5, PHP 7, PHP 8)

## Вступ

Операції DOM за певних обставин викидають винятки,
наприклад, коли виконання операції неможливе зі зрозумілих причин.

Дивіться також [Виключення](language.exceptions.md).

## Огляд класів

final class **DOMException** extends [Exception](class.exception.md) {

/\* Властивості \*/

public int `$code`;

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

## Властивості

`code`
Ціло число, що вказує тип помилки, що відбулася
