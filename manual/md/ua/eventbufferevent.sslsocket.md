- [«
EventBufferEvent::sslRenegotiate](eventbufferevent.sslrenegotiate.md)
- [EventBufferEvent::write »](eventbufferevent.write.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Створює нову буферну подію SSL для надсилання своїх даних через
SSL у сокет

# EventBufferEvent::sslSocket

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::sslSocket — Створює нову буферну подію SSL для
надсилання своїх даних через SSL в сокет

### Опис

public static **EventBufferEvent::sslSocket**(
[EventBase](class.eventbase.md) `$base` ,

[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$socket`,
[EventSslContext](class.eventsslcontext.md) `$ctx` ,
int `$state` ,
int `$options` u003d ?
): [EventBufferEvent](class.eventbufferevent.md)

Створює нову буферну подію SSL для надсилання своїх даних через SSL
сокет.

### Список параметрів

`base`
Пов'язана основа подій.

`socket`
Сокет для використання для SSL. Може бути ресурсом потоку або
сокету, числовим дескриптором файлу або **`null`**. Якщо `socket` дорівнює
**`null`**, передбачається, що файловий дескриптор для сокету буде
призначений пізніше, наприклад, за допомогою методу
[EventBufferEvent::connectHost()](eventbufferevent.connecthost.md).

`ctx`
Об'єкт класу [EventSslContext](class.eventsslcontext.md).

`state`
Поточний стан з'єднання SSL: **`EventBufferEvent::SSL_OPEN`**,
**`EventBufferEvent::SSL_ACCEPTING`** або
**`EventBufferEvent::SSL_CONNECTING`**.

`options`
Настройки буферної події.

### Значення, що повертаються

Повертає об'єкт [EventBufferEvent](class.eventbufferevent.md).

### Дивіться також

- [EventBufferEvent::sslFilter()](eventbufferevent.sslfilter.md) -
Створює нову подію буфера SSL для надсилання даних через
інша подія буфера
