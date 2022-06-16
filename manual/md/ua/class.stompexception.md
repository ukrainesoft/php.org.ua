- [« StompFrame::\_\_construct](stompframe.construct.md)
- [StompException::getDetails »](stomp.getdetails.md)

- [PHP Manual](index.md)
- [Stomp](book.stomp.md)
- Клас StompException

# Клас StompException

(PECL stomp \>u003d 0.1.0)

## Вступ

Помилка, викликана модулем Stomp. Дивіться
[Виключення](language.exceptions.md) для отримання докладної
інформації про винятки у PHP.

## Огляд класів

class **StompException** extends [Exception](class.exception.md) {

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

/\* Методи \*/

public [getDetails](stomp.getdetails.md)(): string

}

## Зміст

- [StompException::getDetails](stomp.getdetails.md) — Повертає
відомості про виключення
