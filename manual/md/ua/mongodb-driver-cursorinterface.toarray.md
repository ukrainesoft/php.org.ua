- [«
MongoDB\Driver\CursorInterface::setTypeMap](mongodb-driver-cursorinterface.settypemap.md)
- [MongoDB\Driver\Server »](class.mongodb-driver-server.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\CursorInterface](class.mongodb-driver-cursorinterface.md)
- Повернути всі результати для даного курсору у вигляді масиву

# MongoDB\Driver\CursorInterface::toArray

(mongodb \>u003d1.6.0)

MongoDB\Driver\CursorInterface::toArray — Повернути всі результати для
даного курсору у вигляді масиву

### Опис

abstract public **MongoDB\Driver\CursorInterface::toArray**(): array

Ітерує курсор та повертає результати у вигляді масиву. Для контролю
десеріалізації в типи PHP можна використовувати
[MongoDB\Driver\CursorInterface::setTypeMap()](mongodb-driver-cursorinterface.settypemap.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив, що містить усі результати курсору.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Cursor::toArray()](mongodb-driver-cursor.toarray.md) -
Повертає масив, що містить усі результати курсору
- [MongoDB\Driver\CursorInterface::setTypeMap()](mongodb-driver-cursorinterface.settypemap.md) -
Задати порівняння типів для десеріалізації BSON
