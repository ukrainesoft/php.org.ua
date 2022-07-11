- [«
MongoDB\Driver\ClientEncryption::createDataKey](mongodb-driver-clientencryption.createdatakey.md)
- [MongoDB\Driver\ClientEncryption::encrypt
»](mongodb-driver-clientencryption.encrypt.md)

- [PHP Manual](index.md)
- [MongoDB\Driver\ClientEncryption](class.mongodb-driver-clientencryption.md)
- Розшифрувати дані

# MongoDB\Driver\ClientEncryption::decrypt

(mongodb \>u003d1.7.0)

MongoDB\Driver\ClientEncryption::decrypt — Розшифрувати дані

### Опис

final public
**MongoDB\Driver\ClientEncryption::decrypt**([MongoDB\BSON\Binary](class.mongodb-bson-binary.md)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Розшифровує значення.

### Список параметрів

`value`
Об'єкт класу [MongoDB\BSON\Binary](class.mongodb-bson-binary.md) з
підтипом 6, що містить зашифровані дані.

### Значення, що повертаються

Повертає розшифровані дані у тому вигляді, як вони були передані у
[MongoDB\Driver\ClientEncryption::encrypt()](mongodb-driver-clientencryption.encrypt.md).

### Помилки

- При помилці парсингу аргумент кидає виняток
[MongoDB\Driver\Exception\InvalidArgumentException](class.mongodb-driver-exception-invalidargumentexception.md).
- кидає виняток
[MongoDB\Driver\Exception\EncryptionException](class.mongodb-driver-exception-encryptionexception.md)
якщо в процесі дешифрування сталася помилка

### Дивіться також

- [MongoDB\Driver\ClientEncryption::encrypt()](mongodb-driver-clientencryption.encrypt.md) -
Шифрує дані
