- [«
MongoDB\BSON\ObjectId::serialize](mongodb-bson-objectid.serialize.md)
- [MongoDB\BSON\ObjectId::unserialize
»](mongodb-bson-objectid.unserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)
- Повертає шістнадцяткову виставу ObjectId

# MongoDB\BSON\ObjectId::\_\_toString

(mongodb \>u003d1.0.0)

MongoDB\BSON\ObjectId::\_\_toString — Повертає шістнадцяткове
уявлення ObjectId

### Опис

final public **MongoDB\BSON\ObjectId::\_\_toString**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає шістнадцяткову виставу ObjectId.

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\ObjectId::\_\_toString()****

` <?phpvar_dump((string) new MongoDB\BSON\ObjectId());var_dump((string) new MongoDB\BSON\ObjectId('000000000000000000000001'));?> `

Результатом виконання цього прикладу буде щось подібне:

string(24) "56731b49da14d8747d701211"
string(24) "0000000000000000000001"

### Дивіться також

- [» Довідка по
ObjectId](https://www.mongodb.com/docs/manual/reference/bson-types/#objectid)
- [» Типи BSON:
ObjectId](https://www.mongodb.com/docs/manual/reference/bson-types/#objectid)
