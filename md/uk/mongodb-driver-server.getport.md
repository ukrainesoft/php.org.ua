- [«
MongoDB\Driver\Server::getLatency](mongodb-driver-server.getlatency.md)
- [MongoDB\Driver\Server::getServerDescription
»](mongodb-driver-server.getserverdescription.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- Повертає порт, який слухає сервер

# MongoDB\Driver\Server::getPort

(mongodb \>u003d1.0.0)

MongoDB\Driver\Server::getPort — Повертає порт, який слухає сервер

### Опис

final public **MongoDB\Driver\Server::getPort**(): int

Повертає порт, який слухає сервер.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає порт, який слухає сервер.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання **MongoDB\Driver\Server::getPort()****

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://localhost:27017/");$rp u003d new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::RP_PRIMARY);$server u003d manager->selectServer($rp);var_dump($server->getPort());?> `

Результат виконання цього прикладу:

int(27017)

### Дивіться також

- [MongoDB\Driver\Server::getInfo()](mongodb-driver-server.getinfo.md) -
Повертає масив інформації, що описує сервер
- [MongoDB\Driver\ServerDescription::getPort()](mongodb-driver-serverdescription.getport.md) -
Повертає порт, на якому прослуховується цей сервер
