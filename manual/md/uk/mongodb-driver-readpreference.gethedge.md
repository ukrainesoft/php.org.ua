- [«
MongoDB\Driver\ReadPreference::\_\_construct](mongodb-driver-readpreference.construct.md)
- [MongoDB\Driver\ReadPreference::getMaxStalenessSeconds
»](mongodb-driver-readpreference.getmaxstalenessseconds.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)
- Повертає опцію "hedge" із ReadPreference

# MongoDB\Driver\ReadPreference::getHedge

(mongodb \>u003d1.8.0)

MongoDB\Driver\ReadPreference::getHedge — Повертає опцію "hedge" з
ReadPreference

### Опис

final public **MongoDB\Driver\ReadPreference::getHedge**(): ?object

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає опцію "hedge" із ReadPreference.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [» документація по Read
Preference](https://www.mongodb.com/docs/manual/core/read-preference/)
