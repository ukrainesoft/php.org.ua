- [«
MongoDB\Driver\Session::getClusterTime](mongodb-driver-session.getclustertime.md)
- [MongoDB\Driver\Session::getOperationTime
»](mongodb-driver-session.getoperationtime.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Session](class.mongodb-driver-session.md)
- Повертає логічний ідентифікатор сеансу для цього сеансу

# MongoDB\Driver\Session::getLogicalSessionId

(mongodb \>u003d1.4.0)

MongoDB\Driver\Session::getLogicalSessionId — Повертає логічний
ідентифікатор сеансу для цього сеансу

### Опис

final public **MongoDB\Driver\Session::getLogicalSessionId**(): object

Повертає логічний ідентифікатор сеансу для цього сеансу, який
може використовуватися для ідентифікації операцій сеансу сервера.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає логічний ідентифікатор сеансу цього сеансу.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
