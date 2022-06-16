- [« MongoDB\BSON\Regex::serialize](mongodb-bson-regex.serialize.md)
- [MongoDB\BSON\Regex::unserialize
»](mongodb-bson-regex.unserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Regex](class.mongodb-bson-regex.md)
- Повертає рядкову виставу Regex

# MongoDB\BSON\Regex::\_\_toString

(mongodb \>u003d1.0.0)

MongoDB\BSON\Regex::\_\_toString — Повертає рядкову виставу
Regex

### Опис

final public **MongoDB\BSON\Regex::\_\_toString**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядкову виставу Regex.

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\Regex::\_\_toString()****

` <?php$regex u003d new MongoDB\BSON\Regex('regex', 'i');var_dump((string) $regex);?> `

Результат виконання цього прикладу:

string(8) "/regex/i"

### Дивіться також

- [» Типи
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
