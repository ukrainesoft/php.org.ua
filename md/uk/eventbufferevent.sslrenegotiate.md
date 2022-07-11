- [«
EventBufferEvent::sslGetProtocol](eventbufferevent.sslgetprotocol.md)
- [EventBufferEvent::sslSocket »](eventbufferevent.sslsocket.md)

- [PHP Manual](index.md)
- [EventBufferEvent](class.eventbufferevent.md)
- Повідомляє про буферну подію почати перегляд SSL

# EventBufferEvent::sslRenegotiate

(PECL event \>u003d 1.2.6-beta)

EventBufferEvent::sslRenegotiate — Повідомляє буферну подію розпочати
перегляд SSL

### Опис

public **EventBufferEvent::sslRenegotiate**(): void

Повідомляє про буферну подію розпочати перегляд SSL.

**Увага**

Виклик цієї функції перегляне SSL та викличе відповідні
callback-функції буферної події. Це найскладніша тема; цього, як
правило, слід уникати, якщо ви дійсно знаєте, що
робите, тим більше, що у багатьох версіях SSL були відомі проблеми
безпеки, пов'язані з переглядом.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.
