- [«
MongoDB\Driver\ClientEncryption::encrypt](mongodb-driver-clientencryption.encrypt.md)
- [MongoDB\Driver\ServerApi::bsonSerialize
»](mongodb-driver-serverapi.bsonserialize.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас MongoDB\Driver\ServerApi

# Клас MongoDB\Driver\ServerApi

(mongodb \>u003d1.10.0)

## Вступ

## Огляд класів

final class **MongoDB\Driver\ServerApi** implements
[MongoDB\BSON\Serializable](class.mongodb-bson-serializable.md),
[Serializable](class.serializable.md) {

/\* Константи \*/

const string `MongoDB\Driver\ServerAPI::V1` u003d "1";

/\* Методи \*/

final public
[bsonSerialize](mongodb-driver-serverapi.bsonserialize.md)(): object

final public
[\_\_construct](mongodb-driver-serverapi.construct.md)(string
`$version`, bool `$strict` u003d **`null`**, bool `$deprecationErrors` u003d
**`null`**)

final public [serialize](mongodb-driver-serverapi.serialize.md)():
string

final public
[unserialize](mongodb-driver-serverapi.unserialize.md)(string
`$serialized`): void

}

## Зумовлені константи

**`MongoDB\Driver\ServerApi::V1`**
Server API версія 1

## Приклади

**Приклад #1 Приклад оголошення версії API у диспетчері**

` <?phpuse MongoDB\Driver\Manager;use MongoDB\Driver\ServerApi;$v1 u003d new ServerApi(ServerApi::v1);$manager u003d new Manager('mongodb://localhost:27017', [], serverApi' u003d> $v1]);$command u003d new MongoDB\Driver\Command(['buildInfo' u003d> 1]);try {    $cursor u003d $manager->executeCommand('admin', $command) (MongoDB\Driver\Exception $e) {    echo $e->getMessage(), "
";   exit;}/* Команда buildInfo повертає єдиний документ результату, на нам потрібно отримати доступ * до першого fol?bu|
";?> `

Результат виконання цього прикладу:

4.9.0-alpha7-49-gb968ca0

**Приклад #2 Приклад оголошення строгої версії API для менеджера**

У наступному прикладі встановлюється прапор strict, який повідомляє
серверу відхилити будь-яку команду, яка не є частиною оголошеної версії
API. Це призводить до помилки при виконанні команди buildInfo.

` <?phpuse MongoDB\Driver\Manager;use MongoDB\Driver\ServerApi;$v1 u003d new ServerApi(ServerApi::v1, true);$manager u003d new Manager('mongodb://localhost:27017', ['serverApi' u003d> $v1]);$command u003d new MongoDB\Driver\Command(['buildInfo' u003d> 1]);try {   $cursor u003d $manager->executeCommand('admin', $ } catch(MongoDB\Driver\Exception $e) {   echo $e->getMessage(), "
";   exit;}/* Команда buildInfo повертає єдиний документ результату, на нам потрібно отримати доступ * до першого fol?bu|
";?> `

Результат виконання цього прикладу:

Наведений apiStrict:true, але командний матеріалInfo is not in API Version 1

## Зміст

- [MongoDB\Driver\ServerApi::bsonSerialize](mongodb-driver-serverapi.bsonserialize.md)
— Повертає об'єкт для серіалізації BSON
- [MongoDB\Driver\ServerApi::\_\_construct](mongodb-driver-serverapi.construct.md)
— Створює новий примірник ServerApi
- [MongoDB\Driver\ServerApi::serialize](mongodb-driver-serverapi.serialize.md)
- Серіалізує ServerApi
- [MongoDB\Driver\ServerApi::unserialize](mongodb-driver-serverapi.unserialize.md)
- Десеріалізує ServerApi
