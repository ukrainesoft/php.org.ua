- [«
EventBufferEvent::setWatermark](eventbufferevent.setwatermark.md)
- [EventBufferEvent::sslFilter »](eventbufferevent.sslfilter.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Повертає останню помилку OpenSSL, повідомлену буферною подією

# EventBufferEvent::sslError

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::sslError — Повертає останню помилку OpenSSL,
повідомлену буферній події

### Опис

public **EventBufferEvent::sslError**(): string

Повертає останню помилку OpenSSL, повідомлену буферною подією.

> **Примітка**:
>
> Функція доступна, тільки якщо `Event` скомпільовано з підтримкою
> OpenSSL.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок помилки OpenSSL, про яку повідомлялося у буферному
події, або **`false`**, якщо немає помилок для повернення.

### Приклади

**Приклад #1 Приклад використання **EventBufferEvent::sslError()****

` <?php// Эта callbac-функция вызывается, когда какое-либо событие происходит в приёмнике событий,// например, соединение закрыто или произошла ошибкаfunction ssl_event_cb($bev, $events, $ctx) {    if ($events & EventBufferEvent: :ERROR) {         // Виймаємо помилки із стека помилок SSL                              り
", $err); |      }   }    if ($events & (EventBufferEvent::EOF | EventBufferEvent::ERROR)} | |                      |

### Дивіться також

- [EventBufferEvent::sslRenegotiate()](eventbufferevent.sslrenegotiate.md) -
Повідомляє про буферну подію почати перегляд SSL
