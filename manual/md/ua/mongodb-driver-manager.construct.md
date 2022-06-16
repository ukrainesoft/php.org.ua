- [«
MongoDB\Driver\Manager::addSubscriber](mongodb-driver-manager.addsubscriber.md)
- [MongoDB\Driver\Manager::createClientEncryption
»](mongodb-driver-manager.createclientencryption.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Manager](class.mongodb-driver-manager.md)
- Створює новий Manager MongoDB

# MongoDB\Driver\Manager::\_\_construct

(mongodb \>u003d1.0.0)

MongoDB\Driver\Manager::\_\_construct - Створює новий Manager MongoDB

### Опис

final public **MongoDB\Driver\Manager::\_\_construct**(string `$uri` u003d
"mongodb://127.0.0.1/", array `$uriOptions` u003d array(), array
`$driverOptions` u003d array())

Створює новий об'єкт
[MongoDB\Driver\Manager](class.mongodb-driver-manager.md) з
переданими параметрами.

> **Примітка**: У [» специфікації з виявлення та моніторингу
> сервера](https://github.com/mongodb/specifications/blob/master/source/server-discovery-and-monitoring/server-discovery-and-monitoring.rst#single-threaded-client-construction),
> цей конструктор не виконує введення-виводу. З'єднання будуть
> ініціалізуватись на вимогу, коли виконується перша операція.

> **Примітка**: Під час передачі будь-яких опцій URI, пов'язаних з SSL або TLS,
> через рядок підключення або параметр uriOptions, драйвер неявно
> включає TLS під час з'єднань. Щоб запобігти цьому, або явно
> вимкніть опцію `tls`, або не передавайте жодних TLS-опцій.

> **Примітка**: На Unix, драйвер MongoDB чутливий до сценаріїв,
> які використовують системний виклик fork() без наступного exec().
> Користувачам рекомендується не перевикористовувати екземпляр
> [MongoDB\Driver\Manager](class.mongodb-driver-manager.md) у дочірньому
> процесі. child process.

### Список параметрів

`uri`
URI-адреса підключення
[»mongodb://](https://www.mongodb.com/docs/manual/reference/connection-string/):

``` txtcode
mongodb://[username:password@]host1[:port1][,host2[:port2],...[,hostN[:portN]]][/[defaultAuthDb][?options]]
````

Докладніше про параметри, що підтримуються URI, дивіться розділ [» Параметри
рядки
підключення](https://www.mongodb.com/docs/manual/reference/connection-string/#connections-connection-options)
у посібнику MongoDB. [» Параметри пулу
підключення](https://www.mongodb.com/docs/manual/reference/connection-string/#connection-pool-options)
не підтримуються, т.к. PHP-драйвер не продає пули підключень.

`uri` - це URL, тому будь-які спеціальні символи у його компонентах
повинні закодовані відповідно до [» RFC
3986](http://www.faqs.org/rfcs/rfc3986). Це особливо актуально для
імені користувача та пароля, які часто можуть містити спеціальні
символи, такі як `@`, `:`, або `%`. При підключенні через доменний
сокет Unix, шлях сокету може містити спеціальні символи, наприклад
сліди, які необхідно закодувати. Функція
[rawurlencode()](function.rawurlencode.md) може використовуватися для
кодування складових частин URI-адреси.

Компонент `defaultAuthDb` може використовуватись для вказівки імені бази
даних, пов'язаних з обліковими даними користувача; однак параметр URI
`authSource` матиме пріоритет, якщо він вказаний. Якщо не
`defaultAuthDb`, ні `authSource` не вказані, база даних `admin` буде
використовуватися за замовчуванням. Компонент `defaultAuthDb` не має сенсу
за відсутності облікових даних користувача.

`uriOptions`
Додаткові [» параметри рядка
підключення](https://www.mongodb.com/docs/manual/reference/connection-string/#connections-connection-options),
які будуть перезаписувати будь-які параметри з тим самим ім'ям у параметрі
`uri`.

[TABLE]

**uriOptions**

`driverOptions`
[TABLE]

**driverOptions**

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- При неправильному форматі `uri` викидає виняток
[MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md).

### Список змін

[TABLE]

### Приклади

**Приклад #1 Приклади використання
**MongoDB\Driver\Manager::\_\_construct()****

Підключення до автономного вузла MongoDB:

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://example.com:27017");?> `

Підключення до автономного сайту MongoDB через доменний сокет Unix. Шлях
сокет може містити спеціальні символи, наприклад сліші, які
повинні закодовані за допомогою
[rawurlencode()](function.rawurlencode.md).

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://" . rawurlencode("/tmp/mongodb-27017.sock"));?> `

Підключення до набору реплік:

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://rs1.example.com,rs2.example.com/?replicaSetu003dmyReplicaSet");?> `

Підключення до сегментованого кластера (тобто одну або кілька
екземплярам mongos):

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://mongos1.example.com,mongos2.example.com/");?> `

Підключення до MongoDB з обліковими даними аутентифікації для конкретного
користувача та бази даних:

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://myusername:mypassword@example.com/?authSourceu003ddatabaseName");?> `

Підключення до MongoDB з обліковими даними аутентифікації для конкретного
користувача та бази даних, де ім'я користувача або пароль містять
спеціальні символи (наприклад, `@`, `:`, `%`). У наступному прикладі,
рядок з паролем `myp@ss:w%rd` був вручну екранований; однак
[rawurlencode()](function.rawurlencode.md) може використовуватися для
екранування URI-компонентів, які можуть містити спеціальні
символи.

` <?php$manager u003d new MongoDB\Driver\Manager("mongodb://myusername:mypassword@example.com/?authSourceu003ddatabaseName");?> `

Підключення до MongoDB з автентифікацією X509:

`<?php$manager u003d new MongoDB\Driver\Manager(   "mongodb://example.com/?sslu003dtrue&authMechanismu003dMONGODB-X509",    []/ | pem",    ]);?> `

### Дивіться також

- [Обробка підключення та
збереження](mongodb.connection-handling.md)
- [» Формат рядка з'єднання
MongoDB](https://www.mongodb.com/docs/manual/reference/connection-string/)
