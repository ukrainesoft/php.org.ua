- [«
EventBufferEvent::sslGetCipherVersion](eventbufferevent.sslgetcipherversion.md)
- [EventBufferEvent::sslRenegotiate
»](eventbufferevent.sslrenegotiate.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Повертає ім'я протоколу, який використовується для поточного з'єднання SSL

# EventBufferEvent::sslGetProtocol

(PECL event \>u003d 1.10.0)

EventBufferEvent::sslGetProtocol — Повертає ім'я протоколу,
використовуваного для поточного з'єднання SSL

### Опис

public **EventBufferEvent::sslGetProtocol**(): string

Повертає ім'я протоколу, який використовується для поточного з'єднання SSL.

> **Примітка**:
>
> Функція доступна, тільки якщо `Event` скомпільовано з підтримкою
> OpenSSL.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я протоколу, який використовується для поточного з'єднання SSL.
