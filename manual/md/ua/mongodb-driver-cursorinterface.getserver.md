- [«
MongoDB\Driver\CursorInterface::getId](mongodb-driver-cursorinterface.getid.md)
- [MongoDB\Driver\CursorInterface::isDead
»](mongodb-driver-cursorinterface.isdead.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\CursorInterface](class.mongodb-driver-cursorinterface.md)
- Повертає сервер, з яким пов'язаний курсор

# MongoDB\Driver\CursorInterface::getServer

(mongodb \>u003d1.6.0)

MongoDB\Driver\CursorInterface::getServer — Повертає сервер, з яким
пов'язаний курсор

### Опис

abstract public **MongoDB\Driver\CursorInterface::getServer**():
[MongoDB\Driver\Server](class.mongodb-driver-server.md)

Повертає [MongoDB\Driver\Server](class.mongodb-driver-server.md)
пов'язаний із курсором. Це той сервер, на якому запущено
[MongoDB\Driver\Query](class.mongodb-driver-query.md) або
[MongoDB\Driver\Command](class.mongodb-driver-command.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає [MongoDB\Driver\Server](class.mongodb-driver-server.md)
пов'язаний із курсором.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Cursor::getServer()](mongodb-driver-cursor.getserver.md) -
Повертає сервер, пов'язаний із курсором
- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
