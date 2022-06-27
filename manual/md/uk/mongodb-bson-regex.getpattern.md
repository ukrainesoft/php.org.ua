- [« MongoDB\BSON\Regex::getFlags](mongodb-bson-regex.getflags.md)
- [MongoDB\BSON\Regex::jsonSerialize
»](mongodb-bson-regex.jsonserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Regex](class.mongodb-bson-regex.md)
- Повертає шаблон Regex

# MongoDB\BSON\Regex::getPattern

(mongodb \>u003d1.0.0)

MongoDB\BSON\Regex::getPattern — Повертає шаблон Regex

### Опис

final public **MongoDB\BSON\Regex::getPattern**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає шаблон Regex.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання **MongoDB\BSON\Regex::getPattern()****

` <?php$regex u003d new MongoDB\BSON\Regex('regex', 'i');var_dump($regex->getPattern());?> `

Результатом виконання цього прикладу буде щось подібне:

string(5) "regex"

### Дивіться також

- [» Типи
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
