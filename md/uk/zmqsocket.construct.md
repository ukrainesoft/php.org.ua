- [«ZMQSocket::connect](zmqsocket.connect.md)
- [ZMQSocket::disconnect »](zmqsocket.disconnect.md)

- [PHP Manual](index.md)
- [ZMQSocket](class.zmqsocket.md)
- Конструктор класу ZMQSocket

# ZMQSocket::\_\_construct

(PECL zmq \>u003d 0.5.0)

ZMQSocket::\_\_construct - Конструктор класу ZMQSocket

### Опис

public **ZMQSocket::\_\_construct**(
[ZMQContext](class.zmqcontext.md) `$context`,
int `$type`,
string `$persistent_id` u003d **`null`**,
[callable](language.types.callable.md) `$on_new_socket` u003d
**`null`**
)

Створює екземпляр класу ZMQSocket. Параметр `persistent_id` може бути
використано для встановлення постійного з'єднання. Постійний сокет
буде виділено з постійного контексту і залишатиметься активним у
протягом кількох запитів. Отримати той самий сокет для безлічі
запитів можна за допомогою параметра `persistent_id`. Функція, задана в
`on_new_socket` викликається лише за створення нової структури сокета.

### Список параметрів

`context`
Об'єкт класу ZMQContext.

`type`
Тип сокету. Дивіться константи **`ZMQ::SOCKET_*`**.

`persistent_id`
Якщо параметр `persistent_id` вказано, то сокет буде доступний протягом
кількох запитів. Якщо `context` не є постійним, сокет так само
повернеться до непостійного режиму.

`on_new_socket`
Callback-функція, яка буде викликана під час створення нового сокету. Ця
функція не викликається у разі повторного використання постійного
з'єднання.

callback([ZMQSocket](class.zmqsocket.md) `$socket`, string
`$persistent_id` u003d **`null`**)

### Помилки

Викидає **ZMQSocketException** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ZMQSocket()****

Використання функції зворотного дзвінка для зв'язку або підключення
сокету

` <?php/*  Здесь используется постоянный сокет, поэтому функция будет вызвана лишь  при первом обращении к скрипту.*/function on_new_socket_cb(ZMQSocket $socket, $persistent_id u003d null){    if ($persistent_id u003du003du003d 'server') {        $ socket->bind("tcp://localhost:12122"); } else {        $socket->connect("tcp://localhost:12122"); }}/* Створити новий контекст */$context u003d new ZMQContext();/* Створити сокет */$socket u003d $context->getSocket(ZMQ::SOCKET_REP, 'server','$' socket->recv();echo "Отримано повідомлення: {$message}
";?> `
