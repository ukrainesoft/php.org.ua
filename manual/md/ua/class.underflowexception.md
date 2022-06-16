- [«RuntimeException](class.runtimeexception.md)
- [UnexpectedValueException »](class.unexpectedvalueexception.md)

- [PHP Manual](index.md)
- [Виключення](spl.exceptions.md)
- Клас UnderflowException

# Клас UnderflowException

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

## Вступ

Викидається виняток при спробі зробити неприпустиму операцію
над порожній контейнер. Наприклад, таку, як видалення елемента з
порожній контейнер.

## Огляд класів

class **UnderflowException** extends
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
