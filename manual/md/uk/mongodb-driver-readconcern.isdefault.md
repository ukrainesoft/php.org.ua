- [«
MongoDB\Driver\ReadConcern::getLevel](mongodb-driver-readconcern.getlevel.md)
- [MongoDB\Driver\ReadConcern::serialize
»](mongodb-driver-readconcern.serialize.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md)
- Перевіряє, чи є гарантією прочитання за замовчуванням

# MongoDB\Driver\ReadConcern::isDefault

(mongodb \>u003d1.3.0)

MongoDB\Driver\ReadConcern::isDefault — Перевіряє, чи є гарантією
читання за замовчуванням

### Опис

final public **MongoDB\Driver\ReadConcern::isDefault**(): bool

Повертає, чи це гарантією читання за умовчанням (тобто.
параметри не вказано). Цей метод в першу чергу призначений для
використання у поєднанні з
[MongoDB\Driver\Manager::getReadConcern()](mongodb-driver-manager.getreadconcern.md),
щоб визначити, чи був побудований Manager без будь-яких гарантій
читання.

Драйвер не буде включати гарантії читання за замовчуванням у своїх
операціях читання (наприклад,
[MongoDB\Driver\Manager::executeQuery()](mongodb-driver-manager.executequery.md)),
щоб сервер міг застосовувати власні значення за замовчуванням.
Бібліотеки, які звертаються до гарантій читання Manager, щоб
включити його у власні команди читання, повинні використовувати цей
метод, щоб гарантувати, що гарантії читання за замовчуванням залишаються
невстановленими.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо це гарантії читання за умовчанням, та
**`false`** інакше.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\ReadConcern::isDefault()****

` <?php$rc u003d new MongoDB\Driver\ReadConcern(null);var_dump($rc->isDefault());$rc u003d new MongoDB\Driver\ReadConcern(MongoDB\Driver\ReadConcern::MAJORITY); $rc->isDefault());$manager u003d new MongoDB\Driver\Manager('mongodb://127.0.0.1/?readConcernLevelu003dmajority');$rc u003d $manager->getReadConcern();var_dump($rc ->isDefault());$manager u003d new MongoDB\Driver\Manager('mongodb://127.0.0.1/');$rc u003d $manager->getReadConcern();var_dump($rc->isDefault()) ;?> `

Результат виконання цього прикладу:

bool(true)
bool(false)
bool(false)
bool(true)

### Дивіться також

- [MongoDB\Driver\Manager::getReadConcern()](mongodb-driver-manager.getreadconcern.md) -
Повертає ReadConcern для Manager
- [» Довідка за гарантіями
читання](https://www.mongodb.com/docs/manual/reference/read-concern/)
