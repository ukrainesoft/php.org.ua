- [«
MongoDB\Driver\WriteConcern::unserialize](mongodb-driver-writeconcern.unserialize.md)
- [MongoDB\Driver\ReadPreference::bsonSerialize
»](mongodb-driver-readpreference.bsonserialize.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас MongoDB\Driver\ReadPreference

# Клас MongoDB\Driver\ReadPreference

(mongodb \>u003d1.0.0)

## Вступ

## Огляд класів

final class **MongoDB\Driver\ReadPreference** implements
[MongoDB\BSON\Serializable](class.mongodb-bson-serializable.md),
[Serializable](class.serializable.md) {

/\* Константи \*/

const int `RP_PRIMARY` u003d 1;

const int `RP_PRIMARY_PREFERRED` u003d 5;

const int `RP_SECONDARY` u003d 2;

const int `RP_SECONDARY_PREFERRED` u003d 6;

const int `RP_NEAREST` u003d 10;

const string `PRIMARY` u003d primary;

const string `PRIMARY_PREFERRED` u003d primaryPreferred;

const string `SECONDARY` u003d secondary;

const string `SECONDARY_PREFERRED` u003d secondaryPreferred;

const string `NEAREST` u003d nearest;

const int `NO_MAX_STALENESS` u003d -1;

const int `SMALLEST_MAX_STALENESS_SECONDS` u003d 90;

/\* Методи \*/

final public
[bsonSerialize](mongodb-driver-readpreference.bsonserialize.md)():
object

final public
[\_\_construct](mongodb-driver-readpreference.construct.md)(string\|int
`$mode`, array `$tagSets` u003d **`null`**, array `$options` u003d array())

final public [getHedge](mongodb-driver-readpreference.gethedge.md)():
?object

final public
[getMaxStalenessSeconds](mongodb-driver-readpreference.getmaxstalenessseconds.md)():
int

final public [getMode](mongodb-driver-readpreference.getmode.md)():
int

final public
[getModeString](mongodb-driver-readpreference.getmodestring.md)():
string

final public
[getTagSets](mongodb-driver-readpreference.gettagsets.md)(): array

final public
[serialize](mongodb-driver-readpreference.serialize.md)(): string

final public
[unserialize](mongodb-driver-readpreference.unserialize.md)(string
`$serialized`): void

}

## Зумовлені константи

**`MongoDB\Driver\ReadPreference::RP_PRIMARY`**
Усі операції зчитуються з первинного вузла набору реплік. Це
перевага читання за промовчанням для MongoDB.

**`MongoDB\Driver\ReadPreference::RP_PRIMARY_PREFERRED`**
У більшості ситуація операції зчитуються з первинного вузла, але якщо
він недоступний, операції зчитуються із вторинних членів.

**`MongoDB\Driver\ReadPreference::RP_SECONDARY`**
Усі операції зчитуються із вторинних членів набору реплік.

**`MongoDB\Driver\ReadPreference::RP_SECONDARY_PREFERRED`**
У більшості ситуація операції зчитуються з вторинних вузлів, але якщо
вони недоступні, операції зчитуються із первинного вузла.

**`MongoDB\Driver\ReadPreference::RP_NEAREST`**
Операції зчитуються з члена набору реплік із найменшою затримкою мережі,
незалежно від типу члена.

**`MongoDB\Driver\ReadPreference::PRIMARY`**
Усі операції з поточної репліки встановлені первинними. Це
перевага читання за промовчанням для MongoDB.

**`MongoDB\Driver\ReadPreference::PRIMARY_PREFERRED`**
У більшості випадків операції читаються з первинного вузла, але якщо він
недоступний, операції читаються із вторинних вузлів.

**`MongoDB\Driver\ReadPreference::SECONDARY`**
Усі операції читаються із вторинних вузлів набору реплік.

**`MongoDB\Driver\ReadPreference::SECONDARY_PREFERRED`**
Найчастіше операції читаються з вторинних вузлів, але якщо вони
недоступні, операції читаються із первинного.

**`MongoDB\Driver\ReadPreference::NEAREST`**
Операції зчитуються з вузла набору реплік з найменшою затримкою в
мережі, незалежно від типу.

**`MongoDB\Driver\ReadPreference::NO_MAX_STALENESS`**
Значення за замовчуванням для параметра ``maxStalenessSeconds'' щоб
вказати на обмеження на максимальне запізнення (staleness), що
означає, що драйвер не враховуватиме затримку вторинних вузлів при
вибір напряму для операції читання.

**`MongoDB\Driver\ReadPreference::SMALLEST_MAX_STALENESS_SECONDS`**
Мінімальне значення для параметра ``maxStalenessSeconds'` дорівнює 90
секунд. Драйвер оцінює запізнення (staleness) вторинних вузлів,
періодично перевіряючи останню дату запису кожного члена набору реплік.
Оскільки ці перевірки є нечастими, оцінка запізнення є
грубою. Таким чином, драйвер не може забезпечити максимальну величину
запізнення менше 90 секунд.

## Список змін

[TABLE]

## Зміст

- [MongoDB\Driver\ReadPreference::bsonSerialize](mongodb-driver-readpreference.bsonserialize.md)
— Повертає об'єкт серіалізації BSON
- [MongoDB\Driver\ReadPreference::\_\_construct](mongodb-driver-readpreference.construct.md)
— Створити новий ReadPreference
- [MongoDB\Driver\ReadPreference::getHedge](mongodb-driver-readpreference.gethedge.md)
— Повертає опцію "hedge" із ReadPreference
- [MongoDB\Driver\ReadPreference::getMaxStalenessSeconds](mongodb-driver-readpreference.getmaxstalenessseconds.md)
— Повертає параметр "maxStalenessSeconds" ReadPreference
- [MongoDB\Driver\ReadPreference::getMode](mongodb-driver-readpreference.getmode.md)
— Повертає параметр "mode" ReadPreference
- [MongoDB\Driver\ReadPreference::getModeString](mongodb-driver-readpreference.getmodestring.md)
- Повертає опцію "mode" об'єкта ReadPreference у вигляді рядка
- [MongoDB\Driver\ReadPreference::getTagSets](mongodb-driver-readpreference.gettagsets.md)
- Повертає параметр "tagSets" ReadPreference
- [MongoDB\Driver\ReadPreference::serialize](mongodb-driver-readpreference.serialize.md)
— Серіалізація ReadPreference
- [MongoDB\Driver\ReadPreference::unserialize](mongodb-driver-readpreference.unserialize.md)
- Десеріалізація ReadPreference
