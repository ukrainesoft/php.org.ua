- [«db2_tables](function.db2-tables.md)
- [Встановлення та налаштування »](mongodb.setup.md)

- [PHP Manual](index.md)
- [Модулі для роботи з базами даних окремих
виробників](refs.database.vendors.md)
- Драйвер MongoDB

# Драйвер MongoDB

Цей модуль розроблено на основі бібліотек
[» libmongoc](https://github.com/mongodb/mongo-c-driver) та
[» libbson](https://github.com/mongodb/mongo-c-driver/tree/master/src/libbson).
Він надає мінімальне API для ключового функціоналу драйвера:
[команди](class.mongodb-driver-command.md),
[запити](class.mongodb-driver-query.md),
[записи](class.mongodb-driver-bulkwrite.md), [управління
з'єднанням](class.mongodb-driver-manager.md) та [серіалізація
BSON] (book.bson.md).

Саморобні бібліотеки PHP, які вимагають цей модуль, можуть надавати
високорівневі API, такі як: збирачі запитів, методи-помічники для
індивідуальних команд та GridFS. Розробники додатків повинні
розглянути питання про використання цього модуля спільно з
[» бібліотекою MongoDB
PHP](https://github.com/mongodb/mongo-php-library), яка реалізує
такі ж високорівневі драйвери API MongoDB, як і для інших мов.
Подібний поділ завдань дозволяє цьому драйверу сконцентруватися на
Основні завдання, що стоять перед ним - підвищення продуктивності.

- [Встановлення та налаштування](mongodb.setup.md)
- [Вимоги](mongodb.requirements.md)
- [Установка](mongodb.installation.md)
- [Налаштування під час виконання](mongodb.configuration.md)
- [Предвизначені константи](mongodb.constants.md)
- [Навчальні матеріали](mongodb.tutorial.md)
- [Використання бібліотеки PHP для MongoDB
(PHPLIB)](mongodb.tutorial.library.md)
- [Моніторинг продуктивності програми (Application
Performance Monitoring або APM)](mongodb.tutorial.apm.md)
- [Архітектура та внутрішній пристрій
драйвера](mongodb.architecture.md) — Огляд архітектури драйвера та
її особливостей
- [Архітектура](mongodb.overview.md) - Огляд архітектури
- [З'єднання](mongodb.connection-handling.md) — Обробка
з'єднання та сталість
- [Постійні дані](mongodb.persistence.md) — Серіалізація та
десеріалізація змінних PHP у MongoDB
- [Безпека](mongodb.security.md)
- [Атака за допомогою ін'єкцій у
запиту](mongodb.security.request_injection.md)
- [Атака за допомогою ін'єкцій у
скриптах](mongodb.security.script_injection.md)
- [MongoDB\Driver](book.mongodb.md) - Класи драйвера MongoDB
- [MongoDB\Driver\Manager](class.mongodb-driver-manager.md) -
Клас MongoDB\Driver\Manager
- [MongoDB\Driver\Command](class.mongodb-driver-command.md) -
Клас The MongoDB\Driver\Command
- [MongoDB\Driver\Query](class.mongodb-driver-query.md) - Клас
MongoDB\Driver\Query
- [MongoDB\Driver\BulkWrite](class.mongodb-driver-bulkwrite.md)
- Клас MongoDB\Driver\BulkWrite
- [MongoDB\Driver\Session](class.mongodb-driver-session.md) -
Клас MongoDB\Driver\Session
- [MongoDB\Driver\ClientEncryption](class.mongodb-driver-clientencryption.md)
- Клас MongoDB\Driver\ClientEncryption
- [MongoDB\Driver\ServerApi](class.mongodb-driver-serverapi.md)
- Клас MongoDB\Driver\ServerApi
- [MongoDB\Driver\WriteConcern](class.mongodb-driver-writeconcern.md)
- Клас MongoDB\Driver\WriteConcern
- [MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)
- Клас MongoDB\Driver\ReadPreference
- [MongoDB\Driver\ReadConcern](class.mongodb-driver-readconcern.md)
- Клас MongoDB\Driver\ReadConcern
- [MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md) -
Клас MongoDB\Driver\Cursor
- [MongoDB\Driver\CursorId](class.mongodb-driver-cursorid.md) -
Клас MongoDB\Driver\CursorId
- [MongoDB\Driver\CursorInterface](class.mongodb-driver-cursorinterface.md)
- Інтерфейс MongoDB\Driver\CursorInterface
- [MongoDB\Driver\Server](class.mongodb-driver-server.md) -
Клас MongoDB\Driver\Server
- [MongoDB\Driver\ServerDescription](class.mongodb-driver-serverdescription.md)
- Клас MongoDB\Driver\ServerDescription
- [MongoDB\Driver\TopologyDescription](class.mongodb-driver-topologydescription.md)
- Клас MongoDB\Driver\TopologyDescription
- [MongoDB\Driver\WriteConcernError](class.mongodb-driver-writeconcernerror.md)
- Клас The MongoDB\Driver\WriteConcernError
- [MongoDB\Driver\WriteError](class.mongodb-driver-writeerror.md)
- Клас MongoDB\Driver\WriteError
- [MongoDB\Driver\WriteResult](class.mongodb-driver-writeresult.md)
- Клас MongoDB\Driver\WriteResult
- [MongoDB\BSON](book.bson.md) — Класи типів BSON та функції
серіалізації
- [Функції](ref.bson.functions.md)
- [MongoDB\BSON\Binary](class.mongodb-bson-binary.md) - Клас
MongoDB\BSON\Binary
- [MongoDB\BSON\Decimal128](class.mongodb-bson-decimal128.md) -
Клас MongoDB\BSON\Decimal128
- [MongoDB\BSON\Javascript](class.mongodb-bson-javascript.md) -
Клас MongoDB\BSON\Javascript
- [MongoDB\BSON\MaxKey](class.mongodb-bson-maxkey.md) - Клас
MongoDB\BSON\MaxKey
- [MongoDB\BSON\MinKey](class.mongodb-bson-minkey.md) - Клас
MongoDB\BSON\MinKey
- [MongoDB\BSON\ObjectId](class.mongodb-bson-objectid.md) -
Клас MongoDB\BSON\ObjectId
- [MongoDB\BSON\Regex](class.mongodb-bson-regex.md) - Клас
MongoDB\BSON\Regex
- [MongoDB\BSON\Timestamp](class.mongodb-bson-timestamp.md) -
Клас MongoDB\BSON\Timestamp
- [MongoDB\BSON\UTCDateTime](class.mongodb-bson-utcdatetime.md)
- Клас MongoDB\BSON\UTCDateTime
- [MongoDB\BSON\Type](class.mongodb-bson-type.md) - Інтерфейс
MongoDB\BSON\Type
- [MongoDB\BSON\Persistable](class.mongodb-bson-persistable.md)
- Інтерфейс MongoDB\BSON\Persistable
- [MongoDB\BSON\Serializable](class.mongodb-bson-serializable.md)
- Інтерфейс MongoDB\BSON\Serializable
- [MongoDB\BSON\Unserializable](class.mongodb-bson-unserializable.md)
- Інтерфейс MongoDB\BSON\Unserializable
- [MongoDB\BSON\BinaryInterface](class.mongodb-bson-binaryinterface.md)
- Інтерфейс MongoDB\BSON\BinaryInterface
- [MongoDB\BSON\Decimal128Interface](class.mongodb-bson-decimal128interface.md)
- Інтерфейс MongoDB\BSON\Decimal128Interface
- [MongoDB\BSON\JavascriptInterface](class.mongodb-bson-javascriptinterface.md)
- Інтерфейс MongoDB\BSON\JavascriptInterface
- [MongoDB\BSON\MaxKeyInterface](class.mongodb-bson-maxkeyinterface.md)
- Інтерфейс MongoDB\BSON\MaxKeyInterface
- [MongoDB\BSON\MinKeyInterface](class.mongodb-bson-minkeyinterface.md)
- Інтерфейс MongoDB\BSON\MinKeyInterface
- [MongoDB\BSON\ObjectIdInterface](class.mongodb-bson-objectidinterface.md)
- Інтерфейс MongoDB\BSON\ObjectIdInterface
- [MongoDB\BSON\RegexInterface](class.mongodb-bson-regexinterface.md)
- Інтерфейс MongoDB\BSON\RegexInterface
- [MongoDB\BSON\TimestampInterface](class.mongodb-bson-timestampinterface.md)
- Інтерфейс MongoDB\BSON\TimestampInterface
- [MongoDB\BSON\UTCDateTimeInterface](class.mongodb-bson-utcdatetimeinterface.md)
- Інтерфейс MongoDB\BSON\UTCDateTimeInterface
- [MongoDB\BSON\DBPointer](class.mongodb-bson-dbpointer.md) -
Клас MongoDB\BSON\DBPointer (застарілий)
- [MongoDB\BSON\Int64](class.mongodb-bson-int64.md) - Клас
MongoDB\BSON\Int64
- [MongoDB\BSON\Symbol](class.mongodb-bson-symbol.md) - Клас
MongoDB\BSON\Symbol (застарілий)
- [MongoDB\BSON\Undefined](class.mongodb-bson-undefined.md) -
Клас MongoDB\BSON\Undefined (застаріло)
- [MongoDB\Driver\Monitoring](mongodb.monitoring.md) - Класи
моніторингу та функції передплатника
- [Функції](ref.monitoring.functions.md)
- [MongoDB\Driver\Monitoring\CommandFailedEvent](class.mongodb-driver-monitoring-commandfailedevent.md)
- Клас MongoDB\Driver\Monitoring\CommandFailedEvent
- [MongoDB\Driver\Monitoring\CommandStartedEvent](class.mongodb-driver-monitoring-commandstartedevent.md)
- Клас MongoDB\Driver\Monitoring\CommandStartedEvent
- [MongoDB\Driver\Monitoring\CommandSucceededEvent](class.mongodb-driver-monitoring-commandsucceededevent.md)
- Клас MongoDB\Driver\Monitoring\CommandSucceededEvent
- [MongoDB\Driver\Monitoring\ServerChangedEvent](class.mongodb-driver-monitoring-serverchangedevent.md)
- Клас MongoDB\Driver\Monitoring\ServerChangedEvent
- [MongoDB\Driver\Monitoring\ServerClosedEvent](class.mongodb-driver-monitoring-serverclosedevent.md)
- Клас MongoDB\Driver\Monitoring\ServerClosedEvent
- [MongoDB\Driver\Monitoring\ServerOpeningEvent](class.mongodb-driver-monitoring-serveropeningevent.md)
- Клас MongoDB\Driver\Monitoring\ServerOpeningEvent
- [MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent](class.mongodb-driver-monitoring-serverheartbeatfailedevent.md)
- Клас MongoDB\Driver\Monitoring\ServerHeartbeatFailedEvent
- [MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent](class.mongodb-driver-monitoring-serverheartbeatstartedevent.md)
- Клас MongoDB\Driver\Monitoring\ServerHeartbeatStartedEvent
- [MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent](class.mongodb-driver-monitoring-serverheartbeatsucceededevent.md)
- Клас MongoDB\Driver\Monitoring\ServerHeartbeatSucceededEvent
- [MongoDB\Driver\Monitoring\TopologyChangedEvent](class.mongodb-driver-monitoring-topologychangedevent.md)
- Клас MongoDB\Driver\Monitoring\TopologyChangedEvent
- [MongoDB\Driver\Monitoring\TopologyClosedEvent](class.mongodb-driver-monitoring-topologyclosedevent.md)
- Клас MongoDB\Driver\Monitoring\TopologyClosedEvent
- [MongoDB\Driver\Monitoring\TopologyOpeningEvent](class.mongodb-driver-monitoring-topologyopeningevent.md)
- Клас MongoDB\Driver\Monitoring\TopologyOpeningEvent
- [MongoDB\Driver\Monitoring\CommandSubscriber](class.mongodb-driver-monitoring-commandsubscriber.md)
- Інтерфейс The MongoDB\Driver\Monitoring\CommandSubscriber
- [MongoDB\Driver\Monitoring\SDAMSubscriber](class.mongodb-driver-monitoring-sdamsubscriber.md)
- Інтерфейс MongoDB\Driver\Monitoring\SDAMSubscriber
- [MongoDB\Driver\Monitoring\Subscriber](class.mongodb-driver-monitoring-subscriber.md)
- Інтерфейс MongoDB\Driver\Monitoring\Subscriber
- [MongoDB\Driver\Exception](mongodb.exceptions.md) - Класи
винятків
- [MongoDB\Driver\Exception\AuthenticationException](class.mongodb-driver-exception-authenticationexception.md)
- Клас MongoDB\Driver\Exception\AuthenticationException
- [MongoDB\Driver\Exception\BulkWriteException](class.mongodb-driver-exception-bulkwriteexception.md)
- Клас MongoDB\Driver\Exception\BulkWriteException
- [MongoDB\Driver\Exception\CommandException](class.mongodb-driver-exception-commandexception.md)
- Клас MongoDB\Driver\Exception\CommandException
- [MongoDB\Driver\Exception\ConnectionException](class.mongodb-driver-exception-connectionexception.md)
- Клас MongoDB\Driver\Exception\ConnectionException
- [MongoDB\Driver\Exception\ConnectionTimeoutException](class.mongodb-driver-exception-connectiontimeoutexception.md)
- Клас MongoDB\Driver\Exception\ConnectionTimeoutException
- [MongoDB\Driver\Exception\EncryptionException](class.mongodb-driver-exception-encryptionexception.md)
- Клас MongoDB\Driver\Exception\EncryptionException
- [MongoDB\Driver\Exception\Exception](class.mongodb-driver-exception-exception.md)
- Інтерфейс MongoDB\Driver\Exception\Exception
- [MongoDB\Driver\Exception\ExecutionTimeoutException](class.mongodb-driver-exception-executiontimeoutexception.md)
- Клас MongoDB\Driver\Exception\ExecutionTimeoutException
- [MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md)
- Клас MongoDB\Driver\Exception\InvalidArgumentException
- [MongoDB\Driver\Exception\LogicException](class.mongodb-driver-exception-logicexception.md)
- Клас MongoDB\Driver\Exception\LogicException
- [MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md)
- Клас MongoDB\Driver\Exception\RuntimeException
- [MongoDB\Driver\Exception\ServerException](class.mongodb-driver-exception-serverexception.md)
- Клас MongoDB\Driver\Exception\ServerException
- [MongoDB\Driver\Exception\SSLConnectionException](class.mongodb-driver-exception-sslconnectionexception.md)
- Клас MongoDB\Driver\Exception\SSLConnectionException
(застарілий)
- [MongoDB\Driver\Exception\UnexpectedValueException](class.mongodb-driver-exception-unexpectedvalueexception.md)
- Клас MongoDB\Driver\Exception\UnexpectedValueException
- [MongoDB\Driver\Exception\WriteException](class.mongodb-driver-exception-writeexception.md)
- Клас MongoDB\Driver\Exception\WriteException
- [Class Tree](mongodb.exceptions.tree.md) - MongoDB Exception
Class Tree
