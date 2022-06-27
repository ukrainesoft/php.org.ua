- [«
EventBufferEvent::sslGetCipherInfo](eventbufferevent.sslgetcipherinfo.md)
- [EventBufferEvent::sslGetCipherVersion
»](eventbufferevent.sslgetcipherversion.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Повертає поточне ім'я шифру з'єднання SSL

# EventBufferEvent::sslGetCipherName

(PECL event \>u003d 1.10.0)

EventBufferEvent::sslGetCipherName — Повертає поточне ім'я шифру
з'єднання SSL

### Опис

public **EventBufferEvent::sslGetCipherName**(): string

Отримує ім'я шифру, який використовує поточне з'єднання SSL.

> **Примітка**:
>
> Функція доступна, тільки якщо `Event` скомпільовано з підтримкою
> OpenSSL.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає поточне ім'я шифру SSL-з'єднання або **`false`** у разі
виникнення помилки.
