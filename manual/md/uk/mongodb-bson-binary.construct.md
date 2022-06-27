- [« MongoDB \ BSON \ Binary] (class.mongodb-bson-binary.md)
- [MongoDB\BSON\Binary::getData »](mongodb-bson-binary.getdata.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Binary](class.mongodb-bson-binary.md)
- Створює новий Binary

# MongoDB\BSON\Binary::\_\_construct

(mongodb \>u003d1.0.0)

MongoDB\BSON\Binary::\_\_construct — Створює новий Binary

### Опис

final public **MongoDB\BSON\Binary::\_\_construct**(string `$data`, int
`$type`)

### Список параметрів

`data` (string)
Двійкові дані.

`type` (int)
8-розрядне ціле число, що означає тип даних.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Видає
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md),
якщо `type` не є 8-розрядним цілим числом.
- Видає
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md),
якщо `type` є **`MongoDB\BSON\Binary::TYPE_UUID`** або
**`MongoDB\BSON\Binary::TYPE_OLD_UUID`**, а довжина `data` не дорівнює 16
байт.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------|
| PECL mongodb 1.3.0 | [MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md) видається, якщо `type` є **`MongoDB\BSON\Binary::TYPE_UUID`** або **`MongoDB\BSON \Binary::TYPE_OLD_UUID`**, а довжина `data` не дорівнює 16 байтам. |
| PECL mongodb 1.1.3 | [MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md) видається, якщо `type` не є 8-розрядним цілим числом. |

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\Binary::\_\_construct()****

` <?php$binary u003d new MongoDB\BSON\Binary('foo', MongoDB\BSON\Binary::TYPE_GENERIC);var_dump($binary);?> `

Результат виконання цього прикладу:

object(MongoDB\BSON\Binary)#1 (2) {
["data"]u003d>
string(3) "foo"
["type"]u003d>
int(0)
}

### Дивіться також

- [» Типи
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
