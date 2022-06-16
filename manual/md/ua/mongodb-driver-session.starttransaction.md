- [«
MongoDB\Driver\Session::isInTransaction](mongodb-driver-session.isintransaction.md)
- [MongoDB\Driver\ClientEncryption
»](class.mongodb-driver-clientencryption.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Session](class.mongodb-driver-session.md)
- Запускає транзакцію

# MongoDB\Driver\Session::startTransaction

(mongodb \>u003d1.5.0)

MongoDB\Driver\Session::startTransaction - Запускає транзакцію

### Опис

final public **MongoDB\Driver\Session::startTransaction**(array
`$options` u003d ?): void

Запускає багатодокументну транзакцію, пов'язану із сеансом. В будь-який
момент часу ви можете мати не більше однієї відкритої транзакції для
сеансу. Після запуску транзакції об'єкт сеансу має бути переданий
кожної операції за допомогою опції "session" (наприклад,
[MongoDB\Driver\Manager::executeBulkWrite()](mongodb-driver-manager.executebulkwrite.md)),
щоб пов'язати цю операцію із транзакцією.

Транзакції можуть бути зафіксовані через
[MongoDB\Driver\Session::commitTransaction()](mongodb-driver-session.committransaction.md)
та перервані за допомогою
[MongoDB\Driver\Session::abortTransaction()](mongodb-driver-session.aborttransaction.md).
Транзакції також автоматично перериваються, коли сеанс закривається з
складання сміття або явно викликається
[MongoDB\Driver\Session::endSession()](mongodb-driver-session.endsession.md).

### Список параметрів

`options`
Параметри можуть бути передані як аргумент цього методу. Кожен
елемент у цьому масиві опцій перевизначає відповідну опцію з
опції ``defaultTransactionOptions'`, якщо вона встановлена під час запуску
сеансу з
[MongoDB\Driver\Manager::startSession()](mongodb-driver-manager.startsession.md).

[TABLE]

**options**

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Видає виняток
[MongoDB\Driver\Exception\CommandException](class.mongodb-driver-exception-commandexception.md),
якщо транзакція не може бути запущена через проблему на стороні
сервера (наприклад, не вдалося отримати блокування).
- Видає виняток
[MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md),
якщо транзакція не може бути запущена (наприклад, транзакція вже
була запущена).

### Список змін

| Версія | Опис |
|--------------------|---------------------------- ------------|
| PECL mongodb 1.6.0 | Додано параметр `maxCommitTimeMS`. |

### Дивіться також

- [MongoDB\Driver\Manager::startSession()](mongodb-driver-manager.startsession.md) -
Запуск нового клієнтського сеансу для використання з цим клієнтом
- [MongoDB\Driver\Session::commitTransaction()](mongodb-driver-session.committransaction.md) -
Фіксує транзакцію
- [MongoDB\Driver\Session::abortTransaction()](mongodb-driver-session.aborttransaction.md) -
Перериває транзакцію
