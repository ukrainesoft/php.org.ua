- [«
MongoDB\BSON\Binary::\_\_construct](mongodb-bson-binary.construct.md)
- [MongoDB\BSON\Binary::getType »](mongodb-bson-binary.gettype.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Binary](class.mongodb-bson-binary.md)
- Повертає дані Binary

# MongoDB\BSON\Binary::getData

(mongodb \>u003d1.0.0)

MongoDB\BSON\Binary::getData — Повертає дані Binary

### Опис

final public **MongoDB\BSON\Binary::getData**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає дані Binary.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання **MongoDB\BSON\Binary::getData()****

` <?php$binary u003d new MongoDB\BSON\Binary('foo', MongoDB\BSON\Binary::TYPE_GENERIC);var_dump($binary->getData());?> `

Результат виконання цього прикладу:

string(3) "foo"

### Дивіться також

- [» Типи
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
