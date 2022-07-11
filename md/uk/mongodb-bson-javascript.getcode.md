- [«
MongoDB\BSON\Javascript::\_\_construct](mongodb-bson-javascript.construct.md)
- [MongoDB\BSON\Javascript::getScope
»](mongodb-bson-javascript.getscope.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Javascript](class.mongodb-bson-javascript.md)
- Повертає код JavaScript

# MongoDB\BSON\Javascript::getCode

(mongodb \>u003d1.2.0)

MongoDB\BSON\Javascript::getCode — Повертає код JavaScript

### Опис

final public **MongoDB\BSON\Javascript::getCode**(): string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає код JavaScript.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\Javascript::getCode()****

` <?php$js u003d new MongoDB\BSON\Javascript('function foo(bar) { return bar; }');var_dump($js->getCode());?> `

Результат виконання цього прикладу:

string(33) "function foo(bar) { return bar; }"

### Дивіться також

- [» Типи
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
