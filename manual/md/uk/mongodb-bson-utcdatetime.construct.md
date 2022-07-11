- [«MongoDB\BSON\UTCDateTime](class.mongodb-bson-utcdatetime.md)
- [MongoDB\BSON\UTCDateTime::jsonSerialize
»](mongodb-bson-utcdatetime.jsonserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\UTCDateTime](class.mongodb-bson-utcdatetime.md)
- Створює новий UTCDateTime

# MongoDB\BSON\UTCDateTime::\_\_construct

(mongodb \>u003d1.0.0)

MongoDB\BSON\UTCDateTime::\_\_construct — Створює новий UTCDateTime

### Опис

final public
**MongoDB\BSON\UTCDateTime::\_\_construct**(int\|float\|string\|[DateTimeInterface](class.datetimeinterface.md)
`$milliseconds` u003d **`null`**)

### Список параметрів

`milliseconds` (int\|float\|string\|[DateTimeInterface](class.datetimeinterface.md))
Кількість мілісекунд з часів Unix (1 січня 1970). Негативні
Значення становлять дати до 1970 року. Це значення може бути
представлено як 64-розрядний int. Для сумісності у 32-бітних
системах цей параметр також може бути представлений, як float або
string.

Якщо аргумент є
[DateTimeInterface](class.datetimeinterface.md), з цього значення
буде отримано кількість мілісекунд, що минули з початку епохи Unix.
Зверніть увагу, що у версіях PHP до 7.1.0 об'єкти
[DateTime](class.datetime.md) та
[DateTimeImmutable](class.datetimeimmutable.md), побудовані за
поточного часу, [не включають точність менше
секунди](migration71.incompatible.md#migration71.incompatible.datetime-microseconds).

Якщо цей аргумент дорівнює **`null`**, буде використовуватись поточний час
за замовчуванням.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------------------------------|
| PECL mongodb 1.2.0 | Аргумент `milliseconds` є необов'язковим і за умовчанням дорівнює **`null`** (тобто поточний час). Аргумент також приймає [DateTimeInterface](class.datetimeinterface.md), який можна використовувати для отримання кількості мілісекунд з початку епохи Unix. Раніше приймався лише тип int, float чи string. |

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\UTCDateTime::\_\_construct()****

`<?phpvar_dump(new MongoDB\BSON\UTCDateTime); var_dump(new MongoDB\BSON\UTCDateTime(new DateTime));

Результатом виконання цього прикладу буде щось подібне:

object(MongoDB\BSON\UTCDateTime)#1 (1) {
["milliseconds"]u003d>
string(13) "1484852905560"
}
object(MongoDB\BSON\UTCDateTime)#1 (1) {
["milliseconds"]u003d>
string(13) "1484852905560"
}
object(MongoDB\BSON\UTCDateTime)#1 (1) {
["milliseconds"]u003d>
string(13) "1416445411987"
}

### Дивіться також

- [» Типи BSON:
Date](https://www.mongodb.com/docs/manual/reference/bson-types/#date)
