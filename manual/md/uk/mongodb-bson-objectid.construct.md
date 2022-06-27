- [« MongoDB \ BSON \ ObjectId] (class.mongodb-bson-objectid.md)
- [MongoDB\BSON\ObjectId::getTimestamp
»](mongodb-bson-objectid.gettimestamp.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md)
- Створює новий ObjectId

# MongoDB\BSON\ObjectId::\_\_construct

(mongodb \>u003d1.0.0)

MongoDB\BSON\ObjectId::\_\_construct — Створює новий ObjectId

### Опис

final public **MongoDB\BSON\ObjectId::\_\_construct**(string `$id` u003d ?)

### Список параметрів

`id` (string)
24-символьний шістнадцятковий рядок. Якщо не вказано, драйвер
згенерує ObjectId.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Видає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md)
якщо `id` не є 24-символьним шістнадцятковим рядком.

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\ObjectId::\_\_construct()****

` <?phpvar_dump(new MongoDB\BSON\ObjectId());var_dump(new MongoDB\BSON\ObjectId('00000000000000000000001'));?> `

Результатом виконання цього прикладу буде щось подібне:

object(MongoDB\BSON\ObjectId)#1 (1) {
["oid"]u003d>
string(24) "56732d3dda14d81214634921"
}
object(MongoDB\BSON\ObjectId)#1 (1) {
["oid"]u003d>
string(24) "0000000000000000000001"
}

### Дивіться також

- [» Довідка по
ObjectId](https://www.mongodb.com/docs/manual/reference/bson-types/#objectid)
- [» Типи BSON:
ObjectId](https://www.mongodb.com/docs/manual/reference/bson-types/#objectid)
