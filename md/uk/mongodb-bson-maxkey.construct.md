- [« MongoDB \ BSON \ MaxKey] (class.mongodb-bson-maxkey.md)
- [MongoDB\BSON\MaxKey::jsonSerialize
»](mongodb-bson-maxkey.jsonserialize.md)

- [PHP Manual](index.md)
- [MongoDB\BSON\MaxKey](class.mongodb-bson-maxkey.md)
- Конструктор MaxKey

# MongoDB\BSON\MaxKey::\_\_construct

(mongodb \>u003d1.0.0)

MongoDB\BSON\MaxKey::\_\_construct - Конструктор MaxKey

### Опис

final public **MongoDB\BSON\MaxKey::\_\_construct**()

### Список параметрів

Ця функція не має параметрів.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\BSON\MaxKey::\_\_construct()****

` <?phpvar_dump(new MongoDB\BSON\MaxKey());?> `

Результат виконання цього прикладу:

object(MongoDB\BSON\MaxKey)#1 (0) {
}

### Дивіться також

- [» Типи
BSON](https://www.mongodb.com/docs/manual/reference/bson-types/)
