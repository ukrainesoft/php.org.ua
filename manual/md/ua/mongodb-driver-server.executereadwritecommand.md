- [«
MongoDB\Driver\Server::executeReadCommand](mongodb-driver-server.executereadcommand.md)
- [MongoDB\Driver\Server::executeWriteCommand
»](mongodb-driver-server.executewritecommand.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- Виконує команду бази даних, яка читає та пише на сервері

# MongoDB\Driver\Server::executeReadWriteCommand

(mongodb \>u003d1.4.0)

MongoDB\Driver\Server::executeReadWriteCommand — Виконує команду бази
даних, яка читає та пише на сервері

### Опис

final public **MongoDB\Driver\Server::executeReadWriteCommand**(string
`$db`, [MongoDB\Driver\Command](class.mongodb-driver-command.md)
`$command`, array `$options` u003d array()):
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)

Виконує команду на сервері.

Цей метод буде застосовувати логіку, специфічну для команд, які
читають та пишуть (наприклад,
[» aggregate](https://www.mongodb.com/docs/manual/reference/command/aggregate/))
та враховують версію сервера MongoDB. Параметри ``readConcern'` та
`"writeConcern"` за замовчуванням відповідають відповідним значенням з
[URI підключення
MongoDB](mongodb-driver-manager.construct.md#mongodb-driver-manager.construct-uri).

### Список параметрів

`db` (string)
Назва бази даних, в якій запускається команда.

`command` ([MongoDB\Driver\Command](class.mongodb-driver-command.md))
Команда для виконання.

`options`
[TABLE]

**options**

**Увага**
При використанні `session` та наявності незавершених транзакцій, ви не
можете вказати ``readConcern'' або 'writeConcern' option. Це приведе
до викидання виключення
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
Натомість ви повинні встановити ці дві опції при створенні транзакції
за допомогою
[MongoDB\Driver\Session::startTransaction()](mongodb-driver-session.starttransaction.md).

### Значення, що повертаються

У разі успішного виконання повертає
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md).

### Помилки

- Викидається
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md),
якщо опція ``session'` використовується з відповідною транзакцією в
поєднанні з опцією `readConcern` або `writeConcern`.
- Викидається
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md),
якщо опція ``session'` використовується в поєднанні з непідтвердженим
гарантією запису.
- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- При невдалому з'єднанні з сервером (крім помилок автентифікації),
кидає виняток
[MongoDB\Driver\Exception\ConnectionException](class.mongodb-driver-exception-connectionexception.md).
- За невдалої аутентифікації кидає виняток
[MongoDB\Driver\Exception\AuthenticationException](class.mongodb-driver-exception-authenticationexception.md).
- Видає виняток
[MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md)
інші помилки (наприклад, неправильна команда).

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------|
| PECL mongodb 1.4.4 | [MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md) буде викинуто, якщо опція ``session'` використовується в поєднанні з непідтвердженим записом. |

### Примітки

> **Примітка**: Відповідальність коду, що викликає, полягає в тому, що
> сервер може виконувати операцію запису. Наприклад, виконання
> операції запису на вторинному вузлі (за винятком "локальної" бази даних)
> завершиться невдачею.

### Дивіться також

- [MongoDB\Driver\Command](class.mongodb-driver-command.md)
- [MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)
- [MongoDB\Driver\Server::executeCommand()](mongodb-driver-server.executecommand.md) -
Виконати команду бази даних на сервері
- [MongoDB\Driver\Server::executeReadCommand()](mongodb-driver-server.executereadcommand.md) -
Виконує команду бази даних, яка читає на сервері
- [MongoDB\Driver\Server::executeWriteCommand()](mongodb-driver-server.executewritecommand.md) -
Виконує команду бази даних, що пише на сервері
- [MongoDB\Driver\Manager::executeReadWriteCommand()](mongodb-driver-manager.executereadwritecommand.md) -
Виконує команду бази даних, яка читає та пише
