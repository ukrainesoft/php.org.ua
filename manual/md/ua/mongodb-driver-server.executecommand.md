- [«
MongoDB\Driver\Server::executeBulkWrite](mongodb-driver-server.executebulkwrite.md)
- [MongoDB\Driver\Server::executeQuery
»](mongodb-driver-server.executequery.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- Виконати команду бази даних на сервері

# MongoDB\Driver\Server::executeCommand

(mongodb \>u003d1.0.0)

MongoDB\Driver\Server::executeCommand — Виконати команду бази даних на
сервері

### Опис

final public **MongoDB\Driver\Server::executeCommand**(string `$db`,
[MongoDB\Driver\Command](class.mongodb-driver-command.md) `$command`,
array `$options` u003d array()):
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)

Виконує команду на сервері.

Цей метод не застосовує особливої логіки до команди. Хоча цей метод
приймає ``readConcern'' та ``writeConcern'', які будуть включені в
документи коанди, ці опції не відповідатимуть значенням по
замовчуванням з [MongoDB URI
з'єднання](mongodb-driver-manager.construct.md#mongodb-driver-manager.construct-uri)
, і не враховуватиметься версія сервера MongoDB. Тому користувачам
рекомендується використовувати конкретні методи команди читання та/або запису
якщо це можливо.

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
- Викидає виняток
[MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md)
у разі виникнення інших помилок (наприклад, неправильна команда,
видача команди запису на вторинний пристрій).

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------------------------|
| PECL mongodb 1.4.4 | Якщо опція "session" використовується в поєднанні з непідтвердженою гарантією запису, викидається виняток [MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md). |
| PECL mongodb 1.4.0 | Третій параметр тепер є масивом `options`. Для зворотної сумісності цей параметр все одно прийме об'єкт [MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md). |

### Примітки

> **Примітка**: Відповідальність коду, що викликає, полягає в тому, що
> сервер може виконувати операцію запису. Наприклад, виконання
> операції запису на вторинному вузлі (за винятком "локальної" бази даних)
> завершиться невдачею.

### Дивіться також

- [MongoDB\Driver\Command](class.mongodb-driver-command.md)
- [MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)
- [MongoDB\Driver\Server::executeReadCommand()](mongodb-driver-server.executereadcommand.md) -
Виконує команду бази даних, яка читає на сервері
- [MongoDB\Driver\Server::executeReadWriteCommand()](mongodb-driver-server.executereadwritecommand.md) -
Виконує команду бази даних, яка читає та пише на сервері
- [MongoDB\Driver\Server::executeWriteCommand()](mongodb-driver-server.executewritecommand.md) -
Виконує команду бази даних, що пише на сервері
- [MongoDB\Driver\Manager::executeCommand()](mongodb-driver-manager.executecommand.md) -
Виконує команду бази даних
