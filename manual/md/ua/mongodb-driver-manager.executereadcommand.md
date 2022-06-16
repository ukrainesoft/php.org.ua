- [«
MongoDB\Driver\Manager::executeQuery](mongodb-driver-manager.executequery.md)
- [MongoDB\Driver\Manager::executeReadWriteCommand
»](mongodb-driver-manager.executereadwritecommand.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Manager](class.mongodb-driver-manager.md)
- Виконує команду бази даних, яка читає

# MongoDB\Driver\Manager::executeReadCommand

(mongodb \>u003d1.4.0)

MongoDB\Driver\Manager::executeReadCommand — Виконує команду бази
даних, що читає

### Опис

final public **MongoDB\Driver\Manager::executeReadCommand**(string
`$db`, [MongoDB\Driver\Command](class.mongodb-driver-command.md)
`$command`, array `$options` u003d array()):
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)

Вибирає сервер відповідно до опції ``readPreference'` і виконує
команду на сервері. За замовчуванням використовуватиметься перевага
читання з [URI підключення
MongoDB](mongodb-driver-manager.construct.md#mongodb-driver-manager.construct-uri).

Цей метод буде застосовувати логіку, специфічну для команд, які
читають (наприклад,
[»count](https://www.mongodb.com/docs/manual/reference/command/count/))
та враховують версію сервера MongoDB. Опція ``readConcern'` буде по
замовчуванням відповідати відповідному значенню з [URI підключення
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
- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- При невдалому з'єднанні з сервером (крім помилок автентифікації),
кидає виняток
[MongoDB\Driver\Exception\ConnectionException](class.mongodb-driver-exception-connectionexception.md).
- За невдалої аутентифікації кидає виняток
[MongoDB\Driver\Exception\AuthenticationException](class.mongodb-driver-exception-authenticationexception.md).
- Видає виняток
[MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md)
інших помилок (наприклад, неправильна команда).

### Дивіться також

- [MongoDB\Driver\Command](class.mongodb-driver-command.md)
- [MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)
- [MongoDB\Driver\Manager::executeCommand()](mongodb-driver-manager.executecommand.md) -
Виконує команду бази даних
- [MongoDB\Driver\Manager::executeReadWriteCommand()](mongodb-driver-manager.executereadwritecommand.md) -
Виконує команду бази даних, яка читає та пише
- [MongoDB\Driver\Manager::executeWriteCommand()](mongodb-driver-manager.executewritecommand.md) -
Виконує команду бази даних, що пише
- [MongoDB\Driver\Server::executeReadCommand()](mongodb-driver-server.executereadcommand.md) -
Виконує команду бази даних, яка читає на сервері
