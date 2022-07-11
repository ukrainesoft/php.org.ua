- [«
MongoDB\BSON\Regex::\_\_construct](mongodb-bson-regex.construct.md)
- [MongoDB\BSON\Regex::getPattern
»](mongodb-bson-regex.getpattern.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Regex](class.mongodb-bson-regex.md)
- Повертає прапори Regex

# MongoDB\BSON\Regex::getFlags

(mongodb \>u003d1.0.0)

MongoDB\BSON\Regex::getFlags — Повертає прапори Regex

### Опис

final public **MongoDB\BSON\Regex::getFlags**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає прапори Regex.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання **MongoDB\BSON\Regex::getFlags()****

` <?php$regex u003d new MongoDB\BSON\Regex('regex', 'i');var_dump($regex->getFlags());?> `

Результатом виконання цього прикладу буде щось подібне:

string(1) "i"

### Дивіться також

- [» Типи
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
- [» Підтримувані прапори регулярних
виразів](https://www.mongodb.com/docs/manual/reference/operator/query/regex/#op._S_options)
