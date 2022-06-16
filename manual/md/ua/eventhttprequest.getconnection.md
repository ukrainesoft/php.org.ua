- [«EventHttpRequest::getCommand](eventhttprequest.getcommand.md)
- [EventHttpRequest::getHost »](eventhttprequest.gethost.md)

- [PHP Manual](index.md)
- [EventHttpRequest](class.eventhttprequest.md)
- Повертає об'єкт EventHttpConnection

# EventHttpRequest::getConnection

(PECL event \>u003d 1.8.0)

EventHttpRequest::getConnection — Повертає об'єкт EventHttpConnection

### Опис

public
[EventHttpRequest::closeConnection](eventhttprequest.closeconnection.md)():
[EventHttpConnection](class.eventhttpconnection.md)

Повертає об'єкт [EventHttpConnection](class.eventhttpconnection.md),
представляє HTTP-з'єднання, пов'язане із запитом.

**Увага**

Libevent API дозволяє об'єктам HTTP-запиту не прив'язуватись ні до
якому HTTP-з'єднання. Тому ми не можемо однозначно зв'язати
[EventHttpRequest](class.eventhttprequest.md) з
[EventHttpConnection](class.eventhttpconnection.md). Таким чином, ми
створюємо об'єкт [EventHttpConnection](class.eventhttpconnection.md) на
літа. Не маючи інформації про базу подій, базу DNS та callback-функції
при закритті з'єднання ми просто залишаємо ці поля незаповненими.

Метод **EventHttpRequest::getConnection()** зазвичай корисний, коли нам
Необхідно продати callback-функцію, при закритті з'єднання. Дивіться
[EventHttpConnection::setCloseCallback()](eventhttpconnection.setclosecallback.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт [EventHttpConnection](class.eventhttpconnection.md).

### Дивіться також

- [EventHttpConnection::setCloseCallback()](eventhttpconnection.setclosecallback.md) -
Встановлює callback-функцію при закритті з'єднання
- [EventHttpRequest::getBufferEvent()](eventhttprequest.getbufferevent.md) -
Повертає об'єкт EventBufferEvent
