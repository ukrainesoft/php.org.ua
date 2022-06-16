- [«
MongoDB\Driver\Session::endSession](mongodb-driver-session.endsession.md)
- [MongoDB\Driver\Session::getLogicalSessionId
»](mongodb-driver-session.getlogicalsessionid.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Session](class.mongodb-driver-session.md)
- Повертає час кластера для цього сеансу

# MongoDB\Driver\Session::getClusterTime

(mongodb \>u003d1.4.0)

MongoDB\Driver\Session::getClusterTime — Повертає час кластера для
цього сеансу

### Опис

final public **MongoDB\Driver\Session::getClusterTime**(): ?object

Повертає час кластеру для цього сеансу. Якщо сеанс не використовувався
для будь-якої операції та
[MongoDB\Driver\Session::advanceClusterTime()](mongodb-driver-session.advanceclustertime.md)
не був викликаний, час кластера дорівнюватиме **`null`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає час кластера для цього сеансу або **`null`**, якщо у сеансу
немає часу кластеру.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).

### Дивіться також

- [MongoDB\Driver\Session::advanceClusterTime()](mongodb-driver-session.advanceclustertime.md) -
Збільшує час кластера для сеансу
