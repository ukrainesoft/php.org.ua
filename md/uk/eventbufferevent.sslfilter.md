- [« EventBufferEvent::sslError](eventbufferevent.sslerror.md)
- [EventBufferEvent::sslGetCipherInfo
»](eventbufferevent.sslgetcipherinfo.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Створює нову подію буфера SSL для надсилання своїх даних через
інша подія буфера

# EventBufferEvent::sslFilter

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::sslFilter — Створює нову подію буфера SSL для
надсилання своїх даних через іншу подію буфера

### Опис

public static **EventBufferEvent::sslFilter**(
[EventBase](class.eventbase.md) `$base` ,
[EventBufferEvent](class.eventbufferevent.md) `$underlying`,
[EventSslContext](class.eventsslcontext.md) `$ctx` ,
int `$state` ,
int `$options` u003d 0
): [EventBufferEvent](class.eventbufferevent.md)

Створює нову подію буфера SSL для надсилання даних через інше
подія буфера

> **Примітка**:
>
> Функція доступна лише в тому випадку, якщо `Event` скомпільовано з
> підтримкою OpenSSL.

### Список параметрів

`base`
Пов'язана основа подій.

`underlying`
Подія буфера сокету використовувати для цього SSL.

`ctx`
Об'єкт класу [EventSslContext](class.eventsslcontext.md).

`state`
Поточний стан SSL-з'єднання: **`EventBufferEvent::SSL_OPEN`** ,
**`EventBufferEvent::SSL_ACCEPTING`** або
**`EventBufferEvent::SSL_CONNECTING`** .

`options`
Один або більше параметрів буфера.

### Значення, що повертаються

Повертає новий SSL [EventBufferEvent](class.eventbufferevent.md)
об'єкт.

### Приклади

**Приклад #1 Простий SMTP-сервер**



### Дивіться також

- [EventBufferEvent::sslSocket()](eventbufferevent.sslsocket.md) -
Створює нову буферну подію SSL для надсилання своїх даних через
SSL у сокет
