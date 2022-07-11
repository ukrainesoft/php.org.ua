- [«
MongoDB\Driver\Manager::\_\_construct](mongodb-driver-manager.construct.md)
- [MongoDB\Driver\Manager::executeBulkWrite
»](mongodb-driver-manager.executebulkwrite.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\Manager](class.mongodb-driver-manager.md)
- Створення нового об'єкта ClientEncryption

# MongoDB\Driver\Manager::createClientEncryption

(mongodb \>u003d1.7.0)

MongoDB\Driver\Manager::createClientEncryption — Створення нового об'єкта
ClientEncryption

### Опис

final public **MongoDB\Driver\Manager::createClientEncryption**(array
`$options`):
[MongoDB\Driver\ClientEncryption](class.mongodb-driver-clientencryption.md)

Створює новий об'єкт
[MongoDB\Driver\ClientEncryption](class.mongodb-driver-clientencryption.md)
із заданими параметрами.

### Список параметрів

`options`
[TABLE]

**options**

### Значення, що повертаються

Повертає новий екземпляр
[MongoDB\Driver\ClientEncryption](class.mongodb-driver-clientencryption.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Викидає виняток
[MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md)
якщо модуль був скомпільований без підтримки libmongocrypt

### Список змін

[TABLE]

### Дивіться також

- [MongoDB\Driver\ClientEncryption::\_\_construct()](mongodb-driver-clientencryption.construct.md) -
Створює новий об'єкт ClientEncryption
- Сторінка в посібнику з MongoDB: [» Явне (ручне) шифрування на
рівні поля на стороні
клієнта](https://www.mongodb.com/docs/manual/core/security-explicit-client-side-encryption/)
