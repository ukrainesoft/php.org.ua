- [« EventBufferEvent::free](eventbufferevent.free.md)
- [EventBufferEvent::getEnabled »](eventbufferevent.getenabled.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Повертає рядок, що описує останню невдалу спробу пошуку
DNS

# EventBufferEvent::getDnsErrorString

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::getDnsErrorString — Повертає рядок, що описує
останню невдалу спробу пошуку DNS

### Опис

public **EventBufferEvent::getDnsErrorString**(): string

Повертає рядок, що описує останню невдалу спробу пошуку DNS,
зроблену
[EventBufferEvent::connectHost()](eventbufferevent.connecthost.md),
або порожній рядок, якщо помилка DNS не виявлена.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок, що описує помилку пошуку DNS або порожній рядок,
якщо помилки не сталося.

### Дивіться також

- [EventBufferEvent::connectHost()](eventbufferevent.connecthost.md) -
Підключається на ім'я хоста з можливістю асинхронного дозволу
DNS
