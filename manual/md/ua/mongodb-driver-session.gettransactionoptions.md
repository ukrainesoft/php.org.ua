- [«
MongoDB\Driver\Session::getServer](mongodb-driver-session.getserver.md)
- [MongoDB\Driver\Session::getTransactionState
»](mongodb-driver-session.gettransactionstate.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Session](class.mongodb-driver-session.md)
- Повертає налаштування поточної транзакції

# MongoDB\Driver\Session::getTransactionOptions

(mongodb \>u003d1.7.0)

MongoDB\Driver\Session::getTransactionOptions — Повертає установки
поточної транзакції

### Опис

final public **MongoDB\Driver\Session::getTransactionOptions**(): ?array

Повертає установки поточної транзакції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив, що містить налаштування поточної транзакції, або
**`null`**, якщо транзакція не стартована.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Session::getTransactionState()](mongodb-driver-session.gettransactionstate.md) -
Повертає статус транзакції для поточної сесії
