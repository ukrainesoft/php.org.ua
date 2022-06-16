- [«
MongoDB\Driver\ClientEncryption](class.mongodb-driver-clientencryption.md)
- [MongoDB\Driver\ClientEncryption::createDataKey
»](mongodb-driver-clientencryption.createdatakey.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ClientEncryption](class.mongodb-driver-clientencryption.md)
- Створює новий об'єкт ClientEncryption

# MongoDB\Driver\ClientEncryption::\_\_construct

(mongodb \>u003d1.14.0)

MongoDB\Driver\ClientEncryption::\_\_construct — Створює новий об'єкт
ClientEncryption

### Опис

final public **MongoDB\Driver\ClientEncryption::\_\_construct**(array
`$options`)

Створює новий об'єкт
[MongoDB\Driver\ClientEncryption](class.mongodb-driver-clientencryption.md)
із зазначеними опціями.

### Список параметрів

`options`
[TABLE]

**Опції**

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Викидає виняток
[MongoDB\Driver\Exception\RuntimeException](class.mongodb-driver-exception-runtimeexception.md),
якщо модуль був скомпілюваний без підтримки libmongocrypt.

### Дивіться також

- [MongoDB\Driver\Manager::createClientEncryption()](mongodb-driver-manager.createclientencryption.md) -
Створення нового об'єкта ClientEncryption
- [» Явне (ручне) шифрування рівня полів на стороні
клієнта](https://www.mongodb.com/docs/manual/core/security-explicit-client-side-encryption/)
у посібнику з MongoDB
