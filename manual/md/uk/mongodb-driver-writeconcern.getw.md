- [«
MongoDB\Driver\WriteConcern::getJournal](mongodb-driver-writeconcern.getjournal.md)
- [MongoDB\Driver\WriteConcern::getWtimeout
»](mongodb-driver-writeconcern.getwtimeout.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
- Повертає опцію "w" WriteConcern

# MongoDB\Driver\WriteConcern::getW

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteConcern::getW — Повертає опцію "w" WriteConcern

### Опис

final public **MongoDB\Driver\WriteConcern::getW**(): string\|int\|null

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає опцію "w" WriteConcern.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteConcern::getW()****

` <?php$wc u003d new MongoDB\Driver\WriteConcern(1);var_dump($wc->getW());$wc u003d new MongoDB\Driver\WriteConcern(MongoDB\Driver\WriteConcern::MAJORITY $wc->getW());?> `

Результат виконання цього прикладу:

int(1)
string(8) "majority"

### Дивіться також

- [»Керівництво по гарантії
запису](https://www.mongodb.com/docs/manual/reference/write-concern/)
