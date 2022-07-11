- [«EventHttpRequest::free](eventhttprequest.free.md)
- [EventHttpRequest::getCommand »](eventhttprequest.getcommand.md)

- [PHP Manual](index.md)
- [EventHttpRequest](class.eventhttprequest.md)
- Повертає об'єкт EventBufferEvent

# EventHttpRequest::getBufferEvent

(PECL event \>u003d 1.8.0)

EventHttpRequest::getBufferEvent — Повертає об'єкт EventBufferEvent

### Опис

public
[EventHttpRequest::closeConnection](eventhttprequest.closeconnection.md)():
[EventBufferEvent](class.eventbufferevent.md)

Повертає об'єкт [EventBufferEvent](class.eventbufferevent.md),
що представляє буферну подію, що використовує з'єднання.

**Увага**

Лічильник посилань об'єкта, що повертається, буде збільшений на одиницю для
захисту внутрішніх структур від передчасного руйнування під час виклику
методу з callback-функції користувача. Таким чином, об'єкт
[EventBufferEvent](class.eventbufferevent.md) має бути явно
звільнений за допомогою методу
[EventBufferEvent::free()](eventbufferevent.free.md). В протилежному
У разі буде витік пам'яті.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт [EventBufferEvent](class.eventbufferevent.md).

### Дивіться також

- [EventHttpRequest::getConnection()](eventhttprequest.getconnection.md) -
Повертає об'єкт EventHttpConnection
