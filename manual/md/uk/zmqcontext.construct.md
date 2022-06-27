- [«ZMQContext](class.zmqcontext.md)
- [ZMQContext::getOpt »](zmqcontext.getopt.md)

- [PHP Manual](index.md)
- [ZMQContext](class.zmqcontext.md)
- Конструктор ZMQContext

# ZMQContext::\_\_construct

(PECL zmq \>u003d 0.5.0)

ZMQContext::\_\_construct - Конструктор ZMQContext

### Опис

public **ZMQContext::\_\_construct**(int `$io_threads` u003d 1, bool
`$is_persistent` u003d **`true`**)

Створює новий контекст ZMQ. Контекст використовується для ініціалізації
сокетів. Для ініціалізації постійних сокетів потрібний постійний
контекст.

### Список параметрів

`io_threads`
Число потоків введення/виводу у контексті.

`is_persistent`
Визначає, чи контекст буде постійним. Постійний контекст
зберігається протягом безлічі запитів і вимагається для постійних
з'єднань.

### Помилки

Викидає **ZMQContextException** у разі збою ініціалізації
контексту.

### Приклади

**Приклад #1 Приклад використання **ZMQContext()****

Створимо новий контекст і створимо сокети з нього

` <?php/* Створюємо новий контекст */$context u003d new ZMQContext();/* Створюємо новий сокет */$socket u003d $context->getSocket(ZMQ::SOCKET_REQ, '' сокетом */$socket->connect("tcp://example.com:1234");/* Посилаємо запрос */$socket->send("Hello there");/* Отримуємо відповідь */$message u003d $ socket->recv();?> `
