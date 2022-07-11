- [«
MongoDB\Driver\Manager::removeSubscriber](mongodb-driver-manager.removesubscriber.md)
- [MongoDB\Driver\Manager::startSession
»](mongodb-driver-manager.startsession.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Manager](class.mongodb-driver-manager.md)
- Вибрати сервер, що відповідає перевагам читання

# MongoDB\Driver\Manager::selectServer

(mongodb \>u003d1.0.0)

MongoDB\Driver\Manager::selectServer — Вибрати відповідний сервер
уподобанням читання

### Опис

final public
**MongoDB\Driver\Manager::selectServer**(?[MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md)
`$readPreference` u003d **`null`**):
[MongoDB\Driver\Server](class.mongodb-driver-server.md)

Вибирає [MongoDB\Driver\Server](class.mongodb-driver-server.md),
відповідний `readPreference`. Якщо параметр `readPreference` дорівнює
**`null`** або опущений, за замовчуванням буде обрано первинний сервер. Це
можна використовувати для попереднього вибору сервера, щоб виконати
перевірку версії перед виконанням операції.

> **Примітка**: На відміну від
> [MongoDB\Driver\Manager::getServers()](mongodb-driver-manager.getservers.md),
> цей метод ініціалізуватиме підключення до бази даних і при
> необхідності виконувати виявлення сервера. Докладніше дивіться.
> [» Специфікацію вибору
> сервера](https://github.com/mongodb/specifications/blob/master/source/server-selection/server-selection.rst#single-threaded-server-selection).

### Список параметрів

`readPreference` ([MongoDB\Driver\ReadPreference](class.mongodb-driver-readpreference.md))
Перевага читання використовується для вибору сервера. Якщо **`null`** або
опущено, за замовчуванням буде обрано первинний сервер.

### Значення, що повертаються

Повертає [MongoDB\Driver\Server](class.mongodb-driver-server.md),
відповідний перевагу читання.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- При невдалому з'єднанні з сервером (крім помилок автентифікації),
кидає виняток
[MongoDB\Driver\Exception\ConnectionException](class.mongodb-driver-exception-connectionexception.md).
- За невдалої аутентифікації кидає виняток
[MongoDB\Driver\Exception\AuthenticationException](class.mongodb-driver-exception-authenticationexception.md).
- При неможливості знайти сервер, що відповідає перевагу читання,
викидає виняток
[MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md)

### Список змін

| Версія | Опис |
|---------------------|--------------------------- -------------------------------------------------- -------------------------------------------------- ----------|
| PECL mongodb 1.11.0 | Параметр readPreference тепер необов'язковий. Якщо вказано значення **`null`** або опущено, за промовчанням буде обрано первинний сервер. |

### Дивіться також

- [MongoDB\Driver\Server](class.mongodb-driver-server.md)
- [MongoDB\Driver\Manager::getServers()](mongodb-driver-manager.getservers.md) -
Повертає сервери, до яких підключено менеджера
- [» Специфікація вибору
сервера](https://github.com/mongodb/specifications/blob/master/source/server-selection/server-selection.rst)
