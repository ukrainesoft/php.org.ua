- [« MongoDB \ BSON \ MinKey] (class.mongodb-bson-minkey.md)
- [MongoDB\BSON\MinKey::jsonSerialize
»](mongodb-bson-minkey.jsonserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\MinKey](class.mongodb-bson-minkey.md)
- Конструктор MinKey

# MongoDB\BSON\MinKey::\_\_construct

(mongodb \>u003d1.0.0)

MongoDB\BSON\MinKey::\_\_construct - Конструктор MinKey

### Опис

final public **MongoDB\BSON\MinKey::\_\_construct**()

### Список параметрів

Ця функція не має параметрів.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\MinKey::\_\_construct()****

` <?phpvar_dump(new MongoDB\BSON\MinKey());?> `

Результат виконання цього прикладу:

object(MongoDB\BSON\MinKey)#1 (0) {
}

### Дивіться також

- [» Типи
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
