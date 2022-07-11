- [«ZMQContext::getOpt](zmqcontext.getopt.md)
- [ZMQContext::isPersistent »](zmqcontext.ispersistent.md)

- [PHP Manual](index.md)
- [ZMQContext](class.zmqcontext.md)
- Створює новий сокет

# ZMQContext::getSocket

(PECL zmq \>u003d 0.5.0)

ZMQContext::getSocket — Створює новий сокет

### Опис

public **ZMQContext::getSocket**(int `$type`, string `$persistent_id` u003d
**`null`**, [callable](language.types.callable.md) `$on_new_socket` u003d
**`null`**): [ZMQSocket](class.zmqsocket.md)

Метод створення сокету з контексту. Якщо контекст не є
постійним, то параметр `persistent_id` буде проігнорований та сокет
буде непостійним. Функція, задана в `on_new_socket`, буде викликана
тільки якщо буде створено нову структуру сокету, що лежить в основі.

### Список параметрів

`type`
Константа **`ZMQ::SOCKET_*`**, яка задає тип сокету.

`persistent_id`
Якщо заданий параметр `persistent_id`, то сокет зберігатиметься між
запитами.

`on_new_socket`
Callback-функція, яка буде викликана під час створення нової структури
сокет. Функція не буде викликана, якщо використовується постійний контекст.
Функція приймає як аргументи ZMQSocket і persistent_id.

### Значення, що повертаються

Повертає об'єкт [ZMQSocket](class.zmqsocket.md).

### Помилки

Викидає **ZMQSocketException** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ZMQContext()****

Основи

` <?php/* Створюємо новий контекст */$context u003d new ZMQContext();/* Створюємо новий сокет */$socket u003d $context->getSocket(ZMQ::SOCKET_REQ, '' сокетом */$socket->connect("tcp://example.com:1234");/* Посилаємо запрос */$socket->send("Hello there");/* Отримуємо відповідь */$message u003d $ socket->recv();echo "Received message: {$message}
";?> `
