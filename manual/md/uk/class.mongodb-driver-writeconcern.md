- [«
MongoDB\Driver\ServerApi::unserialize](mongodb-driver-serverapi.unserialize.md)
- [MongoDB\Driver\WriteConcern::bsonSerialize
»](mongodb-driver-writeconcern.bsonserialize.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас MongoDB\Driver\WriteConcern

# Клас MongoDB\Driver\WriteConcern

(mongodb \>u003d1.0.0)

## Вступ

**MongoDB\Driver\WriteConcern** визначає рівень надійності,
запитуваний MongoDB для операцій запису на автономний `mongod` або на
набір реплік або сегментовані кластери. У сегментованих
кластерах екземпляри `mongos` будуть передавати гарантії запису на
сегменти.

## Огляд класів

final class **MongoDB\Driver\WriteConcern** implements
[MongoDB\BSON\Serializable](class.mongodb-bson-serializable.md),
[Serializable](class.serializable.md) {

/\* Константи \*/

const string `MAJORITY` u003d "majority";

/\* Методи \*/

final public
[bsonSerialize](mongodb-driver-writeconcern.bsonserialize.md)():
object

final public
[\_\_construct](mongodb-driver-writeconcern.construct.md)(string\|int
`$w`, int `$wtimeout` u003d ?, bool `$journal` u003d ?)

final public
[getJournal](mongodb-driver-writeconcern.getjournal.md)(): ?bool

final public [getW](mongodb-driver-writeconcern.getw.md)():
string\|int\|null

final public
[getWtimeout](mongodb-driver-writeconcern.getwtimeout.md)():
int\|[MongoDB\BSON\Int64](class.mongodb-bson-int64.md)

final public [isDefault](mongodb-driver-writeconcern.isdefault.md)():
bool

final public [serialize](mongodb-driver-writeconcern.serialize.md)():
string

final public
[unserialize](mongodb-driver-writeconcern.unserialize.md)(string
`$serialized`): void

}

## Зумовлені константи

**`MongoDB\Driver\WriteConcern::MAJORITY`**
Більшість членів у наборі; арбітрів, члени, які не беруть участь у
голосуванні, пасивні члени, приховані члени та відкладені члени, всі вони
включені до визначення більшості гарантії запису.

## Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- |
| PECL mongodb 1.7.0 | Реалізує [Serializable](class.serializable.md). |
| PECL mongodb 1.2.0 | Реалізує [MongoDB\BSON\Serializable](class.mongodb-bson-serializable.md). |

## Зміст

- [MongoDB\Driver\WriteConcern::bsonSerialize](mongodb-driver-writeconcern.bsonserialize.md)
— Повертає об'єкт серіалізації BSON
- [MongoDB\Driver\WriteConcern::\_\_construct](mongodb-driver-writeconcern.construct.md)
- Створити новий WriteConcern
- [MongoDB\Driver\WriteConcern::getJournal](mongodb-driver-writeconcern.getjournal.md)
— Повертає опцію journal WriteConcern
- [MongoDB\Driver\WriteConcern::getW](mongodb-driver-writeconcern.getw.md)
- Повертає опцію "w" WriteConcern
- [MongoDB\Driver\WriteConcern::getWtimeout](mongodb-driver-writeconcern.getwtimeout.md)
- Повертає опцію "wtimeout" WriteConcern
- [MongoDB\Driver\WriteConcern::isDefault](mongodb-driver-writeconcern.isdefault.md)
— Перевіряє, чи є гарантія запису за замовчуванням
- [MongoDB\Driver\WriteConcern::serialize](mongodb-driver-writeconcern.serialize.md)
- Серіалізація WriteConcern
- [MongoDB\Driver\WriteConcern::unserialize](mongodb-driver-writeconcern.unserialize.md)
- Десеріалізація WriteConcern
