- [«
MongoDB\Driver\ReadConcern::bsonSerialize](mongodb-driver-readconcern.bsonserialize.md)
- [MongoDB\Driver\ReadConcern::getLevel
»](mongodb-driver-readconcern.getlevel.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md)
- Створює новий ReadConcern

# MongoDB\Driver\ReadConcern::\_\_construct

(mongodb \>u003d1.0.0)

MongoDB\Driver\ReadConcern::\_\_construct — Створює новий ReadConcern

### Опис

final public **MongoDB\Driver\ReadConcern::\_\_construct**(string
`$level` u003d ?)

Створює новий
[MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md),
який є об'єктом незмінного значення.

### Список параметрів

`level`
[» Рівень гарантій
читання](https://www.mongodb.com/docs/manual/reference/read-concern/#read-concern-levels).
Ви можете використовувати, але не обмежуючись цим, одну з [констант
класу](class.mongodb-driver-readconcern.md#mongodb-driver-readconcern.constants).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\ReadConcern::\_\_construct()****

`<?php/* Незазначений рівень ізоляції читання (використовує поведінка сервера за мовчанням) */$rc u003d new MongoDB\Driver\ReadConcern();/* Запрошуємо пропуск \ReadConcern(MongoDB\Driver\ReadConcern::LOCAL);/* Запрошуємо ізоляцію читання від більшості вузлів набору реплік */$rc u003d new MongoDB\Driver\ReadConcern(MongoDB

### Дивіться також

- [» Довідка за гарантіями
читання](https://www.mongodb.com/docs/manual/reference/read-concern/)
