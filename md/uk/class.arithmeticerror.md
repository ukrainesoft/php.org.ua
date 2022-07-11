- [« ArgumentCountError](class.argumentcounterror.md)
- [AssertionError »](class.assertionerror.md)

- [PHP Manual](index.md)
- [Предвизначені винятки](reserved.exceptions.md)
- ArithmeticError

# ArithmeticError

(PHP 7, PHP 8)

## Вступ

**ArithmeticError** викидається, коли виникає помилка під час виконання
математичних операцій. Такі помилки можна спровокувати побітовим.
зсувом на негативне значення або викликом функції
[intdiv()](function.intdiv.md), що наводить значення, що не входить до
допустимий інтервал цілих чисел (int).

## Огляд класів

class **ArithmeticError** extends [Error](class.error.md) {

/\* Наслідувані властивості \*/

protected string `$message` u003d "";

private string `$string` u003d "";

protected int `$code`;

protected string `$file` u003d "";

protected int `$line`;

private array `$trace` u003d \[\];

private ?[Throwable](class.throwable.md) `$previous` u003d null;

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
