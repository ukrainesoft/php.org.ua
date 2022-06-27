- [«
MongoDB\Driver\Session::getTransactionOptions](mongodb-driver-session.gettransactionoptions.md)
- [MongoDB\Driver\Session::isDirty
»](mongodb-driver-session.isdirty.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Session](class.mongodb-driver-session.md)
- Повертає статус транзакції для поточної сесії

# MongoDB\Driver\Session::getTransactionState

(mongodb \>u003d1.7.0)

MongoDB\Driver\Session::getTransactionState - Повертає статус
транзакції для поточної сесії

### Опис

final public **MongoDB\Driver\Session::getTransactionState**(): string

Повертає статус транзакції для сесії.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає статус транзакції для сесії.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Session::isInTransaction()](mongodb-driver-session.isintransaction.md) -
Визначає, чи відбувається зараз багатодокументна
транзакція
- [MongoDB\Driver\Session::getTransactionOptions()](mongodb-driver-session.gettransactionoptions.md) -
Повертає налаштування поточної транзакції
