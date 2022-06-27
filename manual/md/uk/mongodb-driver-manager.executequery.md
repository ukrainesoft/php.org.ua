- [«
MongoDB\Driver\Manager::executeCommand](mongodb-driver-manager.executecommand.md)
- [MongoDB\Driver\Manager::executeReadCommand
»](mongodb-driver-manager.executereadcommand.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Manager](class.mongodb-driver-manager.md)
- Виконує запит до бази даних

# MongoDB\Driver\Manager::executeQuery

(mongodb \>u003d1.0.0)

MongoDB\Driver\Manager::executeQuery — Виконує запит до бази даних

### Опис

final public **MongoDB\Driver\Manager::executeQuery**(string
`$namespace`, [MongoDB\Driver\Query](class.mongodb-driver-query.md)
`$query`, array `$options` u003d array()):
[MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)

Вибирає сервер відповідно до опції ``readPreference'` і виконує
запит на цьому сервері. За замовчуванням використовуватиметься перевага
читання з URI [URI підключення
MongoDB](mongodb-driver-manager.construct.md#mongodb-driver-manager.construct-uri).

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
- У разі виникнення інших помилок (наприклад, неправильні оператори
запиту), викидає виняток
[MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md).

### Список змін

| Версія | Опис |
|--------------------|---------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------|
| PECL mongodb 1.4.0 | Третій параметр тепер є масивом `options`. Для зворотної сумісності цей параметр все одно прийме об'єкт [MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md). |

### Приклади

**Приклад #1 Приклад використання
**MongoDB\Driver\Manager::executeQuery()****

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://localhost:27017");$bulk u003d new MongoDB\Driver\BulkWrite;$bulk->insert(['x' u003d> 1]) ;$bulk->insert(['x' u003d> 2]);$bulk->insert(['x' u003d> 3]);$manager->executeBulkWrite('db.collection', $bulk);$ filter u003d'['x' u003d> ['$gt' u003d> 1]];$options u003d [    'projection' u003d> ['_id' u003d> 0],    'sort' u003d> ['x' ],];$query u003d new MongoDB\Driver\Query($filter, $options);$cursor u003d $manager->executeQuery('db.collection', $query);foreach ($cursor as $document) { ($document);}?> `

Результат виконання цього прикладу:

object(stdClass)#6 (1) {
["x"]u003d>
int(3)
}
object(stdClass)#7 (1) {
["x"]u003d>
int(2)
}

**Приклад #2 Обмеження часу виконання запиту**

Опція ``maxTimeMS'` класу
[MongoDB\Driver\Query](class.mongodb-driver-query.md) може
використовуватись для обмеження часу виконання запиту. Зверніть
увагу, що цей термін застосовується на стороні сервера та не враховує
затримки мережі. Дивіться [» Завершення виконання
операцій](https://www.mongodb.com/docs/manual/tutorial/terminate-running-operations/#maxtimems)
у посібнику MongoDB для отримання додаткової інформації.

` <?php$manager u003d new MongoDB\Driver\Manager('mongodb://localhost:27017');$filter u003d ['x' u003d> ['$gt' u003d> 1]];$options u003d [    '' maxTimeMS' u003d> 1000,];$query u003d new MongoDB\Driver\Query($filter, $options);$cursor u003d $manager->executeQuery('db.collection', $query);foreach ($cursor document) {   var_dump($document);}?> `

Якщо запит не завершиться через секунду після початку виконання на
сервері, буде викинуто виняток
[MongoDB\Driver\Exception\ExecutionTimeoutException](class.mongodb-driver-exception-executiontimeoutexception.md).

### Дивіться також

- [MongoDB\Driver\Cursor](class.mongodb-driver-cursor.md)
- [MongoDB\Driver\Query](class.mongodb-driver-query.md)
- [MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)
- [MongoDB\Driver\Server::executeQuery()](mongodb-driver-server.executequery.md) -
Виконує запит до бази даних на сервері
