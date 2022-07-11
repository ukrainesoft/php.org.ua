- [« MongoDB \ BSON \ Javascript] (class.mongodb-bson-javascript.md)
- [MongoDB\BSON\Javascript::getCode
»](mongodb-bson-javascript.getcode.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Javascript](class.mongodb-bson-javascript.md)
- Конструктор Javascript

# MongoDB\BSON\Javascript::\_\_construct

(mongodb \>u003d1.0.0)

MongoDB\BSON\Javascript::\_\_construct - Конструктор Javascript

### Опис

final public **MongoDB\BSON\Javascript::\_\_construct**(string `$code`,
array\|object `$scope` u003d ?)

### Список параметрів

`code` (string)
Код Javascript.

`scope` (array\|object)
Контекст Javascript.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- породжує виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md)
якщо `code` містить null-байти.

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------|
| PECL mongodb 1.2.0 | Породжує виняток [MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md) якщо `code` містить null-байти. Раніше, в такому випадку, аргумент обрізався для першого null-байту, що зустрівся. |

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\Javascript::\_\_construct()****

` <?php$code u003d new MongoDB\BSON\Javascript('function() { return 1; }');var_dump($code);$codews u003d new MongoDB\BSON\Javascript('function()n| }', ['foo' u003d> 'bar']);var_dump($codews);?> `

Результат виконання цього прикладу:

object(MongoDB\BSON\Javascript)#1 (2) {
["javascript"]u003d>
string(24) "function() { return 1; }"
["scope"]u003d>
object(stdClass)#2 (0) {
}
}
object(MongoDB\BSON\Javascript)#2 (2) {
["javascript"]u003d>
string(26) "function() { return foo; }"
["scope"]u003d>
object(stdClass)#1 (1) {
["foo"]u003d>
string(3) "bar"
}
}

### Дивіться також

- [» Типи
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
