- [«
MongoDB\Driver\BulkWrite::update](mongodb-driver-bulkwrite.update.md)
- [MongoDB\Driver\Session::abortTransaction
»](mongodb-driver-session.aborttransaction.md)

- [PHP Manual](index.md)
- [MongoDB\Driver](book.mongodb.md)
- Клас MongoDB\Driver\Session

# Клас MongoDB\Driver\Session

(mongodb \>u003d1.4.0)

## Вступ

Клас **MongoDB\Driver\Session** представляє клієнтський сеанс та
повертається
[MongoDB\Driver\Manager::startSession()](mongodb-driver-manager.startsession.md).
Команди, запити та операції запису можуть бути пов'язані з сеансом.

## Огляд класів

final class **MongoDB\Driver\Session** {

/\* Константи \*/

const string `TRANSACTION_NONE` u003d none;

const string `TRANSACTION_STARTING` u003d starting;

const string `TRANSACTION_IN_PROGRESS` u003d in_progress;

const string `TRANSACTION_COMMITTED` u003d committed;

const string `TRANSACTION_ABORTED` u003d aborted;

/\* Методи \*/

final public
[abortTransaction](mongodb-driver-session.aborttransaction.md)(): void

final public
[advanceClusterTime](mongodb-driver-session.advanceclustertime.md)(array\|object
`$clusterTime`): void

final public
[advanceOperationTime](mongodb-driver-session.advanceoperationtime.md)([MongoDB\BSON\TimestampInterface](class.mongodb-bson-timestampinterface.md)
`$operationTime`): void

final public
[commitTransaction](mongodb-driver-session.committransaction.md)():
void

final private [\_\_construct](mongodb-driver-session.construct.md)()

final public [endSession](mongodb-driver-session.endsession.md)():
void

final public
[getClusterTime](mongodb-driver-session.getclustertime.md)(): ?object

final public
[getLogicalSessionId](mongodb-driver-session.getlogicalsessionid.md)():
object

final public
[getOperationTime](mongodb-driver-session.getoperationtime.md)():
?[MongoDB\BSON\Timestamp](class.mongodb-bson-timestamp.md)

final public [getServer](mongodb-driver-session.getserver.md)():
?[MongoDB\Driver\Server](class.mongodb-driver-server.md)

final public
[getTransactionOptions](mongodb-driver-session.gettransactionoptions.md)():
?array

final public
[getTransactionState](mongodb-driver-session.gettransactionstate.md)():
string

final public [isDirty](mongodb-driver-session.isdirty.md)(): bool

final public
[isInTransaction](mongodb-driver-session.isintransaction.md)():
boolean

final public
[startTransaction](mongodb-driver-session.starttransaction.md)(array
`$options` u003d ?): void

}

## Зумовлені константи

**`MongoDB\Driver\Session::TRANSACTION_NONE`**
Немає транзакції у процесі.

**`MongoDB\Driver\Session::TRANSACTION_STARTING`**
Транзакцію було розпочато, але на сервер не було надіслано жодної
операції.

**`MongoDB\Driver\Session::TRANSACTION_IN_PROGRESS`**
Транзакція у процесі.

**`MongoDB\Driver\Session::TRANSACTION_COMMITTED`**
Транзакцію було зафіксовано.

**`MongoDB\Driver\Session::TRANSACTION_ABORTED`**
Транзакцію було перервано.

## Зміст

- [MongoDB\Driver\Session::abortTransaction](mongodb-driver-session.aborttransaction.md)
- Перериває транзакцію
- [MongoDB\Driver\Session::advanceClusterTime](mongodb-driver-session.advanceclustertime.md)
- Збільшує час кластера для сеансу
- [MongoDB\Driver\Session::advanceOperationTime](mongodb-driver-session.advanceoperationtime.md)
- Збільшує час операції для сеансу
- [MongoDB\Driver\Session::commitTransaction](mongodb-driver-session.committransaction.md)
- Фіксує транзакцію
- [MongoDB\Driver\Session::\_\_construct](mongodb-driver-session.construct.md)
- Створює новий сеанс (не використовується)
- [MongoDB\Driver\Session::endSession](mongodb-driver-session.endsession.md)
- Завершує сеанс
- [MongoDB\Driver\Session::getClusterTime](mongodb-driver-session.getclustertime.md)
— Повертає час кластера для цього сеансу
- [MongoDB\Driver\Session::getLogicalSessionId](mongodb-driver-session.getlogicalsessionid.md)
— Повертає логічний ідентифікатор сеансу для цього сеансу
- [MongoDB\Driver\Session::getOperationTime](mongodb-driver-session.getoperationtime.md)
— Повертає час операції для цього сеансу
- [MongoDB\Driver\Session::getServer](mongodb-driver-session.getserver.md)
— Повертає сервер, до якого прив'язана поточна сесія.
- [MongoDB\Driver\Session::getTransactionOptions](mongodb-driver-session.gettransactionoptions.md)
— Повертає установки поточної транзакції
- [MongoDB\Driver\Session::getTransactionState](mongodb-driver-session.gettransactionstate.md)
— Повертає статус транзакції для поточної сесії
- [MongoDB\Driver\Session::isDirty](mongodb-driver-session.isdirty.md)
— Повертає, чи сесія була позначена як брудна
- [MongoDB\Driver\Session::isInTransaction](mongodb-driver-session.isintransaction.md)
— Визначає, чи наразі відбувається багатодокументна
транзакція
- [MongoDB\Driver\Session::startTransaction](mongodb-driver-session.starttransaction.md)
- Запускає транзакцію
