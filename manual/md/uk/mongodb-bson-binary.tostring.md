- [«
MongoDB\BSON\Binary::serialize](mongodb-bson-binary.serialize.md)
- [MongoDB\BSON\Binary::unserialize
»](mongodb-bson-binary.unserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Binary](class.mongodb-bson-binary.md)
- Повертає дані Binary

# MongoDB\BSON\Binary::\_\_toString

(mongodb \>u003d1.2.0)

MongoDB\BSON\Binary::\_\_toString — Повертає дані Binary

### Опис

final public **MongoDB\BSON\Binary::\_\_toString**(): string

Цей метод є псевдонімом:
[MongoDB\BSON\Binary::getData()](mongodb-bson-binary.getdata.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає дані Binary.

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\Binary::\_\_toString()****

` <?phpvar_dump((string) new MongoDB\BSON\Binary('foo', MongoDB\BSON\Binary::TYPE_GENERIC));?> `

Результат виконання цього прикладу:

string(3) "foo"

### Дивіться також

- [MongoDB\BSON\Binary::getData()](mongodb-bson-binary.getdata.md) -
Повертає дані Binary
- [» Типи
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
