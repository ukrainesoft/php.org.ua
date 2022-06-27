- [«
MongoDB\Driver\ServerDescription::getLastUpdateTime](mongodb-driver-serverdescription.getlastupdatetime.md)
- [MongoDB\Driver\ServerDescription::getRoundTripTime
»](mongodb-driver-serverdescription.getroundtriptime.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md)
- Повертає порт, на якому прослуховується цей сервер

# MongoDB\Driver\ServerDescription::getPort

(mongodb \>u003d1.13.0)

MongoDB\Driver\ServerDescription::getPort — Повертає порт, на якому
прослуховується цей сервер

### Опис

final public **MongoDB\Driver\ServerDescription::getPort**(): int

Повертає порт, на якому прослуховується сервер.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає порт, на якому прослуховується сервер.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Server::getPort()](mongodb-driver-server.getport.md) -
Повертає порт, який слухає сервер
