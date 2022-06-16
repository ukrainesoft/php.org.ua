- [«
MongoDB\BSON\Javascript::getCode](mongodb-bson-javascript.getcode.md)
- [MongoDB\BSON\Javascript::jsonSerialize
»](mongodb-bson-javascript.jsonserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\Javascript](class.mongodb-bson-javascript.md)
- Повертає область документа JavaScript

# MongoDB\BSON\Javascript::getScope

(mongodb \>u003d1.2.0)

MongoDB\BSON\Javascript::getScope — Повертає область документа
JavaScript

### Опис

final public **MongoDB\BSON\Javascript::getScope**(): ?object

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає область документа JavaScript або **`null`** у випадку, якщо
області немає.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\Javascript::getScope()****

` <?php$js u003d new MongoDB\BSON\Javascript('function foo(bar) { return bar; }');var_dump($js->getScope());$js u003d new MongoDB\BSON\Javascript function foo() { return foo; }', ['foo' u003d> 42]);var_dump($js->getScope());?> `

Результат виконання цього прикладу:

NULL
object(stdClass)#1 (1) {
["foo"]u003d>
int(42)
}

### Дивіться також

- [» Типи
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
