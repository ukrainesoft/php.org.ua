- [«
EventHttpRequest::sendReplyStart](eventhttprequest.sendreplystart.md)
- [EventListener::\_\_construct »](eventlistener.construct.md)

- [PHP Manual](index.md)
- [Event] (book.event.md)
- Клас EventListener

# Клас EventListener

(PECL event \>u003d 1.5.0)

## Вступ

Представляє слухач з'єднання.

## Огляд класів

final class **EventListener** {

/\* Константи \*/

const int `OPT_LEAVE_SOCKETS_BLOCKING` u003d 1;

const int `OPT_CLOSE_ON_FREE` u003d 2;

const int `OPT_CLOSE_ON_EXEC` u003d 4;

const int `OPT_REUSEABLE` u003d 8;

const int `OPT_THREADSAFE` u003d 16;

/\* Властивості \*/

public readonly int `$fd`;

/\* Методи \*/

public [\_\_construct](eventlistener.construct.md)(
[EventBase](class.eventbase.md) `$base` ,
[callable](language.types.callable.md) `$cb` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$data` ,
int `$flags` ,
int `$backlog`,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$target`
)

public [disable](eventlistener.disable.md)(): bool

public [enable](eventlistener.enable.md)(): bool

public [getBase](eventlistener.getbase.md)(): void

public static [getSocketName](eventlistener.getsocketname.md)( string
`&$address` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$port` u003d ?): bool

public [setCallback](eventlistener.setcallback.md)(
[callable](language.types.callable.md) `$cb` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$arg` u003d **`null`** ): void

public [setErrorCallback](eventlistener.seterrorcallback.md)( string
`$cb` ): void

}

## Властивості

`fd`
Числовий файловий дескриптор для сокету нижче. (Додано в
`event-1.6.0`.)

## Зумовлені константи

**`EventListener::OPT_LEAVE_SOCKETS_BLOCKING`**
за замовчуванням, Libevent перемикає файловий дескриптор нижче або
сокет у неблокуючий режим. Цей прапор повідомляє Libevent, що слід
залишити їх у блокувальному режимі.

**`EventListener::OPT_CLOSE_ON_FREE`**
Якщо цей прапор встановлений, слухач з'єднання закриє сокет.
об'єкт **EventListener** буде знищено.

**`EventListener::OPT_CLOSE_ON_EXEC`**
Якщо цей прапорець встановлено, слухач з'єднання встановить прапорець
close-on-exec на сокет. Дивіться документацію по `fcntl` та
**`FD_CLOEXEC`** для вашої платформи.

**`EventListener::OPT_REUSEABLE`**
На деяких платформах, за замовчуванням, після закриття сокету, інші
сокети не зможуть прив'язатися до того ж порту, доки не пройде деяке
час. Цей прапор говорить Libevent помічати сокет як перевикористовуваний,
що дозволить відкривати інші сокети на тому порту після його закриття.

**`EventListener::OPT_THREADSAFE`**
Виділяє блокування для слухача, що дозволяє безпечно використовувати
його у багатопоточному варіанті.

## Зміст

- [EventListener::\_\_construct](eventlistener.construct.md) -
Створити новий слухач з'єднання, пов'язаний з базою подій
- [EventListener::disable](eventlistener.disable.md) — Вимикає
подія підключення до об'єкта слухача
- [EventListener::enable](eventlistener.enable.md) — Включає
подія підключення до об'єкта слухача
- [EventListener::getBase](eventlistener.getbase.md) - Повертає
базу подій, пов'язану зі слухачем подій
- [EventListener::getSocketName](eventlistener.getsocketname.md) -
Отримує поточну адресу, до якої прив'язаний сокет слухача
- [EventListener::setCallback](eventlistener.setcallback.md) - Мета
setCallback
- [EventListener::setErrorCallback](eventlistener.seterrorcallback.md)
- Встановлює callback-функцію помилки слухача подій
