- [« OverflowException](class.overflowexception.md)
- [RuntimeException »](class.runtimeexception.md)

- [PHP Manual](index.md)
- [Виключення](spl.exceptions.md)
- Клас RangeException

# Клас RangeException

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Викидається виняток, щоб вказати помилки діапазону під час
виконання програми. Як правило, це означає, що була арифметична
помилка, відмінна від недоповнення/переповнення. Це версія
[DomainException](class.domainexception.md), призначена для
часу виконання.

## Огляд класів

class **RangeException** extends
[RuntimeException](class.runtimeexception.md) {

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
