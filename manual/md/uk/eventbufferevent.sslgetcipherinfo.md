- [« EventBufferEvent::sslFilter](eventbufferevent.sslfilter.md)
- [EventBufferEvent::sslGetCipherName
»](eventbufferevent.sslgetciphername.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Повертає текстовий опис шифру

# EventBufferEvent::sslGetCipherInfo

(PECL event \>u003d 1.10.0)

EventBufferEvent::sslGetCipherInfo — Повертає текстовий опис шифру

### Опис

public **EventBufferEvent::sslGetCipherInfo**(): string

Отримує опис поточного шифру за допомогою SSL API
`SSL_CIPHER_description` (дивіться довідкову сторінку
*SSL_CIPHER_get_name(3)*).

> **Примітка**:
>
> Функція доступна, тільки якщо `Event` скомпільовано з підтримкою
> OpenSSL.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає текстовий опис шифру у разі успішного виконання або
**`false`** у разі виникнення помилки.
