- [«
MongoDB\Driver\ServerDescription::getHelloResponse](mongodb-driver-serverdescription.gethelloresponse.md)
- [MongoDB\Driver\ServerDescription::getLastUpdateTime
»](mongodb-driver-serverdescription.getlastupdatetime.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md)
- Повертає ім'я сервера хоста

# MongoDB\Driver\ServerDescription::getHost

(mongodb \>u003d1.13.0)

MongoDB\Driver\ServerDescription::getHost — Повертає ім'я хоста сервера

### Опис

final public **MongoDB\Driver\ServerDescription::getHost**(): string

Повертає ім'я сервера хоста.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає ім'я сервера хоста.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Server::getHost()](mongodb-driver-server.gethost.md) -
Повертає ім'я сервера хоста
