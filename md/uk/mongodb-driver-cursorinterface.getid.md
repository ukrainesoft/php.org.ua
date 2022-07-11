- [«
MongoDB\Driver\CursorInterface](class.mongodb-driver-cursorinterface.md)
- [MongoDB\Driver\CursorInterface::getServer
»](mongodb-driver-cursorinterface.getserver.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\CursorInterface](class.mongodb-driver-cursorinterface.md)
- Повертає ідентифікатор курсору

# MongoDB\Driver\CursorInterface::getId

(mongodb \>u003d1.6.0)

MongoDB\Driver\CursorInterface::getId — Повертає ідентифікатор курсору

### Опис

abstract public **MongoDB\Driver\CursorInterface::getId**():
[MongoDB\Driver\CursorId](class.mongodb-driver-cursorid.md)

Повертає [MongoDB\Driver\CursorId](class.mongodb-driver-cursorid.md)
пов'язаний із курсором. Кожен курсор на сервері має унікальний
ідентифікатор.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає [MongoDB\Driver\CursorId](class.mongodb-driver-cursorid.md)
для курсору.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Cursor::getId()](mongodb-driver-cursor.getid.md) -
Повертає ідентифікатор для курсору
- [MongoDB\Driver\CursorId](class.mongodb-driver-cursorid.md)
- [MongoDB\Driver\CursorId::\_\_toString()](mongodb-driver-cursorid.tostring.md) -
Строкове представлення ідентифікатора курсору
