- [«
MongoDB\Driver\ReadConcern::\_\_construct](mongodb-driver-readconcern.construct.md)
- [MongoDB\Driver\ReadConcern::isDefault
»](mongodb-driver-readconcern.isdefault.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md)
- Повертає опцію "level" ReadConcern

# MongoDB\Driver\ReadConcern::getLevel

(mongodb \>u003d1.0.0)

MongoDB\Driver\ReadConcern::getLevel - Повертає опцію "level"
ReadConcern

### Опис

final public **MongoDB\Driver\ReadConcern::getLevel**(): ?string

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає опцію "level" ReadConcern.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\ReadConcern::getLevel()****

` <?php$rc u003d new MongoDB\Driver\ReadConcern();var_dump($rc->getLevel());$rc u003d new MongoDB\Driver\ReadConcern(MongoDB\Driver\ReadConcern::LOCAL);var_dump($ rc->getLevel());$rc u003d new MongoDB\Driver\ReadConcern(MongoDB\Driver\ReadConcern::MAJORITY);var_dump($rc->getLevel());?> `

Результат виконання цього прикладу:

NULL
string(5) "local"
string(8) "majority"

### Дивіться також

- [» Довідка за гарантіями
читання](https://www.mongodb.com/docs/manual/reference/read-concern/)
