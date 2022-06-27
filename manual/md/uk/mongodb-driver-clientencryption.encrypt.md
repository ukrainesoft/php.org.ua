- [«
MongoDB\Driver\ClientEncryption::decrypt](mongodb-driver-clientencryption.decrypt.md)
- [MongoDB\Driver\ServerApi »](class.mongodb-driver-serverapi.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ClientEncryption](class.mongodb-driver-clientencryption.md)
- Шифрує дані

# MongoDB\Driver\ClientEncryption::encrypt

(mongodb \>u003d1.7.0)

MongoDB\Driver\ClientEncryption::encrypt — Шифрує дані

### Опис

final public
**MongoDB\Driver\ClientEncryption::encrypt**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, array `$options` u003d ?):
[MongoDB\BSON\Binary](class.mongodb-bson-binary.md)

Шифрує дані.

### Список параметрів

`value`
Значення для шифрування. Метод може зашифрувати будь-які дані, які
можуть бути записані MongoDB.

`options`
[TABLE]

**Опції шифрування**

### Значення, що повертаються

Повертає зашифровані дані як об'єкт
[MongoDB\BSON\Binary](class.mongodb-bson-binary.md) з підтипом 6.

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- Викидає виняток
[MongoDB\Driver\Exception\EncryptionException](class.mongodb-driver-exception-encryptionexception.md)
якщо при шифруванні виникла помилка

### Список змін

| Версія | Опис |
|---------------------|--------------------------- ----------------------------|
| PECL mongodb 1.14.0 | Додані опції ``contentionFactor'` та ``queryType'`. |

### Дивіться також

- [MongoDB\Driver\ClientEncryption::decrypt()](mongodb-driver-clientencryption.decrypt.md) -
Розшифрувати дані
