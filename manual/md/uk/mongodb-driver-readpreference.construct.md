- [«
MongoDB\Driver\ReadPreference::bsonSerialize](mongodb-driver-readpreference.bsonserialize.md)
- [MongoDB\Driver\ReadPreference::getHedge
»](mongodb-driver-readpreference.gethedge.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)
- Створити новий ReadPreference

# MongoDB\Driver\ReadPreference::\_\_construct

(mongodb \>u003d1.0.0)

MongoDB\Driver\ReadPreference::\_\_construct - Створити новий
ReadPreference

### Опис

final public
**MongoDB\Driver\ReadPreference::\_\_construct**(string\|int `$mode`,
array `$tagSets` u003d **`null`**, array `$options` u003d array())

Створює новий
[MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md),
який є незмінним об'єктом значення.

### Список параметрів

`mode`
| Значення | Опис |
|------------------------------------------------- ---------------------------------------|---------- -------------------------------------------------- -------------------------------------------------- ---------------------------------|
| **`MongoDB\Driver\ReadPreference::RP_PRIMARY`** or `"primary"` | Усі операції зчитується з первинного вузла набору реплік. Це перевага для читання за промовчанням для MongoDB. |
| **`MongoDB\Driver\ReadPreference::RP_PRIMARY_PREFERRED`** or `"primaryPreferred"` | У більшості ситуацій операції зчитуються з первинного вузла, але якщо він недоступний, операції зчитуються з вторинних вузлів. |
| **`MongoDB\Driver\ReadPreference::RP_SECONDARY`** або `"secondary"` | Усі операції зчитуються із вторинних вузлів набору реплік. |
| **`MongoDB\Driver\ReadPreference::RP_SECONDARY_PREFERRED`** або `"secondaryPreferred"` | Більшість ситуацій операції зчитуються з вторинних членів, але якщо вторинні члени недоступні, операції зчитуються з первинного вузла. |
| **`MongoDB\Driver\ReadPreference::RP_NEAREST`** or `"nearest"` | Операції зчитуються з члена набору реплік із найменшою затримкою мережі незалежно від типу члена. |

**Режим переваги читання**

`tagSets`
Набори тегів дозволяють настроювати операції читання для певних
членів набір реплік. Цей параметр має бути масивом асоціативних
масивів, кожен з яких містить нуль або кілька пар
ключ-значення. При виборі сервера для читання драйвер намагається
вибрати вузол, що має всі теги в наборі (тобто асоціативний масив пар
ключ-значення). Якщо вибір не вдався, the driver will attempt subsequent
sets. Порожній набір тегів (`array()`) буде відповідати будь-якому вузлу та
може використовуватись як резервний.

Теги не сумісні з режимом
**`MongoDB\Driver\ReadPreference::RP_PRIMARY`**, і, як правило,
застосовується лише при виборі вторинного члена набору для операції
читання. Однак режим **`MongoDB\Driver\ReadPreference::RP_NEAREST`** в
поєднанні з набором тегів, вибирає відповідний член з найменшою
затримкою мережі. Цей член може бути первинним чи вторинним.

`options`
[TABLE]

**options**

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- При некоректному `mode` викидає
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md)
- Якщо `tagSets` надається як первинна перевага читання або
має неправильний формат (тобто не масив з нуля або більше
документів) викидає
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Якщо опція ``maxStalenessSeconds'` надається для первинного
переваги читання або знаходиться поза діапазоном, викидає
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------|
| PECL mongodb 1.8.0 | Доданий параметр ``hedge'`. |
| PECL mongodb 1.3.0 | Аргумент `mode` тепер приймає рядкове значення, яке відповідає URI-опції ``readPreference'` для [MongoDB\Driver\Manager::\_\_construct()](mongodb-driver-manager.construct.md). |
| PECL mongodb 1.2.0 | Доданий третій аргумент `options`, який підтримує параметр `maxStalenessSeconds`. |

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\ReadPreference::\_\_construct()****

`<?php/* Вважати перевагу вторинний вузол, але у випадку відмови відступити до первинному. */var_dump(new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::RP_SECONDARY_PREFERRED));/* Переважати вузол в Нью-Йоркському центрі обробки даних з мінімальною затримкою. */var_dump(new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::RP_NEAREST, [['dc' u003d> 'ny']]));); основного */var_dump(new MongoDB\Driver\ReadPreference(MongoDB\Driver\ReadPreference::RP_SECONDARY, null, ['maxStalenessSeconds' u003d> 120]));/* Явно включити \ReadPreference(MongoDB\Driver\ReadPreference::RP_SECONDARY, null, ['hedge' u003d> ['enabled' u003d> true]])));?> `

Результат виконання цього прикладу:

object(MongoDB\Driver\ReadPreference)#1 (1) {
["mode"]u003d>
string(18) "secondaryPreferred"
}
object(MongoDB\Driver\ReadPreference)#1 (2) {
["mode"]u003d>
string(7) "nearest"
["tags"]u003d>
array(1) {
[0]u003d>
object(stdClass)#2 (1) {
["dc"]u003d>
string(2) "ny"
}
}
}
object(MongoDB\Driver\ReadPreference)#1 (2) {
["mode"]u003d>
string(9) "secondary"
["maxStalenessSeconds"]u003d>
int(120)
}
object(MongoDB\Driver\ReadPreference)#1 (2) {
["mode"]u003d>
string(9) "secondary"
["hedge"]u003d>
object(stdClass)#1 (1) {
["enabled"]u003d>
bool(true)
}
}

### Дивіться також

- [»Керівництво за перевагою
читання](https://www.mongodb.com/docs/manual/core/read-preference/)
