- [«ErrorException::getSeverity](errorexception.getseverity.md)
- [Error::\_\_construct »](error.construct.md)

- [PHP Manual](index.md)
- [Предвизначені винятки](reserved.exceptions.md)
- Error

#Error

(PHP 7, PHP 8)

## Вступ

**Error** – базовий клас для всіх внутрішніх помилок PHP.

## Огляд класів

class **Error** implements [Throwable](class.throwable.md) {

/\* Властивості \*/

protected string `$message` u003d "";

private string `$string` u003d "";

protected int `$code`;

protected string `$file` u003d "";

protected int `$line`;

private array `$trace` u003d \[\];

private ?[Throwable](class.throwable.md) `$previous` u003d null;

/\* Методи \*/

public [\_\_construct](error.construct.md)(string `$message` u003d "", int
`$code` u003d 0, ?[Throwable](class.throwable.md) `$previous` u003d
**`null`**)

final public [getMessage](error.getmessage.md)(): string

final public [getPrevious](error.getprevious.md)():
?[Throwable](class.throwable.md)

final public [getCode](error.getcode.md)(): int

final public [getFile](error.getfile.md)(): string

final public [getLine](error.getline.md)(): int

final public [getTrace](error.gettrace.md)(): array

final public [getTraceAsString](error.gettraceasstring.md)(): string

public [\_\_toString](error.tostring.md)(): string

private [\_\_clone](error.clone.md)(): void

}

## Властивості

`message`
Повідомлення про помилку

`code`
Код помилки

`file`
Ім'я файлу, в якому сталася помилка

`line`
Номер рядка, в якому сталася помилка

`previous`
Раніше викинутий виняток

`string`
Строкове уявлення трасування стека

`trace`
Трасування стека у вигляді масиву

## Зміст

- [Error::\_\_construct](error.construct.md) — Створює об'єкт класу
Error
- [Error::getMessage](error.getmessage.md) — Отримує повідомлення про
помилці
- [Error::getPrevious](error.getprevious.md) - Повертає попередній
Throwable
- [Error::getCode](error.getcode.md) — Повертає код помилки
- [Error::getFile](error.getfile.md) — Отримує файл, у якому
Виникла помилка
- [Error::getLine](error.getline.md) — Отримує номер рядка в
якою сталася помилка
- [Error::getTrace](error.gettrace.md) — Отримує трасування стека
- [Error::getTraceAsString](error.gettraceasstring.md) — Отримує
трасування стека у вигляді рядка
- [Error::\_\_toString](error.tostring.md) — Строкове уявлення
помилки
- [Error::\_\_clone](error.clone.md) - Клонує помилку
