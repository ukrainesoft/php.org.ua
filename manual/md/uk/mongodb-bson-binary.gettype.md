- [« MongoDB\BSON\Binary::getData](mongodb-bson-binary.getdata.md)
- [MongoDB\BSON\Binary::jsonSerialize
»](mongodb-bson-binary.jsonserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Binary](class.mongodb-bson-binary.md)
- Повертає тип Binary

# MongoDB\BSON\Binary::getType

(mongodb \>u003d1.0.0)

MongoDB\BSON\Binary::getType — Повертає тип Binary

### Опис

final public **MongoDB\BSON\Binary::getType**(): int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає тип Binary.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання **MongoDB\BSON\Binary::getType()****

` <?php$binary u003d new MongoDB\BSON\Binary('foo', MongoDB\BSON\Binary::TYPE_GENERIC);var_dump($binary->getType());?> `

Результат виконання цього прикладу:

int(0)

### Дивіться також

- [» Типи
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
