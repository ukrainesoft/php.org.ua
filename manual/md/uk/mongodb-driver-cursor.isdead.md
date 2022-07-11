- [«
MongoDB\Driver\Cursor::getServer](mongodb-driver-cursor.getserver.md)
- [MongoDB\Driver\Cursor::key »](mongodb-driver-cursor.key.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)
- Перевіряє, чи курсор вичерпано чи може містити додаткові
результати

# MongoDB\Driver\Cursor::isDead

(mongodb \>u003d1.0.0)

MongoDB\Driver\Cursor::isDead — Перевіряє, чи вичерпано курсор чи може
містити додаткові результати

### Опис

final public **MongoDB\Driver\Cursor::isDead**(): bool

Перевіряє, чи у курсора немає додаткових результатів. Цей метод
аналогічний методу
[» cursor.isExhausted()](https://www.mongodb.com/docs/manual/reference/method/cursor.isExhausted/)
в оболонці MongoDB і насамперед корисний при виконанні ітерації
[»хвостових
курсорів](https://www.mongodb.com/docs/manual/core/tailable-cursors/).

Курсор не має додаткових результатів і вважається "мертвим", якщо
виконується одна з наступних умов:

- Поточний пакет повністю повторений *і* ідентифікатор курсора дорівнює
нулю (тобто
[» getMore](https://www.mongodb.com/docs/manual/reference/command/getMore/)
може бути виконаний).
- Сталася помилка під час ітерації курсору.
- Курсор досяг своєї встановленої межі.

Умисно не завжди можна визначити, чи має курсор
додаткові результати. Випадки, коли курсор може мати більше
доступних даних:

- У поточному пакеті є додаткові документи, які
буферизуються за клієнта. Ітерація витягне документ з
локальний буфер.
- У поточному пакеті немає додаткових документів (тобто локального
буфера), але ідентифікатор курсору не дорівнює нулю. Ітерація буде
запитувати більше документів із сервера за допомогою операції
[» getMore](https://www.mongodb.com/docs/manual/reference/command/getMore/),
яка може повертати чи не повертати додаткові результати
та/або вказувати, що курсор був закритий на сервері, повертаючи нуль
для його ідентифікатора.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо курсор не містить жодних додаткових
результатів і **`false`** інакше.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Приклади

**Приклад #1 Приклад використання **MongoDB\Driver\Cursor::isDead()****

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://localhost:27017");$query u003d new MongoDB\Driver\Query([]);$bulk u003d new MongoDB\Driver\BulkWrite; bulk->insert(['x' u003d> 1]);$bulk->insert(['x' u003d> 2]);$bulk->insert(['x' u003d> 3]);$manager- >executeBulkWrite('db.collection', $bulk);$cursoru003du003d$manager->executeQuery('db.collection', $query);$iterator u003d new IteratorIterator($cursor);$iterator->rewind(); var_dump($cursor->isDead());$iterator->next();var_dump($cursor->isDead());$iterator->next();var_dump($cursor->isDead());$ iterator->next();var_dump($cursor->isDead());?> `

Результат виконання цього прикладу:

bool(false)
bool(false)
bool(false)
bool(true)

### Дивіться також

- [» Хвостові
курсори](https://www.mongodb.com/docs/manual/core/tailable-cursors/)
у посібнику MongoDB
- [» cursor.isExhausted()](https://www.mongodb.com/docs/manual/reference/method/cursor.isExhausted/)
у посібнику MongoDB
