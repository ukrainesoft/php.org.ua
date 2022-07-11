- [«
IteratorAggregate::getIterator](iteratoraggregate.getiterator.md)
- [Throwable::getMessage »](throwable.getmessage.md)

- [PHP Manual](index.md)
- [Вбудовані інтерфейси та класи](reserved.interfaces.md)
- Throwable

# Throwable

(PHP 7, PHP 8)

## Вступ

**Throwable** є батьківським інтерфейсом для всіх об'єктів,
що викидаються за допомогою виразу [`throw`](language.exceptions.md),
включаючи класи [Error](class.error.md) та
[Exception](class.exception.md).

> **Примітка**:
>
> Класи PHP не можуть реалізувати інтерфейс **Throwable**.
> Натомість вони можуть успадковувати підклас
> [Exception](class.exception.md).

## Огляд інтерфейсів

interface **Throwable** extends [Stringable](class.stringable.md) {

/\* Методи \*/

public [getMessage](throwable.getmessage.md)(): string

public [getCode](throwable.getcode.md)(): int

public [getFile](throwable.getfile.md)(): string

public [getLine](throwable.getline.md)(): int

public [getTrace](throwable.gettrace.md)(): array

public [getTraceAsString](throwable.gettraceasstring.md)(): string

public [getPrevious](throwable.getprevious.md)():
?[Throwable](class.throwable.md)

abstract public [\_\_toString](throwable.tostring.md)(): string

/\* Наслідувані методи \*/

public [Stringable::\_\_toString](stringable.tostring.md)(): string

}

## Список змін

| Версія | Опис |
|--------|---------------------------------------- ---------------------------------------------|
| 8.0.0 | Клас ** Throwable ** тепер реалізує інтерфейс [Stringable] (class.stringable.md). |

## Зміст

- [Throwable::getMessage](throwable.getmessage.md) — Отримує
повідомлення помилки
- [Throwable::getCode](throwable.getcode.md) — Повертає код
винятки
- [Throwable::getFile](throwable.getfile.md) — Повертає файл,
якому викинуто виняток
- [Throwable::getLine](throwable.getline.md) — Отримує рядок
скрипта, в якій цей об'єкт був викинутий
- [Throwable::getTrace](throwable.gettrace.md) — Повертає
трасування стеку
- [Throwable::getTraceAsString](throwable.gettraceasstring.md) -
Отримує результати трасування стека у вигляді рядка
- [Throwable::getPrevious](throwable.getprevious.md) - Повертає
попередній Throwable
- [Throwable::\_\_toString](throwable.tostring.md) — Отримує
рядкове уявлення викинутого об'єкта
