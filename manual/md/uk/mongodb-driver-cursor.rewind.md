- [«MongoDB\Driver\Cursor::next](mongodb-driver-cursor.next.md)
- [MongoDB\Driver\Cursor::setTypeMap
»](mongodb-driver-cursor.settypemap.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)
- Переміщує курсор до першого результату

# MongoDB\Driver\Cursor::rewind

(mongodb \>u003d1.9.0)

MongoDB\Driver\Cursor::rewind — Переміщує курсор до першого результату

### Опис

public **MongoDB\Driver\Cursor::rewind**(): void

Якщо курсор просунувся далі своєї першої позиції, його перемістити
до першого результату вже не вийде.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`null`**.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- При невдалому з'єднанні з сервером (крім помилок автентифікації),
кидає виняток
[MongoDB\Driver\Exception\ConnectionException](class.mongodb-driver-exception-connectionexception.md).
- За невдалої аутентифікації кидає виняток
[MongoDB\Driver\Exception\AuthenticationException](class.mongodb-driver-exception-authenticationexception.md).
- кидає виняток
[MongoDB\Driver\Exception\LogicException](class.mongodb-driver-exception-logicexception.md)
якщо метод був викликаний після просування курсору далі за свою першу
позиції.

### Дивіться також

- [Iterator::rewind()](iterator.rewind.md) - Повертає ітератор на
перший елемент
