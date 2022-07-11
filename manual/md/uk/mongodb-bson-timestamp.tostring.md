- [«
MongoDB\BSON\Timestamp::serialize](mongodb-bson-timestamp.serialize.md)
- [MongoDB\BSON\Timestamp::unserialize
»](mongodb-bson-timestamp.unserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Timestamp](class.mongodb-bson-timestamp.md)
- Повертає рядкову виставу Timestamp

# MongoDB\BSON\Timestamp::\_\_toString

(mongodb \>u003d1.0.0)

MongoDB\BSON\Timestamp::\_\_toString - Повертає рядкове
уявлення Timestamp

### Опис

final public **MongoDB\BSON\Timestamp::\_\_toString**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядкову виставу Timestamp.

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\Timestamp::\_\_toString()****

` <?php$timestamp u003d new MongoDB\BSON\Timestamp(1234, 5678);var_dump((string) $timestamp);?> `

Результатом виконання цього прикладу буде щось подібне:

string(11) "[1234:5678]"

### Дивіться також

- [» Типи BSON:
Timestamps](https://www.mongodb.com/docs/manual/reference/bson-types/#timestamps)
