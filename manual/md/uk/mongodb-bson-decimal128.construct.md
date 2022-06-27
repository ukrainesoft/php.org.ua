- [« MongoDB \ BSON \ Decimal128] (class.mongodb-bson-decimal128.md)
- [MongoDB\BSON\Decimal128::jsonSerialize
»](mongodb-bson-decimal128.jsonserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Decimal128](class.mongodb-bson-decimal128.md)
- Створює новий Decimal128

# MongoDB\BSON\Decimal128::\_\_construct

(mongodb \>u003d1.2.0)

MongoDB\BSON\Decimal128::\_\_construct - Створює новий Decimal128

### Опис

final public **MongoDB\BSON\Decimal128::\_\_construct**(string `$value`
u003d?)

> **Примітка**:
> [MongoDB\BSON\Decimal128](class.mongodb-bson-decimal128.md)
> сумісний лише з MongoDB 3.4+. При спробі використовувати тип BSON з
> ранніми версіями призведе до помилки.

### Список параметрів

`value` (string)
Десятковий рядок.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Видає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md),
якщо `value` не є допустимим десятковим рядком.

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\Decimal128::\_\_construct()****

` <?phpvar_dump(new MongoDB\BSON\Decimal128(1234.5678));var_dump(new MongoDB\BSON\Decimal128(NAN));var_dump(new MongoDB\BSON\Decimal128(INF)

Результатом виконання цього прикладу буде щось подібне:

object(MongoDB\BSON\Decimal128)#1 (1) {
["dec"]u003d>
string(9) "1234.5678"
}
object(MongoDB\BSON\Decimal128)#1 (1) {
["dec"]u003d>
string(3) "NaN"
}
object(MongoDB\BSON\Decimal128)#1 (1) {
["dec"]u003d>
string(8) "Infinity"
}

### Дивіться також

- [» Формат із плаваючою точкою
Decimal128](https://en.wikipedia.org/wiki/Decimal128_floating-point_format)
- [» Типи
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
