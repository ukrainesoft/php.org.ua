- [«EventSslContext::\_\_construct](eventsslcontext.construct.md)
- [EventUtil::\_\_construct »](eventutil.construct.md)

- [PHP Manual](index.md)
- [Event] (book.event.md)
- Клас EventUtil

# Клас EventUtil

(PECL event \>u003d 1.5.0)

## Вступ

**EventUtil** - клас синглтон, що містить допоміжні методи та
константи.

## Огляд класів

final class **EventUtil** {

/\* Константи \*/

const int `AF_INET` u003d 2;

const int `AF_INET6` u003d 10;

const int `AF_UNSPEC` u003d 0;

const int `LIBEVENT_VERSION_NUMBER` u003d 33559808;

const int `SO_DEBUG` u003d 1;

const int `SO_REUSEADDR` u003d 2;

const int `SO_KEEPALIVE` u003d 9;

const int `SO_DONTROUTE` u003d 5;

const int `SO_LINGER` u003d 13;

const int `SO_BROADCAST` u003d 6;

const int `SO_OOBINLINE` u003d 10;

const int `SO_SNDBUF` u003d 7;

const int `SO_RCVBUF` u003d 8;

const int `SO_SNDLOWAT` u003d 19;

const int `SO_RCVLOWAT` u003d 18;

const int `SO_SNDTIMEO` u003d 21;

const int `SO_RCVTIMEO` u003d 20;

const int `SO_TYPE` u003d 3;

const int `SO_ERROR` u003d 4;

const int `SOL_SOCKET` u003d 1;

const int `SOL_TCP` u003d 6;

const int `SOL_UDP` u003d 17;

const int `IPPROTO_IP` u003d 0;

const int `IPPROTO_IPV6` u003d 41;

/\* Методи \*/

abstract public [\_\_construct](eventutil.construct.md)()

public static [getLastSocketErrno](eventutil.getlastsocketerrno.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$socket` u003d **`null`** ): int

public static [getLastSocketError](eventutil.getlastsocketerror.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$socket` u003d ?): string

public static [getSocketFd](eventutil.getsocketfd.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$socket` ): int

public static [getSocketName](eventutil.getsocketname.md)(
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$socket` , string `&$address` ,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$port` u003d ?): bool

public static [setSocketOption](eventutil.setsocketoption.md)(

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$socket`,
int `$level`,
int `$optname` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$optval`
): bool

public static [sslRandPoll](eventutil.sslrandpoll.md)(): void

}

## Зумовлені константи

**`EventUtil::AF_INET`**
Сімейство IPv4 адрес

**`EventUtil::AF_INET6`**
Сімейство IPv6 адрес

**`EventUtil::AF_UNSPEC`**
Невизначена родина IP-адрес

**`EventUtil::SO_DEBUG`**
Опція сокету. Дозволяє налагодити сокет. Допустимо тільки для процесів з
можливістю `CAP_NET_ADMIN` або для користувача з ефективним
ідентифікатором **`0`**. (Додано до event-1.6.0.)

**`EventUtil::SO_REUSEADDR`**
Опція сокету. Вказує, що правила, які використовуються під час перевірки адрес,
задаються у виклику `bind(2)` дозволяють перевикористовувати локальні
адреси. Дивіться посібник з `socket(7)`. (Додано до event-1.6.0.)

**`EventUtil::SO_KEEPALIVE`**
Опція сокету. Дозволяє надсилати повідомлення keep-alive на сокетах,
орієнтованих на з'єднання. Очікується цілий логічний прапор.
Дивіться посібник з `socket(7)`. (Додано до event-1.6.0.)

**`EventUtil::SO_DONTROUTE`**
Опція сокету. Дивіться посібник з `socket(7)`. (Додано в
event-1.6.0.)

**`EventUtil::SO_LINGER`**
Опція сокету. Якщо дозволено, то виклики `close(2)` або `shutdown(2)` не
будуть завершені, доки всі повідомлення в черзі для сокету не будуть
успішно відправлені або поки не буде перевищено час очікування. В
в іншому випадку виклик негайно завершується, а закриття виконується в
фоновий режим. Дивіться посібник з `socket(7)`. (Додано в
event-1.6.0.)

**`EventUtil::SO_BROADCAST`**
Опція сокету. Вказує, чи дозволено передачу широкомовних
повідомлень. Дивіться посібник з `socket(7)`. (Додано в
event-1.6.0.)

**`EventUtil::SO_OOBINLINE`**
Опція сокету. Дивіться посібник з `socket(7)`. (Додано в
event-1.6.0.)

**`EventUtil::SO_SNDBUF`**
Опція сокету. Дивіться посібник з `socket(7)`. (Додано в
event-1.6.0.)

**`EventUtil::SO_RCVBUF`**
Опція сокету. Дивіться посібник з `socket(7)`. (Додано в
event-1.6.0.)

**`EventUtil::SO_SNDLOWAT`**
Опція сокету. Дивіться посібник з `socket(7)`. (Додано в
event-1.6.0.)

**`EventUtil::SO_RCVLOWAT`**
Опція сокету. Дивіться посібник з `socket(7)`. (Додано в
event-1.6.0.)

**`EventUtil::SO_SNDTIMEO`**
Опція сокету. Дивіться посібник з `socket(7)`. (Додано в
event-1.6.0.)

**`EventUtil::SO_RCVTIMEO`**
Опція сокету. Дивіться посібник з `socket(7)`. (Додано в
event-1.6.0.)

**`EventUtil::SO_TYPE`**
Опція сокету. Дивіться посібник з `socket(7)`. (Додано в
event-1.6.0.)

**`EventUtil::SO_ERROR`**
Опція сокету. Дивіться посібник з `socket(7)`. (Додано в
event-1.6.0.)

**`EventUtil::SOL_SOCKET`**
Опція сокету рівня. Дивіться посібник з `socket(7)`. (Додано в
event-1.6.0.)

**`EventUtil::SOL_TCP`**
Опція сокету рівня. Дивіться посібник з `socket(7)`. (Додано в
event-1.6.0.)

**`EventUtil::SOL_UDP`**
Опція сокету рівня. Дивіться посібник з `socket(7)`. (Додано в
event-1.6.0.)

**`EventUtil::IPPROTO_IP`**
Дивіться посібник з `socket(7)`. (Додано до event-1.6.0.)

**`EventUtil::IPPROTO_IPV6`**
Дивіться посібник з `socket(7)`. (Додано до event-1.6.0.)

**`EventUtil::LIBEVENT_VERSION_NUMBER`**
Номер версії libevent з якою компілювався модуль.

## Зміст

- [EventUtil::\_\_construct](eventutil.construct.md) - Абстрактний
конструктор
- [EventUtil::getLastSocketErrno](eventutil.getlastsocketerrno.md) -
Отримати номер останньої помилки сокету, що виникла
- [EventUtil::getLastSocketError](eventutil.getlastsocketerror.md) -
Отримати останню помилку сокету, що виникла
- [EventUtil::getSocketFd](eventutil.getsocketfd.md) — Отримати
числовий файловий дескриптор сокету чи потоку
- [EventUtil::getSocketName](eventutil.getsocketname.md) — Отримати
поточна адреса, до якої прив'язаний сокет
- [EventUtil::setSocketOption](eventutil.setsocketoption.md) -
Встановити опції сокету
- [EventUtil::sslRandPoll](eventutil.sslrandpoll.md) — Згенерувати
ентропію за допомогою RAND_poll() із OpenSSL
