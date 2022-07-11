- [« MongoDB\BSON\Int64::serialize](mongodb-bson-int64.serialize.md)
- [MongoDB\BSON\Int64::unserialize
»](mongodb-bson-int64.unserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Int64](class.mongodb-bson-int64.md)
- Повертає рядкову виставу Int64

# MongoDB\BSON\Int64::\_\_toString

(mongodb \>u003d1.5.0)

MongoDB\BSON\Int64::\_\_toString — Повертає рядкову виставу
Int64

### Опис

final public **MongoDB\BSON\Int64::\_\_toString**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядкову виставу Int64.

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\Int64::\_\_toString()****

` <?php$int64 u003d unserialize('C:18:"MongoDB\BSON\Int64":47:{a:1:{s:7:"integer";s:19:"9223372036854775807";}}') ;var_dump((string) $int64);?> `

Результатом виконання цього прикладу буде щось подібне:

string(19) "9223372036854775807"

### Дивіться також

- [» Типи
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
