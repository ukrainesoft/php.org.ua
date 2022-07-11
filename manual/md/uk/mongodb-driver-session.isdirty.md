- [«
MongoDB\Driver\Session::getTransactionState](mongodb-driver-session.gettransactionstate.md)
- [MongoDB\Driver\Session::isInTransaction
»](mongodb-driver-session.isintransaction.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Session](class.mongodb-driver-session.md)
- Повертає, чи сесія була позначена як брудна

# MongoDB\Driver\Session::isDirty

(mongodb \>u003d1.13.0)

MongoDB\Driver\Session::isDirty - Повертає, чи була сесія позначена
як брудна

### Опис

final public **MongoDB\Driver\Session::isDirty**(): bool

Повертає, чи була сесія позначена як брудна (тобто була вона
використано з командою, яка зіткнулася з мережевою помилкою).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція повертає, чи сесія була позначена як брудна.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
