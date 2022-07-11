- [«MongoDB \ Driver] (book.mongodb.md)
- [MongoDB\Driver\Manager::addSubscriber
»](mongodb-driver-manager.addsubscriber.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас MongoDB\Driver\Manager

# Клас MongoDB\Driver\Manager

(mongodb \>u003d1.0.0)

## Вступ

Клас **MongoDB\Driver\Manager** є основною точкою входу в
модуль. Він відповідає за підтримку з'єднань з MongoDB (будь то
автономний сервер, набір реплік або розподілений кластер).

Під час ініціалізації класу Manager не підключено до MongoDB.
Це означає, що **MongoDB\Driver\Manager** завжди може бути створений,
навіть якщо сервери MongoDB не працюють.

Будь-який запис або запит викидатимуть виключення з'єднання,
оскільки з'єднання створюються "ліниво" (на вимогу). Сервер MongoDB
також може бути недоступним протягом усього часу виконання скрипту.
Тому важливо, щоб усі дії з Manager були загорнуті в блок
try/catch.

## Огляд класів

final class **MongoDB\Driver\Manager** {

/\* Методи \*/

final public
[addSubscriber](mongodb-driver-manager.addsubscriber.md)([MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md)
`$subscriber`): void

final public
[\_\_construct](mongodb-driver-manager.construct.md)(string `$uri` u003d
"mongodb://127.0.0.1/", array `$uriOptions` u003d array(), array
`$driverOptions` u003d array())

final public
[createClientEncryption](mongodb-driver-manager.createclientencryption.md)(array
`$options`):
[MongoDB\Driver\ClientEncryption](class.mongodb-driver-clientencryption.md)

final public
[executeBulkWrite](mongodb-driver-manager.executebulkwrite.md)(string
`$namespace`,
[MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md) `$bulk`,
array `$options` u003d array()):
[MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)

final public
[executeCommand](mongodb-driver-manager.executecommand.md)(string
`$db`, [MongoDB\Driver\Command](class.mongodb-driver-command.md)
`$command`, array `$options` u003d array()):
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)

final public
[executeQuery](mongodb-driver-manager.executequery.md)(string
`$namespace`, [MongoDB\Driver\Query](class.mongodb-driver-query.md)
`$query`, array `$options` u003d array()):
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)

final public
[executeReadCommand](mongodb-driver-manager.executereadcommand.md)(string
`$db`, [MongoDB\Driver\Command](class.mongodb-driver-command.md)
`$command`, array `$options` u003d array()):
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)

final public
[executeReadWriteCommand](mongodb-driver-manager.executereadwritecommand.md)(string
`$db`, [MongoDB\Driver\Command](class.mongodb-driver-command.md)
`$command`, array `$options` u003d array()):
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)

final public
[executeWriteCommand](mongodb-driver-manager.executewritecommand.md)(string
`$db`, [MongoDB\Driver\Command](class.mongodb-driver-command.md)
`$command`, array `$options` u003d array()):
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)

final public
[getEncryptedFieldsMap](mongodb-driver-manager.getencryptedfieldsmap.md)():
array\|object\|null

final public
[getReadConcern](mongodb-driver-manager.getreadconcern.md)():
[MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md)

final public
[getReadPreference](mongodb-driver-manager.getreadpreference.md)():
[MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)

final public [getServers](mongodb-driver-manager.getservers.md)():
array

final public
[getWriteConcern](mongodb-driver-manager.getwriteconcern.md)():
[MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)

final public
[removeSubscriber](mongodb-driver-manager.removesubscriber.md)([MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md)
`$subscriber`): void

final public
[selectServer](mongodb-driver-manager.selectserver.md)(?[MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)
`$readPreference` u003d **`null`**):
[MongoDB\Driver\Server](class.mongodb-driver-server.md)

final public
[startSession](mongodb-driver-manager.startsession.md)(array
`$options` u003d ?):
[MongoDB\Driver\Session](class.mongodb-driver-session.md)

}

## Приклади

**Приклад #1 Простий приклад використання
[MongoDB\Driver\Manager::\_\_construct()](mongodb-driver-manager.construct.md)**

Виводить різну інформацію про **MongoDB\Driver\Manager** за допомогою
функції [var_dump()](function.var-dump.md). Це може бути корисно для
налагодження, щоб подивитися як драйвер бачить налаштування MongoDB і які
опції використовуються.

` <?php$manager u003d new MongoDB\Driver\Manager('mongodb://localhost:27017');var_dump($manager);?> `

Результатом виконання цього прикладу буде щось подібне:

object(MongoDB\Driver\Manager)#1 (2) {
["uri"]u003d>
string(26) "mongodb://127.0.0.1:27017/"
["cluster"]u003d>
array(0) {
}
}

## Зміст

- [MongoDB\Driver\Manager::addSubscriber](mongodb-driver-manager.addsubscriber.md)
— Реєструє передплатника на подію моніторингу на даному об'єкті
Manager
- [MongoDB\Driver\Manager::\_\_construct](mongodb-driver-manager.construct.md)
- Створює новий Manager MongoDB
- [MongoDB\Driver\Manager::createClientEncryption](mongodb-driver-manager.createclientencryption.md)
— Створення нового об'єкта ClientEncryption
- [MongoDB\Driver\Manager::executeBulkWrite](mongodb-driver-manager.executebulkwrite.md)
— Виконує одну або кілька операцій запису
- [MongoDB\Driver\Manager::executeCommand](mongodb-driver-manager.executecommand.md)
- Виконує команду бази даних
- [MongoDB\Driver\Manager::executeQuery](mongodb-driver-manager.executequery.md)
— Виконує запит до бази даних
- [MongoDB\Driver\Manager::executeReadCommand](mongodb-driver-manager.executereadcommand.md)
- Виконує команду бази даних, яка читає
- [MongoDB\Driver\Manager::executeReadWriteCommand](mongodb-driver-manager.executereadwritecommand.md)
— Виконує команду бази даних, яка читає та пише
- [MongoDB\Driver\Manager::executeWriteCommand](mongodb-driver-manager.executewritecommand.md)
- Виконує команду бази даних, яка пише
- [MongoDB\Driver\Manager::getEncryptedFieldsMap](mongodb-driver-manager.getencryptedfieldsmap.md)
— Повертає опцію автоматичного шифрування encryptedFieldsMap для
Manager
- [MongoDB\Driver\Manager::getReadConcern](mongodb-driver-manager.getreadconcern.md)
— Повертає ReadConcern для Manager
- [MongoDB\Driver\Manager::getReadPreference](mongodb-driver-manager.getreadpreference.md)
— Повертає ReadPreference для Manager
- [MongoDB\Driver\Manager::getServers](mongodb-driver-manager.getservers.md)
— Повертає сервери, до яких підключено менеджера
- [MongoDB\Driver\Manager::getWriteConcern](mongodb-driver-manager.getwriteconcern.md)
— Повертає WriteConcern для Manager
- [MongoDB\Driver\Manager::removeSubscriber](mongodb-driver-manager.removesubscriber.md)
— Скасує реєстрацію передплатника на подію моніторингу в цьому
об'єкті Manager
- [MongoDB\Driver\Manager::selectServer](mongodb-driver-manager.selectserver.md)
— Вибрати сервер, який відповідає перевагам читання
- [MongoDB\Driver\Manager::startSession](mongodb-driver-manager.startsession.md)
— Запускає новий сеанс клієнта для використання з цим клієнтом
