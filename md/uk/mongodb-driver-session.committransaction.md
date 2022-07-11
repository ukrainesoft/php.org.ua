- [«
MongoDB\Driver\Session::advanceOperationTime](mongodb-driver-session.advanceoperationtime.md)
- [MongoDB\Driver\Session::\_\_construct
»](mongodb-driver-session.construct.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Session](class.mongodb-driver-session.md)
- Фіксує транзакцію

# MongoDB\Driver\Session::commitTransaction

(mongodb \>u003d1.5.0)

MongoDB\Driver\Session::commitTransaction - Фіксує транзакцію

### Опис

final public **MongoDB\Driver\Session::commitTransaction**(): void

Зберігає зміни, внесені операціями до багатодокументної транзакції
та завершує транзакцію. До фіксації жодна зміна даних, зроблених
з транзакції, не буде видно за межами транзакції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Видає виняток
[MongoDB\Driver\Exception\CommandException](class.mongodb-driver-exception-commandexception.md),
якщо сервер не зміг зафіксувати транзакцію (наприклад, через
конфліктів, проблем із мережею). У випадку, якщо виняток
[MongoDB\Driver\Exception\CommandException::getResultDocument()](mongodb-driver-commandexception.getresultdocument.md)
має елемент ``errorLabels'`, і цей масив містить значення
``TransientTransactionError'` або
`"UnUnknownTransactionCommitResult"`, можна повторити спробу *всієї*
транзакції. У нових версіях драйвера замість цього слід
використовувати
[MongoDB\Driver\Exception\RuntimeException::hasErrorLabel()](mongodb-driver-runtimeexception.haserrorlabel.md)
для перевірки цієї ситуації.
- Видає виняток
[MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md),
якщо транзакція не може бути зафіксована (наприклад, транзакція не
була запущена).

### Дивіться також

- [MongoDB\Driver\Manager::startSession()](mongodb-driver-manager.startsession.md) -
Запуск нового клієнтського сеансу для використання з цим клієнтом
- [MongoDB\Driver\Session::abortTransaction()](mongodb-driver-session.aborttransaction.md) -
Перериває транзакцію
- [MongoDB\Driver\Session::startTransaction()](mongodb-driver-session.starttransaction.md) -
Запускає транзакцію
- [MongoDB\Driver\Exception\RuntimeException::hasErrorLabel()](mongodb-driver-runtimeexception.haserrorlabel.md) -
Повертає, чи мітка помилки пов'язана з винятком
