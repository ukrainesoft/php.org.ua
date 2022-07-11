- [«MongoDB\BSON\Timestamp](class.mongodb-bson-timestamp.md)
- [MongoDB\BSON\Timestamp::getIncrement
»](mongodb-bson-timestamp.getincrement.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Timestamp](class.mongodb-bson-timestamp.md)
- Створює новий Timestamp

# MongoDB\BSON\Timestamp::\_\_construct

(mongodb \>u003d1.0.0)

MongoDB\BSON\Timestamp::\_\_construct - Створює новий Timestamp

### Опис

final public **MongoDB\BSON\Timestamp::\_\_construct**(int `$increment`,
int `$timestamp`)

### Список параметрів

`increment` (int)
32-розрядне ціле число, що позначає порядковий номер, що збільшується
для операцій протягом цієї секунди.

`timestamp` (int)
32-розрядне ціле число, що означає секунди з початку епохи Unix.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\Timestamp::\_\_construct()****

`<?php$timestamp u003d new MongoDB\BSON\Timestamp(1234, 5678);?> `

Результат виконання цього прикладу:

object(MongoDB\BSON\Timestamp)#1 (2) {
["increment"]u003d>
int(1234)
["timestamp"]u003d>
int(5678)
}

### Дивіться також

- [» Типи BSON:
Timestamps](https://www.mongodb.com/docs/manual/reference/bson-types/#timestamps)
