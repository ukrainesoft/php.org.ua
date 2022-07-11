- [«
MongoDB\Driver\Session::isDirty](mongodb-driver-session.isdirty.md)
- [MongoDB\Driver\Session::startTransaction
»](mongodb-driver-session.starttransaction.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Session](class.mongodb-driver-session.md)
- Визначає, чи відбувається зараз багатодокументна
транзакція

# MongoDB\Driver\Session::isInTransaction

(mongodb \>u003d1.6.0)

MongoDB\Driver\Session::isInTransaction - Визначає, чи відбувається в
на даний момент багатодокументна транзакція

### Опис

final public **MongoDB\Driver\Session::isInTransaction**(): boolean

Визначає, чи відбувається зараз у поточній сесії
багатодокументна транзакція. Вважається, що транзакція "відбувається прямо
зараз", якщо вона була запущена, але поки не була підтверджена ні
скасовано.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** або **`false`**.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Session::getTransactionState()](mongodb-driver-session.gettransactionstate.md) -
Повертає статус транзакції для поточної сесії
