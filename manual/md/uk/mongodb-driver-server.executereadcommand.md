- [«
MongoDB\Driver\Server::executeQuery](mongodb-driver-server.executequery.md)
- [MongoDB\Driver\Server::executeReadWriteCommand
»](mongodb-driver-server.executereadwritecommand.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- Виконує команду бази даних, яка читає на сервері

# MongoDB\Driver\Server::executeReadCommand

(mongodb \>u003d1.4.0)

MongoDB\Driver\Server::executeReadCommand — Виконує команду бази
даних, що читає на сервері

### Опис

final public **MongoDB\Driver\Server::executeReadCommand**(string `$db`,
[MongoDB\Driver\Command](class.mongodb-driver-command.md) `$command`,
array `$options` u003d array()):
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)

Виконує команду на цьому сервері.

Цей метод буде застосовувати логіку, специфічну для команд, які
читають (наприклад,
[»count](https://www.mongodb.com/docs/manual/reference/command/count/))
та враховують версію сервера MongoDB. Опція ``readConcern'` буде по
замовчуванням відповідати відповідному значенню з [URI підключення
MongoDB](mongodb-driver-manager.construct.md#mongodb-driver-manager.construct-uri).

> **Примітка**: Опція ``readPreference'` не контролює сервер, до
> якому драйвер виконує операцію; вона завжди буде виконуватися на
> цей об'єкт сервера. Замість цього, він може бути використаний при
> виконання операції на другому вузлі (з набору реплік, не автономний)
> або на вузлі mongos для забезпечення того, що драйвер встановлює
> дротовий протокол відповідним чином або додає перевагу
> Читання до операції, відповідно.

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
- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- При невдалому з'єднанні з сервером (крім помилок автентифікації),
кидає виняток
[MongoDB\Driver\Exception\ConnectionException](class.mongodb-driver-exception-connectionexception.md).
- За невдалої аутентифікації кидає виняток
[MongoDB\Driver\Exception\AuthenticationException](class.mongodb-driver-exception-authenticationexception.md).
- Видає виняток
[MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md)
інші помилки (наприклад, неправильна команда ).

### Дивіться також

- [MongoDB\Driver\Command](class.mongodb-driver-command.md)
- [MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)
- [MongoDB\Driver\Server::executeCommand()](mongodb-driver-server.executecommand.md) -
Виконати команду бази даних на сервері
- [MongoDB\Driver\Server::executeReadWriteCommand()](mongodb-driver-server.executereadwritecommand.md) -
Виконує команду бази даних, яка читає та пише на сервері
- [MongoDB\Driver\Server::executeWriteCommand()](mongodb-driver-server.executewritecommand.md) -
Виконує команду бази даних, що пише на сервері
- [MongoDB\Driver\Manager::executeReadCommand()](mongodb-driver-manager.executereadcommand.md) -
Виконує команду бази даних, яка читає
