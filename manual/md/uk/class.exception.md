- [«Зумовлені винятки](reserved.exceptions.md)
- [Exception::\_\_construct »](exception.construct.md)

- [PHP Manual](index.md)
- [Предвизначені винятки](reserved.exceptions.md)
- Exception

# Exception

(PHP 5, PHP 7, PHP 8)

## Вступ

**Exception** — це базовий клас для всіх винятків користувача.

## Огляд класів

class **Exception** implements [Throwable](class.throwable.md) {

/\* Властивості \*/

protected string `$message` u003d "";

private string `$string` u003d "";

protected int `$code`;

protected string `$file` u003d "";

protected int `$line`;

private array `$trace` u003d \[\];

private ?[Throwable](class.throwable.md) `$previous` u003d null;

/\* Методи \*/

public [\_\_construct](exception.construct.md)(string `$message` u003d "",
int `$code` u003d 0, ?[Throwable](class.throwable.md) `$previous` u003d
**`null`**)

final public [getMessage](exception.getmessage.md)(): string

final public [getPrevious](exception.getprevious.md)():
?[Throwable](class.throwable.md)

final public [getCode](exception.getcode.md)(): int

final public [getFile](exception.getfile.md)(): string

final public [getLine](exception.getline.md)(): int

final public [getTrace](exception.gettrace.md)(): array

final public [getTraceAsString](exception.gettraceasstring.md)():
string

public [\_\_toString](exception.tostring.md)(): string

private [\_\_clone](exception.clone.md)(): void

}

## Властивості

`message`
Текст виключення

`code`
Код виключення

`file`
Ім'я файлу, в якому було викликано виняток

`line`
Номер рядка, в якому був викликаний виняток

`previous`
Раніше викинутий виняток

`string`
Строкове уявлення трасування стека

`trace`
Трасування стека у вигляді масиву

## Зміст

- [Exception::\_\_construct](exception.construct.md) - Створити
виняток
- [Exception::getMessage](exception.getmessage.md) — Отримує
повідомлення виключення
- [Exception::getPrevious](exception.getprevious.md) - Повертає
попередній об'єкт, що реалізує Throwable
- [Exception::getCode](exception.getcode.md) — Отримує код
винятки
- [Exception::getFile](exception.getfile.md) — Отримує файл,
якому виник виняток
- [Exception::getLine](exception.getline.md) — Отримує рядок,
якої виник виняток
- [Exception::getTrace](exception.gettrace.md) — Отримує
трасування стеку
- [Exception::getTraceAsString](exception.gettraceasstring.md) -
Отримує трасування стека у вигляді рядка
- [Exception::\_\_toString](exception.tostring.md) - Строкове
подання винятку
- [Exception::\_\_clone](exception.clone.md) - Клонувати
виняток
