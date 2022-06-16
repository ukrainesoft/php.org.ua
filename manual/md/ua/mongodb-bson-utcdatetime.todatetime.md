- [«
MongoDB\BSON\UTCDateTime::serialize](mongodb-bson-utcdatetime.serialize.md)
- [MongoDB\BSON\UTCDateTime::\_\_toString
»](mongodb-bson-utcdatetime.tostring.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\UTCDateTime](class.mongodb-bson-utcdatetime.md)
- Повертає уявлення DateTime цього UTCDateTime

# MongoDB\BSON\UTCDateTime::toDateTime

(mongodb \>u003d1.0.0)

MongoDB\BSON\UTCDateTime::toDateTime — Повертає уявлення DateTime
цього UTCDateTime

### Опис

final public **MongoDB\BSON\UTCDateTime::toDateTime**():
[DateTime](class.datetime.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає представлення [DateTime](class.datetime.md) цього
UTCDateTime. Повернутий [DateTime](class.datetime.md) буде
використовувати часовий пояс UTC.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\UTCDatetime::toDateTime()****

` <?php$utcdatetime u003d new MongoDB\BSON\UTCDateTime(1416445411987);$datetime u003d $utcdatetime->toDateTime();var_dump($datetime->format('r'));var_dump($ 'U.u'));var_dump($datetime->getTimezone());?> `

Результатом виконання цього прикладу буде щось подібне:

string(31) "Thu, 20 Nov 2014 01:03:31 +0000"
string(17) "1416445411.987000"
object(DateTimeZone)#3 (2) {
["timezone_type"]u003d>
int(1)
["timezone"]u003d>
string(6) "+00:00"
}

### Дивіться також

- [» Типи BSON:
Date](https://www.mongodb.com/docs/manual/reference/bson-types/#date)
