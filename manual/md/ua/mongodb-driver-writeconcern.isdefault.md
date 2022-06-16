- [«
MongoDB\Driver\WriteConcern::getWtimeout](mongodb-driver-writeconcern.getwtimeout.md)
- [MongoDB\Driver\WriteConcern::serialize
»](mongodb-driver-writeconcern.serialize.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
- Перевіряє, чи є гарантія запису за замовчуванням

# MongoDB\Driver\WriteConcern::isDefault

(mongodb \>u003d1.3.0)

MongoDB\Driver\WriteConcern::isDefault — Перевіряє, чи є гарантія
записи за замовчуванням

### Опис

final public **MongoDB\Driver\WriteConcern::isDefault**(): bool

Перевіряє, чи є ця гарантія запису за замовчуванням (тобто не вказано
параметри). Цей метод насамперед призначений для використання
спільно з
[MongoDB\Driver\Manager::getWriteConcern()](mongodb-driver-manager.getwriteconcern.md)
для визначення того, чи об'єкт Manager був створений без будь-яких опцій
гарантії запису.

Драйвер не включатиме гарантію запису за замовчуванням у свої операції
записи (наприклад,
[MongoDB\Driver\Manager::executeBulkWrite()](mongodb-driver-manager.executebulkwrite.md)),
щоб дозволити серверу застосовувати власну за промовчанням,
яка, можливо, була
[» змінена](https://www.mongodb.com/docs/manual/core/replica-set-write-concern/#modify-default-write-concern).
Бібліотеки, які звертаються до гарантії запису Manager, щоб увімкнути
її у власні команди записи, повинні використовувати цей метод,
щоб гарантувати, що гарантії запису за замовчуванням залишаються
невстановленими.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо ця гарантія запису за промовчанням, або
**`false`** інакше.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\WriteConcern::isDefault()****

` <?php$wc u003d new MongoDB\Driver\WriteConcern(1);var_dump($wc->isDefault());$manager u003d new MongoDB\Driver\Manager('mongodb://127.0.0.1/?wu003d majority');$wc u003d $manager->getWriteConcern();var_dump($wc->isDefault());$manager u003d new MongoDB\Driver\Manager('mongodb://127.0.0.1/');$wc u003d $manager->getWriteConcern();var_dump($wc->isDefault());?> `

Результат виконання цього прикладу:

bool(false)
bool(false)
bool(true)

### Дивіться також

- [MongoDB\Driver\Manager::getWriteConcern()](mongodb-driver-manager.getwriteconcern.md) -
Повертає WriteConcern для Manager
- [» Зміна гарантії запису за
замовчуванням](https://www.mongodb.com/docs/manual/core/replica-set-write-concern/#modify-default-write-concern)
у посібнику MongoDB
- [» Довідкова інформація щодо гарантії
запису](https://www.mongodb.com/docs/manual/reference/write-concern/)
