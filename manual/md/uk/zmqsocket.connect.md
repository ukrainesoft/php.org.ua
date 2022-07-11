- [«ZMQSocket::bind](zmqsocket.bind.md)
- [ZMQSocket::\_\_construct »](zmqsocket.construct.md)

- [PHP Manual](index.md)
- [ZMQSocket](class.zmqsocket.md)
- Підключення до сокету

# ZMQSocket::connect

(PECL zmq \>u003d 0.5.0)

ZMQSocket::connect — Підключення до сокету

### Опис

public **ZMQSocket::connect**(string `$dsn`, bool `$force` u003d
**`false`**): [ZMQSocket](class.zmqsocket.md)

Підключення сокету до віддаленої кінцевої точки. Кінцева точка
вказується у форматі `transport://address`, де transport може бути
одним із наступних значень: inproc, ipc, tcp, pgm або epgm.

### Список параметрів

`dsn`
Ім'я джерела даних, наприклад `transport://address`.

`force`
Спробує підключитись навіть якщо сокет вже підключений до зазначеної
кінцевої точки.

### Значення, що повертаються

Повертає поточний об'єкт.

### Помилки

Викидає **ZMQSocketException** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ZMQContext()****

Створити новий контекст та виділити сокет

` <?php/* Адреса сервера */$dsn u003d "tcp://127.0.0.1:5555";/* Створити сокет */$socket u003d new ZMQSocket(new ZMQContext(), CK ');/* Отримати список підключених кінцевих точок */$endpoints u003d $socket->getEndpoints();/* Перевірити, підключений ли сокет */if (!in_array($dsn, $ends) echo "<p>Підключення до $dsn</p>"; $socket->connect($dsn);} else {    echo "<p>Вже підключений к $dsn</p>";}/* Послати і отримати дані */$socket->send("Привіт!"); $messageu003du003d$socket->recv();echo "<p>Сервер відповів: {$message}</p>";?> `
