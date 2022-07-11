- [«
MongoDB\Driver\WriteConcern::\_\_construct](mongodb-driver-writeconcern.construct.md)
- [MongoDB\Driver\WriteConcern::getW
»](mongodb-driver-writeconcern.getw.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
- Повертає опцію "journal" WriteConcern

# MongoDB\Driver\WriteConcern::getJournal

(mongodb \>u003d1.0.0)

MongoDB\Driver\WriteConcern::getJournal - Повертає опцію "journal"
WriteConcern

### Опис

final public **MongoDB\Driver\WriteConcern::getJournal**(): ?bool

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає опцію "journal" WriteConcern.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteConcern::getJournal()****

` <?php$wc u003d new MongoDB\Driver\WriteConcern(1);var_dump($wc->getJournal());$wc u003d new MongoDB\Driver\WriteConcern(1, 0, true);var_dump$ >getJournal());$wc u003d new MongoDB\Driver\WriteConcern(1, 0, false);var_dump($wc->getJournal());?> `

Результат виконання цього прикладу:

NULL
bool(true)
bool(false)

### Дивіться також

- [»Керівництво по гарантії
запису](https://www.mongodb.com/docs/manual/reference/write-concern/)
