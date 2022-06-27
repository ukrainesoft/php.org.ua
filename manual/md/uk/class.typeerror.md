- [«ParseError](class.parseerror.md)
- [ValueError »](class.valueerror.md)

- [PHP Manual](index.md)
- [Предвизначені винятки](reserved.exceptions.md)
- TypeError

#TypeError

(PHP 7, PHP 8)

## Вступ

Виняток **TypeError** може бути викинуто, якщо:

- Значення, яке встановлюється для якості класу, не відповідає
відповідного оголошеного типу якості.
- Тип аргументу, переданого функції, не відповідає типу,
оголошеному функції для цього аргументу.
- Тип поверненого функцією значення не відповідає типу повернення,
оголошеному у функції.

## Огляд класів

class **TypeError** extends [Error](class.error.md) {

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

## Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------------------------|
| 7.1.0 | Виняток **TypeError** більше не викидається, коли у вбудовану PHP-функцію в режимі strict type передається неприпустима кількість аргументів. Натомість викидається [ArgumentCountError](class.argumentcounterror.md). |
