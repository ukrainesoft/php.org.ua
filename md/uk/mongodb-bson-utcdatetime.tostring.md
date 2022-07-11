- [«
MongoDB\BSON\UTCDateTime::toDateTime](mongodb-bson-utcdatetime.todatetime.md)
- [MongoDB\BSON\UTCDateTime::unserialize
»](mongodb-bson-utcdatetime.unserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\UTCDateTime](class.mongodb-bson-utcdatetime.md)
- Повертає рядкову виставу UTCDateTime

# MongoDB\BSON\UTCDateTime::\_\_toString

(mongodb \>u003d1.0.0)

MongoDB\BSON\UTCDateTime::\_\_toString — Повертає рядкове
представлення UTCDateTime

### Опис

final public **MongoDB\BSON\UTCDateTime::\_\_toString**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядкову виставу UTCDateTime.

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\UTCDateTime::\_\_toString()****

` <?php$utcdatetime u003d new MongoDB\BSON\UTCDateTime(1416445411987);var_dump((string) $utcdatetime);?> `

Результат виконання цього прикладу:

string(13) "1416445411987"

### Дивіться також

- [» Типи BSON:
Date](https://www.mongodb.com/docs/manual/reference/bson-types/#date)
