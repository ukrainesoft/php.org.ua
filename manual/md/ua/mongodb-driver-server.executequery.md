- [«
MongoDB\Driver\Server::executeCommand](mongodb-driver-server.executecommand.md)
- [MongoDB\Driver\Server::executeReadCommand
»](mongodb-driver-server.executereadcommand.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- Виконує запит до бази даних на сервері

# MongoDB\Driver\Server::executeQuery

(mongodb \>u003d1.0.0)

MongoDB\Driver\Server::executeQuery — Виконує запит до бази даних на
сервері

### Опис

final public **MongoDB\Driver\Server::executeQuery**(string
`$namespace`, [MongoDB\Driver\Query](class.mongodb-driver-query.md)
`$query`, array `$options` u003d array()):
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)

Виконує запит на сервері.

> **Примітка**: Опція ``readPreference'` не керує сервером,
> якому драйвер виконує операцію; він завжди буде виконуватися на
> цей об'єкт сервера. Натомість його можна використовувати при видачі
> операції на вторинному сервері (зі з'єднання з реплікою, а не
> автономний) або вузол mongos, щоб гарантувати, що драйвер
> відповідно встановлює дротовий протокол або додає
> переваги читання до операції, відповідно.

### Список параметрів

`namespace` (string)
Повністю певне ім'я (тобто `databaseName.collectionName`).

`query` ([MongoDB\Driver\Query](class.mongodb-driver-query.md))
Запит на виконання.

`options`
| Опція | Тип | Опис |
|----------------|-------------------------------- -------------------------------------------|------ -------------------------------------------------- -----------------------|
| readPreference | [MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md) | Перевага читання, що використовується для вибору сервера для виконання операції. |
| session | [MongoDB\Driver\Session](class.mongodb-driver-session.md) | Сесія зв'язування з операцією. |

**options**

### Значення, що повертаються

У разі успішного виконання повертає
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- При невдалому з'єднанні з сервером (крім помилок автентифікації),
кидає виняток
[MongoDB\Driver\Exception\ConnectionException](class.mongodb-driver-exception-connectionexception.md).
- За невдалої аутентифікації кидає виняток
[MongoDB\Driver\Exception\AuthenticationException](class.mongodb-driver-exception-authenticationexception.md).
- Видає виняток
[MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md)
інші помилки (наприклад, неприпустимі оператори запитів).

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------------------|
| PECL mongodb 1.4.0 | Третій параметр тепер є масивом options. Для зворотної сумісності цей параметр, як і раніше, прийматиме об'єкт [MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md). |

### Дивіться також

- [MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)
- [MongoDB\Driver\Query](class.mongodb-driver-query.md)
- [MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)
- [MongoDB\Driver\Manager::executeQuery()](mongodb-driver-manager.executequery.md) -
Виконує запит до бази даних
