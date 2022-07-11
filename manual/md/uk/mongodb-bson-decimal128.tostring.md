- [«
MongoDB\BSON\Decimal128::serialize](mongodb-bson-decimal128.serialize.md)
- [MongoDB\BSON\Decimal128::unserialize
»](mongodb-bson-decimal128.unserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Decimal128](class.mongodb-bson-decimal128.md)
- Повертає рядкову виставу Decimal128

# MongoDB\BSON\Decimal128::\_\_toString

(mongodb \>u003d1.2.0)

MongoDB\BSON\Decimal128::\_\_toString — Повертає строкове
уявлення Decimal128

### Опис

final public **MongoDB\BSON\Decimal128::\_\_toString**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядкову виставу Decimal128.

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\Decimal128::\_\_toString()****

` <?phpvar_dump((string) new MongoDB\BSON\Decimal128(1234.5678));var_dump((string) new MongoDB\BSON\Decimal128(NAN)); ;?> `

Результатом виконання цього прикладу буде щось подібне:

string(9) "1234.5678"
string(3) "NaN"
string(8) "Infinity"

### Дивіться також

- [» Формат із плаваючою точкою
Decimal128](https://en.wikipedia.org/wiki/Decimal128_floating-point_format)
- [» Типи
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
