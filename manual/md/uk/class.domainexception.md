- [« BadMethodCallException](class.badmethodcallexception.md)
- [InvalidArgumentException »](class.invalidargumentexception.md)

- [PHP Manual](index.md)
- [Виключення](spl.exceptions.md)
- Клас DomainException

# Клас DomainException

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Створюється виняток, якщо значення не відповідає певному
допустимої області даних.

## Огляд класів

class **DomainException** extends
[LogicException](class.logicexception.md) {

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
