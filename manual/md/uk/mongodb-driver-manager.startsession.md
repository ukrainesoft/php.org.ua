- [«
MongoDB\Driver\Manager::selectServer](mongodb-driver-manager.selectserver.md)
- [MongoDB\Driver\Command »](class.mongodb-driver-command.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Manager](class.mongodb-driver-manager.md)
- Запускає новий сеанс клієнта для використання з цим клієнтом

# MongoDB\Driver\Manager::startSession

(mongodb \>u003d1.4.0)

MongoDB\Driver\Manager::startSession — Запуск нового клієнтського сеансу
для використання з цим клієнтом

### Опис

final public **MongoDB\Driver\Manager::startSession**(array `$options` u003d
?): [MongoDB\Driver\Session](class.mongodb-driver-session.md)

Створює [MongoDB\Driver\Session](class.mongodb-driver-session.md) для
вказаних параметрів. Сеанс потім може бути вказаний під час виконання
команд, запитів та операцій запису.

> **Примітка**:
> [MongoDB\Driver\Session](class.mongodb-driver-session.md) може
> використовуватися тільки з
> [MongoDB\Driver\Manager](class.mongodb-driver-manager.md), з
> якого він було створено.

### Список параметрів

`options`
[TABLE]

**options**

### Значення, що повертаються

Повертає [MongoDB\Driver\Session](class.mongodb-driver-session.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Викидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md)
якщо опції ``causalConsistency'' і ``snapshot'' рівні **`true`**.
- Викидає виняток
[MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md)
якщо сеанс не може бути створений (наприклад, libmongoc не підтримує
шифрування).

### Список змін

| Версія | Опис |
|---------------------|--------------------------- ---------------------------------------------|
| PECL mongodb 1.11.0 | Додано параметр `snapshot`. |
| PECL mongodb 1.6.0 Параметр ``maxCommitTimeMS'` доданий до ``defaultTransactionOptions''. |
| PECL mongodb 1.5.0 Додана опція ``defaultTransactionOptions'`. |

### Дивіться також

- [MongoDB\Driver\Session](class.mongodb-driver-session.md)
- [» Причинна
узгодженість](https://www.mongodb.com/docs/manual/core/read-isolation-consistency-recency/#causal-consistency)
у посібнику MongoDB
