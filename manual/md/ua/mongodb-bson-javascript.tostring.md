- [«
MongoDB\BSON\Javascript::serialize](mongodb-bson-javascript.serialize.md)
- [MongoDB\BSON\Javascript::unserialize
»](mongodb-bson-javascript.unserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Javascript](class.mongodb-bson-javascript.md)
- Повертає код JavaScript

# MongoDB\BSON\Javascript::\_\_toString

(mongodb \>u003d1.2.0)

MongoDB\BSON\Javascript::\_\_toString — Повертає код JavaScript

### Опис

final public **MongoDB\BSON\Javascript::\_\_toString**(): string

Цей метод є псевдонімом:
[MongoDB\BSON\Javascript::getCode()](mongodb-bson-javascript.getcode.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає код JavaScript.

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\Javascript::\_\_toString()****

` <?phpvar_dump((string) new MongoDB\BSON\Javascript('function foo(bar) { return bar; }'));?> `

Результат виконання цього прикладу:

string(33) "function foo(bar) { return bar; }"

### Дивіться також

- [MongoDB\BSON\Javascript::getCode()](mongodb-bson-javascript.getcode.md) -
Повертає код JavaScript
- [» Типи
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
