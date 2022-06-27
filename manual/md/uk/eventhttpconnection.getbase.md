- [«
EventHttpConnection::\_\_construct](eventhttpconnection.construct.md)
- [EventHttpConnection::getPeer »](eventhttpconnection.getpeer.md)

- [PHP Manual](index.md)
- [EventHttpConnection](class.eventhttpconnection.md)
- Повертає базу подій, пов'язану із з'єднанням

# EventHttpConnection::getBase

(PECL event \>u003d 1.2.6-beta)

EventHttpConnection::getBase — Повертає базу подій, пов'язану з
з'єднанням

### Опис

public **EventHttpConnection::getBase**():
[EventBase](class.eventbase.md)

Повертає основу подій, пов'язану зі з'єднанням.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

У разі успішного виконання повертає об'єкт
[EventBase](class.eventbase.md), пов'язаний із з'єднанням. В протилежному
випадку – **`false`**.
