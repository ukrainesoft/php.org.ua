- [«MongoDB\Driver\Session](class.mongodb-driver-session.md)
- [MongoDB\Driver\Session::advanceClusterTime
»](mongodb-driver-session.advanceclustertime.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Session](class.mongodb-driver-session.md)
- перериває транзакцію

# MongoDB\Driver\Session::abortTransaction

(mongodb \>u003d1.5.0)

MongoDB\Driver\Session::abortTransaction - Перериває транзакцію

### Опис

final public **MongoDB\Driver\Session::abortTransaction**(): void

Завершує багатодокументну транзакцію та відкочує будь-які зміни
даних, зроблених операціями всередині транзакції. Тобто транзакція
закінчується без збереження будь-яких змін, внесених операціями
у транзакції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Видає виняток
[MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md),
якщо транзакція не може бути перервана (наприклад, транзакція не була
розпочато).

### Дивіться також

- [MongoDB\Driver\Manager::startSession()](mongodb-driver-manager.startsession.md) -
Запуск нового клієнтського сеансу для використання з цим клієнтом
- [MongoDB\Driver\Session::commitTransaction()](mongodb-driver-session.committransaction.md) -
Фіксує транзакцію
- [MongoDB\Driver\Session::startTransaction()](mongodb-driver-session.starttransaction.md) -
Запускає транзакцію
