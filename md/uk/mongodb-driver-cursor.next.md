- [«MongoDB\Driver\Cursor::key](mongodb-driver-cursor.key.md)
- [MongoDB\Driver\Cursor::rewind »](mongodb-driver-cursor.rewind.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)
- Переміщує курсор на наступний результат

# MongoDB\Driver\Cursor::next

(mongodb \>u003d1.9.0)

MongoDB\Driver\Cursor::next — Переміщує курсор на наступний результат

### Опис

public **MongoDB\Driver\Cursor::next**(): void

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Зсув поточної позиції до наступного результату в курсорі.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- При невдалому з'єднанні з сервером (крім помилок автентифікації),
кидає виняток
[MongoDB\Driver\Exception\ConnectionException](class.mongodb-driver-exception-connectionexception.md).
- За невдалої аутентифікації кидає виняток
[MongoDB\Driver\Exception\AuthenticationException](class.mongodb-driver-exception-authenticationexception.md).

### Дивіться також

- [Iterator::next()](iterator.next.md) - Переходить до наступного
елементу
