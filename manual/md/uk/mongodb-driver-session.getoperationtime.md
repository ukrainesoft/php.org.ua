- [«
MongoDB\Driver\Session::getLogicalSessionId](mongodb-driver-session.getlogicalsessionid.md)
- [MongoDB\Driver\Session::getServer
»](mongodb-driver-session.getserver.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Session](class.mongodb-driver-session.md)
- Повертає час операції для цього сеансу

# MongoDB\Driver\Session::getOperationTime

(mongodb \>u003d1.4.0)

MongoDB\Driver\Session::getOperationTime — Повертає час операції для
цього сеансу

### Опис

final public **MongoDB\Driver\Session::getOperationTime**():
?[MongoDB\BSON\Timestamp](class.mongodb-bson-timestamp.md)

Повертає час операції для цього сеансу. Якщо сеанс не використовувався
ні для якої операції, і
[MongoDB\Driver\Session::advanceOperationTime()](mongodb-driver-session.advanceoperationtime.md)
не був викликаний, час операції дорівнюватиме **`null`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає час операції для цього сеансу або **`null`**, якщо у сеансу
немає часу операції.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Session::advanceOperationTime()](mongodb-driver-session.advanceoperationtime.md) -
Збільшує час операції для сеансу
