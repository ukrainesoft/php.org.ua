- [«
EventBufferEvent::sslGetCipherName](eventbufferevent.sslgetciphername.md)
- [EventBufferEvent::sslGetProtocol
»](eventbufferevent.sslgetprotocol.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Повертає версію шифру, який використовується поточним SSL-з'єднанням

# EventBufferEvent::sslGetCipherVersion

(PECL event \>u003d 1.10.0)

EventBufferEvent::sslGetCipherVersion — Повертає версію шифру,
використовуваного поточним SSL-з'єднанням

### Опис

public **EventBufferEvent::sslGetCipherVersion**(): string

Отримує версію шифру, який використовує поточне з'єднання SSL.

> **Примітка**:
>
> Функція доступна, тільки якщо `Event` скомпільовано з підтримкою
> OpenSSL.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає поточну версію шифрованого з'єднання SSL або **`false`**
у разі виникнення помилки.
